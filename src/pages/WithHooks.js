import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Loader from '../components/Loader'
import Post from '../components/Post'
import Header from '../components/Header'
import Layout from '../components/Layout'

const App = () => {
  // States with Hooks
  const [posts, setPosts] = useState([])
  const [isLoading, setLoadingStatus] = useState(false)

  const getAllPosts = async () => {
    setLoadingStatus(true)
    const { data } = await Axios.get(process.env.REACT_APP_URL)
    setPosts(data)
    setLoadingStatus(false)
  }

  // ComponentDidMount with Hooks
  useEffect(() => {
    getAllPosts()
  }, [])

  // Component View
  return (
    <Layout>
      <Header variant='(with Hooks)' />
      {/* Articles */}
      <div className='row'>
        {isLoading ? <Loader /> : posts.map(({ id, title, body }) => <Post key={id} title={title} body={body} />)}
      </div>
    </Layout>
  )
}

export default App
