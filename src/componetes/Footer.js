import style from "../app/style/footer.module.css"
import Image from "next/image"

export function Footer() {
    return (

        <div className={style.body}>
            <header className={style.footer}>
                <nav className={style.nav}>
                    <ul className={style.navul}>
                        <li className={style.navli}> <Image width={50} height={50} src={"https://cdn.iconscout.com/icon/free/png-512/free-instagram-1946323-1646407.png?f=webp&w=256"} /> </li>
                        <li className={style.navli}><Image width={50} height={50} src={"https://cdn-icons-png.flaticon.com/512/5969/5969020.png"} /></li>
                        <li className={style.navli}><Image width={50} height={50} src={"https://cdn-icons-png.flaticon.com/512/187/187189.png"} /></li>
                    </ul>
                    <h6 className={style.h6}>Criação do site: 19/06/20024</h6>
                </nav>
                <h1 className={style.h1}>Minha loja</h1>
                <Image width={100} height={100} src={"https://styles.redditmedia.com/t5_75d3n4/styles/profileIcon_snoo0956c98d-4bc2-4595-9c71-64c224d1ac7a-headshot.png?width=256&height=256&frame=1&auto=webp&crop=256:256,smart&s=6d2ef13ba6a254f0149c1dbcd507b2736ecea891"} />
            </header>

        </div>
    )
}