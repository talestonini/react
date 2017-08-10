import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'

const Header = () => {
  return (
    <nav>
      <Link to="/" activeClassName="active">Reference Data</Link>
    </nav>
  )
}

export default Header
