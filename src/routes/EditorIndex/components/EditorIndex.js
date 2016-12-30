import React from 'react'

import BrowserWindow from '../../../components/BrowserWindow'
import BufferEditor from '../../../components/BufferEditor'

const EditorIndex = () => (
  <div>
    <BufferEditor className="editor" />
    <BrowserWindow id="browser-window" />
  </div>
)

export default EditorIndex

