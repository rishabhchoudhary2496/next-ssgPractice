import styles from '../../styles/Home.module.css'

const Photo = ({ photo }) => {
  return (
    <div className={styles.card}>
      <p>{photo.title}</p>
      <img
        src={photo.url}
        alt=''
        width={300}
        height={300}
        style={{ paddingTop: '10px', borderRadius: '4px' }}
      />
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
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
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
  const data = await res.json()
  return {
    props: { photo: data },
  }
}

export default Photo
