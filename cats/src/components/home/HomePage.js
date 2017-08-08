import React from 'react'
import { Link } from 'react-router'

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Cat Book</h1>
        <p>The best way manage your cat collection.</p>
        <Link to="cats">Go To Cats</Link>
      </div>
    )
  }
}

export default HomePage
