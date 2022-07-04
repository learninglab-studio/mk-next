import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../styles/Home.module.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div 
      exit = {{ opacity: 0 }}
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      transition={{ duration: .5 }}
    >
      <div className={styles.container}>
        <Head>
          <title>MK Next</title>
          <meta name="description" content="summer next experiments" />
          <link rel="icon" href="/ll-favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            <a href="https://github.com/learninglab-studio/mk-next">mk next</a>
          </h1>
          <div className={styles.grid}>
          <Link href="/scrolling/main" scroll={false} >
              <a className={styles.card}><h2>scrolling &rarr;</h2>
              <p>experiments with scroll effects</p></a>
            </Link>
            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>three.js &rarr;</h2>
              <p>summer experiments with three.js</p>
            </a>
            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>other &rarr;</h2>
              <p>small things or things without a clear category</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>projects &rarr;</h2>
              <p>project story templates and experiments</p>
            </a>
          </div>
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
    </motion.div>
    
  )
}
