import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LifeEvent from '../components/LifeEvent'
import Form from '../components/Form'
import LyricsBlock from '../components/LyricsBlock'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Veery Lyrics</title>
        <meta name="Song Lyrics generated through OpenAI" content="Tell Veery three life events and see what Lyrics it creates for you." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Veery Lyrics</h1>
        <Form></Form>
        <LyricsBlock></LyricsBlock>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
