import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import * as refDataActions from '../../actions/refDataActions'

class RefData extends React.Component {
  render() {
    const albums = this.props.propForUI
    return (
      <div className="col-md-12">
        <lu>
          {albums.map(album =>
            <li key={album.name}>{album.name}</li>
          )}
        </lu>
      </div>
    )
  }
}

RefData.propTypes = {
  propForUI: PropTypes.array.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    propForUI: state.propForConnectedComponent.albums
  }
}

export default connect(mapStateToProps)(RefData)
