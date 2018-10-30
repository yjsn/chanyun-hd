const getters = {
  token: state => state.user.token,
  name: state => state.user.name,
  level: state => state.user.level,
  meritsAccount: state => state.user.meritsAccount
}
export default getters
