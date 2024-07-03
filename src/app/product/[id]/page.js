import Link from "next/link";
import style from "../../style/pageId.module.css";
import Image from "next/image";

export default async function Product({params}){

    const resposta = await fetch("https://fakestoreapi.com/products/" + params.id)
    const data = await resposta.json();

    return(
        <main className={style.corpo}>
      
          <div className={style.card} key={data.id}>
            <h1>{data.title.slice(0, 16) + "..."}</h1>
            <Image width={300} height={300} src={data.image} />
            <h3 className={style.preco}>R$: {data.price}</h3>
            <p>{data.description.slice(0, 100) + "..."}</p>
            <p>{data.category}</p>
        
          </div>
      </main>

    )
}