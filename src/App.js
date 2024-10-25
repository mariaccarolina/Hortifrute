import { useState } from "react";

export default function App() {
  const [frutasFiltradas, setFrutasFiltradas] = useState([]);
  const frutas = [
    {
      nome: "Banana",
      preco: 7,
    },
    {
      nome: "Kiwi",
      preco: 20,
    },
    {
      nome: "Maçã",
      preco: 8,
    },
    {
      nome: "Caju",
      preco: 13,
    },
    {
      nome: "Laranja",
      preco: 14,
    },
    {
      nome: "Melancia",
      preco: 5,
    },
  ];
  // () => { retornar lógica}
  // () => (retornar tags)
  const promocao = () => {
    setFrutasFiltradas(
      frutas.filter((elemento) => {
        return elemento.preco <= 8;
      })
    );
  };

  return (
    <section>
      <h1>Hortifruti do Prefeito</h1>
      <button onClick={promocao}>Frutas em Promoção</button>
      <div>
        {frutasFiltradas.map((item) => (
          <ul>
            <li>{item.nome}</li>
            <li>{item.preco}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
