import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import ContentLoader from 'react-content-loader'

const App = () => {
  // States with Hooks
  const [posts, setPosts] = useState([])
  const [isLoading, setLoadingStatus] = useState(false)

  // ComponentDidMount with Hooks
  useEffect(() => {
    const getAllPosts = async () => {
      setLoadingStatus(true)
      const { data } = await Axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(data)
      setLoadingStatus(false)
    }
    getAllPosts()
  }, [])

  // Component View
  return (
    <div className='container my-4'>
      <div className='row'>
        {/* Headline */}
        <div className='col-12 col-md-6 mx-auto'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='h3 mb-5'>Fake Blog</h1>
            </div>
          </div>
          {/* Articles */}
          <div className='row'>
            {isLoading ? (
              <>
                <div className='col-12'>
                  <ContentLoader height={150} width={400} speed={2} primaryColor='#f3f3f3' secondaryColor='#ecebeb'>
                    <rect x='0' y='0' rx='0' ry='0' width='300' height='40' />
                    <rect x='0' y='50' rx='0' ry='0' width='400' height='20' />
                    <rect x='0' y='80' rx='0' ry='0' width='400' height='20' />
                  </ContentLoader>
                </div>
                <div className='col-12'>
                  <ContentLoader height={150} width={400} speed={2} primaryColor='#f3f3f3' secondaryColor='#ecebeb'>
                    <rect x='0' y='0' rx='0' ry='0' width='300' height='40' />
                    <rect x='0' y='50' rx='0' ry='0' width='400' height='20' />
                    <rect x='0' y='80' rx='0' ry='0' width='400' height='20' />
                  </ContentLoader>
                </div>
                <div className='col-12'>
                  <ContentLoader height={150} width={400} speed={2} primaryColor='#f3f3f3' secondaryColor='#ecebeb'>
                    <rect x='0' y='0' rx='0' ry='0' width='300' height='40' />
                    <rect x='0' y='50' rx='0' ry='0' width='400' height='20' />
                    <rect x='0' y='80' rx='0' ry='0' width='400' height='20' />
                  </ContentLoader>
                </div>
              </>
            ) : (
              posts.map(({ id, title, body }) => (
                <article key={id} className='col-12'>
                  <h2 className='h5 text-capitalize'>{title}</h2>
                  <p className='text-muted'>{body}</p>
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
