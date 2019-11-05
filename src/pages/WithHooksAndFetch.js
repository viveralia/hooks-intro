import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Loader from '../components/Loader'
import Post from '../components/Post'

const WithHooksAndFetch = () => {
  // States with Hooks
  const [posts, setPosts] = useState([])
  const [isLoading, setLoadingState] = useState(false)

  const getAllPosts = async () => {
    setLoadingState(true)
    const response = await fetch(process.env.REACT_APP_URL)
    const posts = await response.json()
    setPosts(posts)
    setLoadingState(false)
  }

  // ComponentDidMount with Hooks
  useEffect(() => {
    getAllPosts()
  }, [])

  return (
    <Layout>
      <Header variant='(with Hooks and Fetch API)' />
      {/* Articles */}
      <div className='row'>
        {isLoading ? <Loader /> : posts.map(({ id, title, body }) => <Post key={id} title={title} body={body} />)}
      </div>
    </Layout>
  )
}

export default WithHooksAndFetch
