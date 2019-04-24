
const defaultValue = {
  inputValue2: '11111',
  dataList2: ['000000000', '999999999999']
}


export default (state = defaultValue, action) => {
  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue2 = action.value
    return newState
  } else if (action.type === 'add_item_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.dataList2.push(newState.inputValue2)
    newState.inputValue2 = ''
    return newState
  } else if (action.type === 'delete_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.dataList2.splice(action.i, 1)
    return newState
  }
  return state
}
