import { message } from 'antd'
import {
  CHANGE_INPUT_VALUE,
  ADD_ITEM_VALUE,
  DELETE_ITEM_VALUE,
  SETDEFAULTSELECTEDKEYS,
  SETMENUTREENODE
} from './actionType'

const defaultState = {
  inputValue: '00',
  dataList: [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.'
  ],
  cityListVlaue: [
    {id: '000', label: 'test'},
    {id: '001', label: '北京'},
    {id: '002', label: '上海'},
    {id: '003', label: '广州'},
    {id: '004', label: '深圳'},
    {id: '005', label: '杭州'},
    {id: '006', label: '陕西'},
    {id: '007', label: '西安'},
    {id: '008', label: '其他'},
  ],
  hospitalList: [
    {id: '011', label: '北京第一医院'},
    {id: '012', label: '北京第2医院'},
    {id: '013', label: '北京第4医院'},
    {id: '014', label: '北京第5医院'},
    {id: '015', label: '北京第6医院'},
    {id: '016', label: '北京第7医院'}
  ],
  defaultSelectedKeys: localStorage.SelectedKeys || '101', // 默认第一个菜单下面的第一条数据
  defaultOpenKeys: localStorage.OpenKeys || '1', // 默认第一个父菜单下面的第一条数据
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
  } else if (action.type === SETDEFAULTSELECTEDKEYS) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.defaultSelectedKeys = String(action.obj.id)
    newState.defaultOpenKeys = String(action.obj.parentId)
    localStorage.SelectedKeys = String(action.obj.id) // 在本地先存储一份
    localStorage.OpenKeys = String(action.obj.parentId) // 在本地先存储一份
    return newState
  }
  return state
}
