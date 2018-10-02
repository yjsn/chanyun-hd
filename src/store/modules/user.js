import { login, logout } from '@/api/index'
import { getToken, setToken, removeToken, getName, setName, removeName, getLevel, setLevel, removeLevel } from '@/utils/auth'
// import { getToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: getName(),
    level: getLevel()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_LEVEL: (state, level) => {
      state.level = level
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.userAccount.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.userPassword).then(response => {
          if (!response.data.levelName) {
            response.data.levelName = '先闻居士'
          }
          setToken('login')
          setName(response.data.userName)
          setLevel(response.data.levelName)
          commit('SET_TOKEN', 'login')
          commit('SET_NAME', response.data.userName)
          commit('SET_LEVEL', response.data.levelName)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_NAME', '')
          commit('SET_LEVEL', '')
          removeToken()
          removeName()
          removeLevel()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_NAME', '')
        commit('SET_LEVEL', '')
        removeToken()
        removeName()
        removeLevel()
        resolve()
      })
    }
  }
}

export default user
