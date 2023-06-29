import Head from 'next/head'
import styles from '@/styles/Graficas.module.css'
import Link from 'next/link'

export default  function Home() {

 return (
   <>
     <Head>
       <title>Graficas Datos</title>
       <link rel="icon" href="/favicon.ico" />
     </Head>
     <header className={styles.Contenedor}>
       <h1>Graficas Disponibles</h1>
     </header>
     <main>
       <div>
         <Link href={"/grafica1"}>
           <div className={styles.tarjeta}>
             <span className={styles.text}>Grafica 1</span>
           </div>
         </Link>
         <Link href={"/grafica2"}>
           <div className={styles.tarjeta}>
             <span className={styles.text}>Grafica 2</span>
           </div>
         </Link>
       </div>
     </main>
   </>
 );
}
