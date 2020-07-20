import state from './redux/state'
const { rerenderTree } = require("./render")







rerenderTree(state)



if(module.hot){
  module.hot.accept()
}