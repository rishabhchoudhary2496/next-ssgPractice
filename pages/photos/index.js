import styles from '../../styles/Home.module.css'
import Link from 'next/link'

const Photos = ({ photos }) => {
  return (
    <div className={styles.grid}>
      <h1>photos</h1>
      <div>
        {photos.map((photo) => (
          <div className={styles.card}>
            <Link href={`/photos/${photo.id}`}>
              <p>{photo.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await res.json()
  return {
    props: {
      photos: data,
    },
  }
}

export default Photos
