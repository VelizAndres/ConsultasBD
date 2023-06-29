import Head from "next/head";
import styles from "@/styles/Graficas.module.css";
import { useEffect, useRef, useState } from "react";
import LinesChart from "@/Graficas/LineChart";
import Link from "next/link";

export default function Home() {
  const [Cambio, setCambio] = useState(false);
  const Valor = useRef([]);
  const Data = useRef(new Array(50).fill(0, 0, 50));

  useEffect(() => {
    async function fetchData() {
      const rest = await fetch("http://18.191.57.189:3000/api/bd1");
      const data = await rest.json();
      Valor.current = data.data;
    }
    const interval = setInterval(() => {
      fetchData();
      let Aux = Data.current.slice(1, 50);
      Aux[49] = Valor.current.length;
      Data.current = Aux;
      setCambio((Cambio) => !Cambio);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const Listar = Valor.current.map((item) => (
    <p key={item.Id} value={item}>
      {item.Id}
    </p>
  ));
  return (
    <>
      <Head>
        <title>Graficas de Datos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.Contenedor}>
        <h1>Grafica User</h1>
      </header>
      <main className={styles.Contenedor}>
        <div>
          <div className={styles.grafica}>
            <LinesChart data={Data.current} />
          </div>
          {/* {
          Valor.current.length === 0 ? <div>Hola</div> : <div>
            {Listar}
            </div>} */}
        </div>
      </main>
      <Link href={"/"}>
        <div className={styles.tarjeta}>
          <span className={styles.text}>Menu</span>
        </div>
      </Link>
    </>
  );
}
