import React, { Component } from 'react'

import { connect } from 'react-redux'

export class BrowserWindow extends Component {

  render () {
    return (
      <iframe id={this.props.id} seamless srcDoc={this.props.src}></iframe>
    )
  }
}

function mapStateToProps (state) {
  return {
    src: state.buffers[0].code
  }
}

export default connect(mapStateToProps)(BrowserWindow)
