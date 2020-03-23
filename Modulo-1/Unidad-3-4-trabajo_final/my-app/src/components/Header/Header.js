import React from 'react'
import './Header.scss'

const Header = ({
     title,
     subTitle
 }) => {
    return (
        <div className='Header'>
           <h1>{title}</h1>
           <span>{subTitle}</span>
        </div>
    )
}

export default Header
