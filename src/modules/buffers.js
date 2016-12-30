export const ACTION_PREFIX = 'orbiter/buffers/'
export const BUFFER_CHANGED = `${ACTION_PREFIX}/BUFFER_CHANGED`

export function changeBuffer(bufferIndex = 0, code){
  return {
    type: BUFFER_CHANGED,
    bufferIndex: 0,
    code: code
  }
}

const INITIAL_STATE = [{
  code: ''
}]
export default function(state = INITIAL_STATE, action) {
  if(action.type === BUFFER_CHANGED){
    return [{
      code: action.code
    }]
  }
  else {
    return state
  }
}
