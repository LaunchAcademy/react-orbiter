import React from 'react'

import BrowserWindow from '../../../components/BrowserWindow'
import BufferEditor from '../../../components/BufferEditor'
import CheckButton from '../../../components/CheckButton'

const EditorIndex = () => (
  <div>
    <BufferEditor className="editor" />
    <BrowserWindow id="browser-window" />
    <CheckButton />
  </div>
)

export default EditorIndex

