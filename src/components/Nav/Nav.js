import React from 'react'

const Nav = () => (
  <section className='nav'>
    <button id='hamburger' className='nav__hamburger'>
      <span className='open'>
        <span className='dots'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </span>
      </span>
      <span className='close'>
        <span className='icon-container'>X{/* {{{getIcon 'close'}}} */}</span>
      </span>
    </button>
    <div className='nav__wrapper__top'>
      <div className='logo'>
        <a href='/' title='go to homepage'>
          <img
            src='/images/logo.svg'
            alt='JavaScript Best online JavaScript course reviews'
            className='jsb-logo'
          />
        </a>
      </div>
      <ul>
        <li className='category'>Account</li>
      </ul>
    </div>
    <div className='nav__wrapper__main'>
      <ul>
        <li className='category'>Discover</li>
        <li>
          <a
            href='/courses'
            className="{{addActiveByCurrentPath currentPath '/courses'}}"
          >
            Reviews
          </a>
        </li>
        <li>
          <a
            href='/tags'
            className="{{addActiveByCurrentPath currentPath '/tags'}}"
          >
            Tags
          </a>
        </li>
        <li>
          <a
            href='/popular'
            className="{{addActiveByCurrentPath currentPath '/popular'}}"
          >
            Popular
          </a>
        </li>
        <li>
          <a href='/add' className=''>
            Add
          </a>
        </li>
        <li>
          <a href='/contact' className=''>
            Contact
          </a>
        </li>
        <li>
          <button id='searchButton' className='search-button'>
            Search
          </button>
        </li>
      </ul>
    </div>
  </section>
)

export default Nav
