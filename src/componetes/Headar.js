import style from "../app/style/headar.module.css"
import Image from "next/image"
export function Header(){
return(
   
<div className={style.body}>
    <header className={style.headar}>
       <Image width={100} height={100} src={"https://styles.redditmedia.com/t5_75d3n4/styles/profileIcon_snoo0956c98d-4bc2-4595-9c71-64c224d1ac7a-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=6d2ef13ba6a254f0149c1dbcd507b2736ecea891"}/>
<h1 className={style.h1}>Minha loja</h1>
<nav className={style.nav}>
<ul className={style.navul}>
    <li className={style.navli}> <Image width={50} height={50} src={"https://cdn-icons-png.flaticon.com/512/126/126510.png"}/>  </li>
    <li className={style.navli}>Usuários</li>
    <li className={style.navli}>Suporte</li>
    <li className={style.navlibutton}><button>Adcionar novo produto</button></li>
    <li className={style.navliinput}><input></input></li>
    <li className={style.navlibutton}><button>Buscar</button></li>
</ul> 
<h1 className={style.h1}>Encontre os melhores produtos na nossa loja online!</h1>
</nav>

</header>

</div>
)
}