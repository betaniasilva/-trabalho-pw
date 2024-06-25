import { useEffect, useState } from "react";
import "./App.css";
import ListItems from "./components/ListItems";
import { useForm } from "react-hook-form";
import FormCadastro from "./components/FormCadastro";
import ModalForm from "./components/ModalForm";
import Header from "./components/Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [itemsFiltered, setItemsFiltered] = useState([]);

  const form = useForm();

  const inserirJogo = form.handleSubmit((data) => {
    const newItems = [data, ...items];
    setItems(newItems);
    setItemsFiltered(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    setIsOpen(false);
  });

  const atualizarJogo = (data) => {
    const items = JSON.parse(localStorage.getItem("items"));

    const itemFoundedIndex = items.findIndex((item) => item.id === data.id);

    items.splice(itemFoundedIndex, 1);

    const newItems = [data, ...items];

    setItems(newItems);
    setItemsFiltered(newItems);

    localStorage.setItem("items", JSON.stringify(newItems));
  };

  useEffect(() => {
    const data = localStorage.getItem("items");
    console.log(data);

    if (data) {
      const jsonData = JSON.parse(data);
      setItems(jsonData);
      setItemsFiltered(jsonData);
    } else {
      setItems([]);
      setItemsFiltered([]);
    }
  }, []);

  const handleFilter = (e) => {
    console.log(e.target.value)
    const inputValue = e.target.value.toLowerCase();

    if (inputValue?.length > 0) {
      const newData = items.filter(
        (item) =>
          item?.nome?.toLowerCase()?.includes(inputValue) ||
          item?.descServ?.toLowerCase()?.includes(inputValue) ||
          item?.valor?.toLowerCase()?.includes(inputValue) ||
          item?.categorias?.toLowerCase()?.includes(inputValue)
      );
      setItemsFiltered(newData);
    } else {
      setItemsFiltered(items);
    }
  };
  return (
    <>
      <Header></Header>
      <div className="container">
        <h1>Lista com os melhores descontos de games!</h1>
        <h3>Avalie os jogos e deixe seu comentário.</h3>
        <div className="header">
          <div>
            <input type="text" placeholder="Buscar" onChange={handleFilter} />
          </div>
          <ModalForm
            buttonText={"Inserir um jogo"}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            onCloseModal={() => setIsOpen(false)}
          >
            <FormCadastro form={form} criarServico={inserirJogo} />
          </ModalForm>
        </div>
        {itemsFiltered.length ? (
          <ListItems
            items={itemsFiltered}
            atualizarJogo={atualizarJogo}
            form={form}
          ></ListItems>
        ) : (
          <></>
        )}
        <footer>© 2024 - Betania Amaral - Programação Web </footer>
      </div>
    </>
  );
}

export default App;
