import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import styles from '../../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.div 
    exit={{ y: -300 }}
    initial={{ y: -100 }}
    animate={{ y: 100 }}
    transition={{ duration: .5 }}
  > <div className={styles.container}>
    
      <main className={styles.main}>
        <h1 className={styles.title}>
          scrolling
        </h1>
        <div className={styles.grid}>
          <Link href="/" scroll={false}>
            <a className={styles.card}><h2>back home &rarr;</h2>
            <p>just go back to the main page</p></a>
          </Link>
          <Link href="/scrolling/test-1" scroll={false}>
            <a className={styles.card}><h2>test 1 &rarr;</h2>
            <p>from 20220703</p></a>
          </Link>
          
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
