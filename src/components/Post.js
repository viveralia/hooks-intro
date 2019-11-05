import React from 'react'

const Post = ({ body, title }) => {
  return (
    <article className='col-12'>
      <h2 className='h5 text-capitalize'>{title}</h2>
      <p className='text-muted'>{body}</p>
    </article>
  )
}

export default Post
