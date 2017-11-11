import React from 'react'
import { Link } from 'react-router-dom'

const PageSidebar = () => {
  return (
    <aside class="page-sidebar">
      <p><b>Preact Boilerplate</b></p>

      <nav>
        <ul>
          <li>
            <Link to={{ pathname: '/' }}>
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default PageSidebar
