import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import HobbyList from './HobbyList'

class CatPage extends React.Component {
  render() {
    const cat = this.props.cat
    const catHobbies = this.props.catHobbies
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{cat.name}</h1>
        <p>breed: {cat.breed}</p>
        <p>weight: {cat.weight}</p>
        <p>temperament: {cat.temperament}</p>
        <HobbyList hobbies={catHobbies} />
      </div>
    )
  }
}

CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  catHobbies: PropTypes.array.isRequired
}

function collectCatHobbies(hobbies, cat) {
  let selected = hobbies.map(hobby => {
    if (cat.hobby_ids.filter(hobbyId => hobbyId === hobby.id).length > 0) {
      return hobby
    }
  })
  return selected.filter(el => el != undefined)
}

function mapStateToProps(state, ownProps) {
  let cat = {
    name: '',
    breed: '',
    weight: '',
    temperament: '',
    hobby_ids: []
  }
  let catHobbies = []
  const catId = ownProps.params.id;
  if (state.cats.length > 0 && state.hobbies.length > 0) {
    cat = Object.assign({}, state.cats.find(cat => cat.id === catId))
    if (cat.hobby_ids.length > 0) {
      catHobbies = collectCatHobbies(state.hobbies, cat)
    }
  }
  return { cat, catHobbies }
}

export default connect(mapStateToProps)(CatPage)
