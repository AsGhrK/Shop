"use client"
import Image from "next/image"
import style from "../app/style/page.module.css"
import { useEffect, useState } from "react"
import Spinner from "./Spinner";


export default function Main() {
  const [listProduct, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const resposta = await fetch("https://fakestoreapi.com/products/")
      const data = await resposta.json();
      setProduct(data)
    }
    getProduct()
  }, [])

const orderAz = () => {
   const listAux = [...listProduct].sort((a,b) => a.title.localeCompare(b.title));
   setProduct(listAux)
}

const orderZa = () => {
  const listAux = [...listProduct].sort((a,b) => b.title.localeCompare(a.title));
  setProduct(listAux)
}

const orderPrecoMenor = () => {
  const listAux = [...listProduct].sort((a,b) => a.price - b.price);
  setProduct(listAux)
}

const orderPrecoMaior = () => {
 const listAux = [...listProduct].sort((a,b) => b.price - a.price);
 setProduct(listAux)
}

if(listProduct[0] == null){
  return <Spinner/>
}

  return (
    <>
    <div className={style.filters}>
    <div>
        <button onClick={orderAz}>A - Z</button>
        <button onClick={orderZa}>Z - A</button>
        <button onClick={orderPrecoMenor}>Menor preço</button>
        <button onClick={orderPrecoMaior}>Maior preço</button>
    </div>
  </div>
    <main className={style.corpo}>
      {listProduct.map((products) =>
        <div className={style.card} key={products.id}>
          <h1>{products.title.slice(0, 16) + "..."}</h1>
          <Image width={300} height={300} src={products.image} />
          <h3 className={style.preco}>R$: {products.price}</h3>
          <p>{products.description.slice(0, 100) + "..."}</p>
          <p>{products.category}</p>
        </div>
      )}
    </main>
    </>
  );
}
