import React from 'react'

import BrowserWindow from '../../../components/BrowserWindow'
import Editor from '../../../components/Editor'

export const EditorIndex = () => (
  <div>
    <Editor className="editor" />
    <BrowserWindow id="browser-window" />
  </div>
)

export default EditorIndex
