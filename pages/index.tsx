import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useRecoilValue} from "recoil";
import {charCountState} from "../src/testState";

export default function Home() {
  const count = useRecoilValue(charCountState);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {count}
      </main>
    </>
  )
}
