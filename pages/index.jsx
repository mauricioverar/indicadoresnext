// import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from "../components/Navbar"
import Celular from "../components/Celular"

export default function Home() {
  // console.log('index') //
  return (
    <>
    <Navbar
      title= 'Home | Indicadores'
      description= 'agregue descripción'
      home
    >
      <h1>Indicadores</h1>
    </Navbar>

    <Celular />
    </>
  )
}
