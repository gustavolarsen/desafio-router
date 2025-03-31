import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "../Head/Head";
import styles from "./ListaProdutos.module.css";

const ListaProdutos = () => {
  const [produtos, setProdutos] = React.useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://ranekapi.origamid.dev/json/api/produto"
      );
      const data = await response.json();
      setProdutos(data);
    };
    fetchData();
  }, []);

  return (
    <section className={`${styles.listaProdutos} animeLeft`}>
      <Head
        title="Ranek"
        description="Ranek é uma loja de produtos eletrônicos"
      />
      {produtos &&
        produtos.map((produto) => (
          <Link
            to={`/produto/${produto.id}`}
            key={produto.id}
            className={styles.card}
          >
            <img
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
            />
            <h2>{produto.nome}</h2>
          </Link>
        ))}
    </section>
  );
};

export default ListaProdutos;
