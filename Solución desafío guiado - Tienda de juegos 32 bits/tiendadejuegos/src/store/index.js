import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos:
    [
      {
        "codigo": "0001",
        "nombre": "Sekiro",
        "stock": "43",
        "precio": "30000",
        "color": "red"
      },
      {
        "codigo": "0002",
        "nombre": "Fifa 21",
        "stock": "55",
        "precio": "25000",
        "color": "blue"
      },
      {
        "codigo": "0003",
        "nombre": "Gears of War 4",
        "stock": "12",
        "precio": "15000",
        "color": "green"
      },
      {
        "codigo": "0004",
        "nombre": "Mario Tennis Aces",
        "stock": "56",
        "precio": "35000",
        "color": "black"
      },
      {
        "codigo": "0005",
        "nombre": "Bloodborne",
        "stock": "12",
        "precio": "10000",
        "color": "blue"
      },
      {
        "codigo": "0006",
        "nombre": "Forza Horizon 4",
        "stock": "4",
        "precio": "20000",
        "color": "red"
      }
    ]
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
