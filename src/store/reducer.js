import { message } from 'antd'
import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM_VALUE
} from './actionType'

const defaultState = {
  inputValue: '00',
  dataList: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.'
  ]
}

export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value
    return newState;
  } else if (action.type === ADD_ITEM_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.dataList.push(newState.inputValue)
    if (newState.inputValue === '') {
      message.warning('不能输入空值')
    } else {
      message.success('添加成功')
      newState.inputValue = ''
      return newState;
    }
  } else if (action.type === DELETE_ITEM_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.dataList.splice(action.i, 1)
    return newState
  }
  return state
}
