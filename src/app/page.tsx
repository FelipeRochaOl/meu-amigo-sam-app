import styles from '@/app/styles/home.module.scss';
import { tailwind } from "@/app/styles/tailwind/home.css";
import { Menu } from "@/components/Menu/Menu";
import Image from "next/image";

export default function Home() {
  return (
    <main className={tailwind.mainBackground}>
      <div className="pt-6 pl-3">
        <Menu />
      </div>
      <div className={styles.background}>
        <div className={styles.backgroundTop}>
          <Image className={styles.cloudBlueLeft} src={'/images/cloud-blue.png'} width={96} height={96} alt="Nuvem Azul" />
          <Image className={styles.cloudLeft} src={'/images/cloud.png'} width={153} height={153} alt="Nuvem" />
          <Image className={styles.cloudRight} src={'/images/cloud.png'} width={95} height={95} alt="Nuvem" />
          <Image className={styles.cloudBlueRight} src={'/images/cloud-blue.png'} width={110} height={110} alt="Nuvem Azul" />
          <Image className={styles.bigCloudRight} src={'/images/cloud.png'} width={215} height={215} alt="Nuvem" />
          <Image className={styles.sun} src={'/images/sun.png'} width={191} height={191} alt="Sol" />
          <Image className={styles.miniCloudRight} src={'/images/cloud.png'} width={97} height={97} alt="Nuvem" />
          <Image className={styles.miniCloudBlueRight} src={'/images/cloud-blue.png'} width={110} height={110} alt="Nuvem Azul" />
        </div>
        <div className={styles.backgroundBotton}>
          <Image className={styles.balloonRed} src={'/images/balloon-red.png'} width={132} height={132} alt="Balão Vermelho" />
          <Image className={styles.balloonYellow} src={'/images/balloon-yellow.png'} width={99} height={99} alt="Balão Amarelo" />
          <Image className={styles.balloonColorful} src={'/images/balloon-colorful.png'} width={233} height={233} alt="Balão Colorido" />
        </div>
      </div>
      <div className='absolute w-full bottom-0'>
        <div className='container flex mx-auto'>
          <div className='title max-w-[580px]'>
            <h1 className='text-6xl font-black'>Olá, eu sou Sam</h1>
            <h2 className='text-4xl font-bold'>Vamos brincar?</h2>
            <p className='text-2xl font-light text-slate-700'>Acesse o jogo e ajude seu filho nas rotinas diárias, diminuindo a ansiedade e facilitandoa criança a adaptar com novas tarefas.</p>
          </div>
          <div className='flex'>
            <Image className='w-[133px] h-[214px]' src={'/images/sam.png'} width={133} height={214} alt="Samuel pulando de alegria" />
            <Image className={styles.calendar + ' w-[60px] h-[60px]'} src={'/images/calendar-star.png'} width={60} height={60} alt="Calendário com estrela" />
          </div>
        </div>
        <p className='text-center text-sm'>© {new Date().getFullYear()} MentalAid - Project FIAP - Felipe Rocha Oliveira - Todos os direitos reservados</p>
      </div>
    </main>
  )
}
