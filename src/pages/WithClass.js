import React, { Component } from 'react'
import Axios from 'axios'
import Loader from '../components/Loader'
import Post from '../components/Post'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default class WithClass extends Component {
  // States with Hooks
  state = {
    isLoading: false,
    posts: []
  }

  getAllPosts = async () => {
    this.setState({ isLoading: true })
    const { data } = await Axios.get(process.env.REACT_APP_URL)
    this.setState({
      isLoading: false,
      posts: data
    })
  }

  // ComponentDidMount with Hooks
  componentDidMount() {
    this.getAllPosts()
  }

  // Component View
  render() {
    const { posts, isLoading } = this.state
    return (
      <Layout>
        <Header variant='(with Class)' />
        {/* Articles */}
        <div className='row'>
          {isLoading ? <Loader /> : posts.map(({ id, title, body }) => <Post key={id} title={title} body={body} />)}
        </div>
      </Layout>
    )
  }
}
