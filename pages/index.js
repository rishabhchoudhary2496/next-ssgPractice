import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home({ userList }) {
  return (
    <div className={styles.container}>
      <h1>Next Js</h1>
      <Link href='/user'>Go To Users</Link>
      <Link href='/photos'>Go To Photos</Link>
      <Link href='/posts'>Go To Posts</Link>
    </div>
  )
}
