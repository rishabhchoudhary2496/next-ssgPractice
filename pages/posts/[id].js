import styles from '../../styles/Home.module.css'

const Post = ({ post }) => {
  return (
    <div className={styles.card}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  const paths = data.map((d) => {
    return {
      params: { id: d.id.toString() },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps(context) {
  const id = context.params.id
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  return {
    props: { post: data },
  }
}

export default Post
