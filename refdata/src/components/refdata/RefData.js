import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as refDataActions from '../../actions/refDataActions'
import { getVisibleRefData } from '../../selectors/refDataSelector'

class RefData extends React.Component {
  render() {
    const albumsFromReducer = this.props.propForUI
    const albumsFromSelector = this.props.propFromSelector
    return (
      <div className="col-md-12">
        <p>Straight from reducer:</p>
        <lu>
          {albumsFromReducer.map(album =>
            <li key={album.name}>{album.name}</li>
          )}
        </lu>
        <br></br>
        <p>From selector:</p>
        <lu>
          {albumsFromSelector.map(album =>
            <li key={album.name}>{album.name}</li>
          )}
        </lu>
      </div>
    )
  }
}

RefData.propTypes = {
  propForUI: PropTypes.array,
  propFromSelector: PropTypes.array
}

const mapStateToProps = (state, ownProps) => {
  return {
    propForUI: state.propForConnectedComponent.albums,
    propFromSelector: getVisibleRefData(state.propForConnectedComponent)
  }
}

export default connect(mapStateToProps)(RefData)
