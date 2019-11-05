import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = () => {
  return (
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
  )
}

export default Loader
