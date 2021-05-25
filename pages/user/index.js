import React from 'react'
import Link from 'next/link'

const index = ({ data }) => {
  return (
    <div>
      <h1 style={{ padding: '1rem' }}>User List</h1>
      <div style={{ padding: '1rem 1rem' }}>
        {data.map((data) => (
          <Link href={`/user/${data.id}`}>
            <p>{data.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

//static side regeneration
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: { data: data },
  }
}

export default index
