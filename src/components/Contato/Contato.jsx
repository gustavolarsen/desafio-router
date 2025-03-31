import imgContato from "../../assets/contato.jpg";
import Head from "../Head/Head";
import styles from "./Contato.module.css";

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head
        title="Ranek | Contato"
        description="Entre em contato conosco"
      />
      <img
        src={imgContato}
        alt="Máquina de escrever"
      />
      <div>
        <h1>Entre em Contato</h1>
        <ul className={styles.info}>
          <li>contato@mail.com</li>
          <li>+55 11 91234-5678</li>
          <li>Rua Exemplo, 123 - São Paulo, SP</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
