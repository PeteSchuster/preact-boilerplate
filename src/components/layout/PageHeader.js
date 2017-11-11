import React from 'react'
import ReactLogo from '../icons/ReactLogo'
import { Link } from 'react-router-dom'

const PageHeader = () => {
  return (
    <header id="page-header" className="page-header" role="banner">
      <div className="page-header__logo-wrap">
        <Link to="/" className="page-header__logo" rel="home">
          <ReactLogo />
          <span className="visuallyhidden">Preact Boilerplate</span>
        </Link>
      </div>
    </header>
  )
}

export default PageHeader
