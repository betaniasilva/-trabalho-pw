import { useEffect } from "react";
import "./formCadastro.css";

const categorias = ["Ação", "Terror", "RPG", "Aventura", "MMO"];

const FormCadastro = ({ form, criarServico }) => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Nome:" {...form.register("nome")} />
        <select {...form.register("categorias")}>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <input type="text" placeholder="Valor:" {...form.register("valor")} />
        <input
          type="text"
          placeholder="Link imagem:"
          {...form.register("linkimg")}
        />
        <input
          type="text"
          placeholder="Descrição serviço:"
          {...form.register("descServ")}
        />

        <button onClick={criarServico}>Criar</button>
      </form>
    </div>
  );
};

export default FormCadastro;
