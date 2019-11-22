import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM_VALUE,
  SETDEFAULTSELECTEDKEYS
} from './actionType'

export const getChangeValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddValue = () => ({
  type: ADD_ITEM_VALUE
})

export const getDeleteItem = (i) => ({
  type: DELETE_ITEM_VALUE,
  i
})
export const setDefaultSelectedKeys = (obj) => ({ // 设置leftMenu子菜单选中
  type: SETDEFAULTSELECTEDKEYS,
  obj
})
