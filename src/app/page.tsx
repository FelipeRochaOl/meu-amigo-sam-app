import { style } from "@/app/styles/home.css";
import { Menu } from "@/components/Menu/Menu";

export default function Home() {
  return (
    <main className={style.mainBackground}>
      <header className="pt-6 pl-3">
        <Menu />
      </header>
    </main>
  )
}
