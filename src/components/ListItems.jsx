import { useState } from "react";
import ModalForm from "./ModalForm";
import "./listItems.css";
import FormUpdate from "./FormUpdate";
import Estrelas from "./Estrelas";

const ListItems = ({ items, atualizarJogo, form }) => {
  const [isOpen, setIsOpen] = useState({});
  const [isOpenModalDelete, setIsOpenModalDelete] = useState({});

  return (
    <div className="listItems">
      {items.map((item, index) => {
        return (
          <div key={index} className="card">
            <img src={item.linkimg} alt="" />
            <div className="card-text">
              <h2>{item.nome}</h2>
              <p>Categoria: {item.categorias}</p>
              <p>Descrição: {item.descServ}</p>
              <p>Valor: {item.valor} </p>
            </div>
            <div className="items-button">
              <div className="edit-item">
                <ModalForm
                  buttonText={"Editar"}
                  isOpen={isOpen[index]}
                  setIsOpen={() => setIsOpen({[index]: !isOpen[index] })}
                >
                  <FormUpdate items={item} form={form} atualizarJogo={atualizarJogo} />
                </ModalForm>
              </div>
              <div className="edit-item">
                {/* <ModalForm
                  buttonText={"Deletar"}
                  isOpen={isOpenModalDelete[index]}
                  setIsOpen={() => setIsOpenModalDelete({[index]: !isOpenModalDelete[index] })}
                >
                  <button onClick={() => deleteItem(item.id)}>Deletar</button>
                </ModalForm> */}
                <div>
                  <Estrelas num={items.nota} />
                  <p className="comentario">{items.comentario}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
