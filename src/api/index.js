import fetch from './fetch'
import { baseDOUBANUrl1, baseDOUBANUrl2 } from './url'


export function getAddressList (obj) {
  // return fetch.requestGET(`${baseUrl}/api/test/`, obj)
  return fetch.requestGET(`https://api.github.com/`, obj)
}

export function getHotMovie (obj) { // 获取正在热映的电影
  return fetch.requestGET(`${baseDOUBANUrl2}/v2/movie/in_theaters`, obj)
}
export function getTop250 (obj) {
  return fetch.requestGET(`${baseDOUBANUrl2}/v2/movie/top250`, obj)
}
export function getSoon (obj) {
  return fetch.requestGET(`${baseDOUBANUrl2}/v2/movie/coming_soon`, obj)
}
