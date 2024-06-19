import Image from "next/image"
import style from "../app/style/spinner.module.css"

export default function Spinner(){
    return(
        <div className={style.spinner}>
        <Image width={100} height={100} alt="" src={"/loadin.svg"} />
        </div>
    )
}