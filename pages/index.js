import Head from 'next/head';
import clsx from 'clsx';
import styles from '../styles/Home.module.css';
import localFont from '@next/font/local'

const FONT_CARBON_PLUS_MONO = localFont({ src: '../public/CPMono_v07_Plain.otf' })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>nafeuvisual - abstract geometric landscape art</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={clsx(FONT_CARBON_PLUS_MONO.className, styles.comingSoon)}>
          nafeuvisual.space (COMING SOON)
        </h1>
      </main>
    </div>
  );
}
