// import Mocha from 'mocha'

export const ACTION_PREFIX = 'orbiter/codeChecks/'
export const CODE_CHECK_INITIATED = `${ACTION_PREFIX}/CODE_CHECK_INITIATED`

export function initiateCodeCheck (){
  console.log('boom')
  return {
    type: CODE_CHECK_INITIATED
  }
}

export function checkCode(){
  return function (dispatch, getState){
    dispatch(initiateCodeCheck())
    const state = getState()
    // Mocha.checkLeaks();
    // Mocha.run();
  }
}

export const INITIAL_STATE = {}

