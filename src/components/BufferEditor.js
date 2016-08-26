import React, { Component } from 'react'
import Codemirror from 'react-codemirror'
import HtmlMixed from 'codemirror/mode/htmlmixed/htmlmixed'

import { changeBuffer } from '../modules/buffers'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class BufferEditor extends Component {
  constructor () {
    super()
    this.updateCode = this.updateCode.bind(this)
  }

  updateCode (newCode) {
    this.props.changeBuffer(0, newCode)
  }

  render () {
    var options = {
      // lineNumbers: true,
      mode: "htmlmixed",
      theme: "monokai"
    };
    return (
      <Codemirror
        onChange={this.updateCode}
        className={this.props.className}
        options={options} />
    )
  }
};

function bindStateToProps (state) {
  return {
    code: state.buffers[0].code
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators({changeBuffer}, dispatch);
}

export default connect(bindStateToProps, mapDispatchToProps)(BufferEditor)

