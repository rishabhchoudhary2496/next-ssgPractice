import React from 'react'

const User = ({ user }) => {
  return (
    <div>
      <p>{user.email}</p>
      <p>{user.name}</p>
      <p>{user.website}</p>
      <p>{user.address.city}</p>
    </div>
  )
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  const paths = data.map((user) => {
    return {
      params: {
        id: user.id.toString(),
      },
    }
  })

  return { paths, fallback: false }
}
export async function getStaticProps(context) {
  const id = context.params.id
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  )
  const data = await response.json()
  return {
    props: { user: data },
  }
}
export default User
