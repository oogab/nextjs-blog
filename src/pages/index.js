import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export async function getServerSideProps() {
  console.log('server')

  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h1>
        <Link href="/csr">CSR로</Link>
      </h1>
      <h1>
        <Link href="/ssg">SSG로</Link>
      </h1>
      <h1>
        <Link href="/isr">ISR로</Link>
      </h1>
    </>
  )
}
