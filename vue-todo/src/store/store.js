import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const storage = {
    fetch(){  
            const arr = [];
              if(localStorage.length > 0){
                for(var i = 0; i<localStorage.length ;i ++){
                  if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                  }
                }
              }
            return arr;
    },
}
/*export하는 순간 store라는 부분를 다른 곳에서 사용 할수 있다.*/
export const store = new Vuex.Store({
    state:{
        todoItems: storage.fetch()
    },
    mutations:{
     addOneItem(state, todoItem){
       /*Todoinput 에서 보낸 newTodoItem를 addOneItem에 인자로 받는다.*/
        var obj = {completed: false, item: todoItem};     
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj)
        /*mutations에서 state를 접근하는 방법은 첫번째로 받는 인자의 속성으로 접근해야한다.*/
      },
      removeOneItem(state, obj){
        localStorage.removeItem(obj.todoItem.item)
        state.todoItems.splice(obj.index,1);
      },
      toggleOneItem(state,obj){
        state.todoItems[obj.index].completed = !state.todoItems[obj.index].completed
        localStorage.removeItem(obj.todoItem.item)
        localStorage.setItem(obj.todoItem.item, JSON.stringify(obj.todoItem));
      },
      clearAllItems(state){
         localStorage.clear()
         state.todoItems = [];
      },
    }
});