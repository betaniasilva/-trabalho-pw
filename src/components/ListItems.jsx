import { useState } from "react";
import Modal from "./Modal";
import "./listItems.css";
import FormUpdate from "./FormUpdate";
import Estrelas from "./Estrelas";

const ListItems = ({ items, atualizarJogo }) => {
  return (
    <div className="listItems">
      {items.map((item, index) => {
        const [isOpen, setIsOpen] = useState(false);
        const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

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
                <Modal
                  buttonText={"Editar"}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                >
                  <FormUpdate items={item} atualizarJogo={atualizarJogo} />
                </Modal>
              </div>
              <div className="edit-item">
                <Modal
                  buttonText={"Deletar"}
                  isOpen={isOpenModalDelete}
                  setIsOpen={setIsOpenModalDelete}
                >
                  <button onClick={() => deleteItem(item.id)}>Deletar</button>
                </Modal>
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
