import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const Posts = ({ posts }) => {
  return (
    <div className={styles.grid}>
      {posts.map((post) => (
        <Link href={`/posts/${post.id}`}>
          <div className={styles.card}>
            <p>{post.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  return {
    props: {
      posts: data,
    },
  }
}

export default Posts
