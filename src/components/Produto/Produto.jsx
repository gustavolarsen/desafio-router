import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Head from "../Head/Head";
import styles from "./Produto.module.css";

const Produto = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://ranekapi.origamid.dev/json/api/produto/${id}`
        );
        const data = await response.json();
        setProduto(data);
      } catch (error) {
        setError("Erro ao carregar o produto: " + error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  if (loading) return <div className="loading"></div>;
  if (error) return <p>{error}</p>;

  return (
    <section className={`${styles.produto} animeLeft`}>
      <Head
        title={`Ranek | ${produto.nome}`}
        description={produto.descricao}
      />
      <div>
        {produto.fotos.map((foto) => (
          <img
            key={foto.src}
            src={foto.src}
            alt={foto.titulo}
            className={styles.foto}
          />
        ))}
      </div>
      <div>
        <h1 className={styles.titulo}>{produto.nome}</h1>

        <span className={styles.preco}>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(produto.preco)}
        </span>
        <p className={styles.descricao}>{produto.descricao}</p>
      </div>
    </section>
  );
};

export default Produto;
