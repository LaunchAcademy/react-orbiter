import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { checkCode } from '../modules/codeChecks'

export class CheckButton extends Component {
  constructor (options){
    super(options)
    this.onClick = this.onClick.bind(this)
  }

  onClick (e) {
    e.preventDefault()
    this.props.checkCode()
  }

  render () {
    return (
      <div>
        <button onClick={ this.onClick }>Check</button>
        <div id="mocha"></div>
      </div>
    )
  }
}


function mapDispatchToProps (dispatch){
  return bindActionCreators({ checkCode }, dispatch)
}

export default connect(null, mapDispatchToProps)(CheckButton)
