import styles from '../../styles/Home.module.css'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((response) => response.json())

const Todo = () => {
  const { data, error } = useSWR(
    'https://jsonplaceholder.typicode.com/todos',
    fetcher
  )

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log('da', data)
  return (
    <div>
      {data.map((d) => (
        <p>{d.title}</p>
      ))}
    </div>
  )
}

export default Todo
