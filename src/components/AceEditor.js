import React, { Component } from 'react'
import Ace from 'brace'

require('brace/mode/javascript');
require('brace/theme/monokai');


export default class AceEditor extends Component {
  onChange (e) {
    this.setState({
      value: this.editor.getValue()
    })
  }
  componentDidMount () {
    this.editor = Ace.edit(this.props.id)
    this.editor.getSession().setMode('ace/mode/javascript')
    this.editor.setTheme('ace/theme/monokai')

    this.setState({
      value: this.props.value
    })

    this.editor.on('change', this.onChange.bind(this))
  }

  render () {
    return (
      <div id={this.props.id} className="editor-container">
      </div>
    )
  }
}
