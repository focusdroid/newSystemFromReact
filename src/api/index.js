import fetch from './fetch'
import baseUrl from './url'


export function getAddressList (obj) {
  // return fetch.requestGET(`${baseUrl}/api/test/`, obj)
  return fetch.requestGET(`https://api.github.com/`, obj)
}
