import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const UserName = 'Admin-Name'
const LevelName = 'Level-Name'

export function getToken() {
  return Cookies.get(TokenKey)
}

export function setToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeToken() {
  return Cookies.remove(TokenKey)
}

export function getName() {
  return Cookies.get(UserName)
}

export function setName(name) {
  return Cookies.set(UserName, name)
}

export function removeName() {
  return Cookies.remove(UserName)
}

export function getLevel() {
  return Cookies.get(LevelName)
}

export function setLevel(name) {
  return Cookies.set(LevelName, name)
}

export function removeLevel() {
  return Cookies.remove(LevelName)
}
