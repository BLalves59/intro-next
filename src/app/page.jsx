import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className='containerGlobal'>

      <div className={styles.containerTitulo}>
        <h1 className={styles.txtTitulo}>Aula next</h1>  
        <h2>Exemplo2</h2>
        <h3>Exemplo3</h3>
        <p>Exemplo paragrafo</p>

        {/* <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>  OUUU..... */}
          <div className={styles.containerImagem}>
           <Image
            src={"/arvore.jpg"}
            width={100}
            height={100}
            alt="Imagem da arvore"
            className={styles.imageHome}
          />
          <Image
            src={"/arvore.jpg"}
            width={1000}
            height={1000}
            alt="Imagem da arvore"
            className={styles.imageHome}
          />
        </div>
      </div>
      
    </div>
  )
}
