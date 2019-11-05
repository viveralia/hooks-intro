import React from 'react'
import { Link } from 'react-router-dom'
import menuList from '../constants/menu.json'

const Header = ({ variant }) => {
  return (
    <header className='row'>
      <div className='col-12 mb-5'>
        <h1 className='h3 mb-2'>Fake Blog {variant}</h1>
        <nav>
          <ul className='list-unstyled m-0'>
            {menuList.map(({ name, path }, i) => (
              <li key={i}>
                <Link to={path}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
