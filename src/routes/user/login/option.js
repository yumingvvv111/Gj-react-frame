// ------------------------------------
// Constants
// ------------------------------------
export const key = 'user-login-option'
export const option = true
// ------------------------------------
// Actions
// ------------------------------------

export const action = {}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {

}

// ------------------------------------
// Reducer
// ------------------------------------
export const initState = {

}
export default function (state = initState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}