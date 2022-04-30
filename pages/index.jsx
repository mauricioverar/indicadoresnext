import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from "../components/Navbar"

export default function Home() {
  return (
    <Navbar
      title= 'Home | Indicadores'
      description= 'agregue descripción'
      home
    ></Navbar>
  )
}
