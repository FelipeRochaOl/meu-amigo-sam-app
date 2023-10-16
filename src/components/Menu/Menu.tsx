import Link from "next/link";
import { style } from "./styles";

export const Menu = () => {
  return (
    <nav className={style.nav}>
      <Link href={'#'} className={style.link}>Home</Link>
      <Link href={'#'} className={style.link}>Sobre</Link>
      <Link href={'#'} className={style.link}>Game</Link>
      <Link href={'#'} className={style.link}>Contato</Link>
      <Link href={'#'} className={style.link}>Dashboard</Link>
    </nav>
  )
}