import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='container my-4'>
      <div className='row'>
        <div className='col-12 col-md-6 mx auto'>{children}</div>
      </div>
    </div>
  )
}

export default Layout
