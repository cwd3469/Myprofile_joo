<template>
  <div id="app">
    <Todoheader></Todoheader>
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <Todofooter v-on:clearAll="clearAllItems"></Todofooter>
      <!-- <TodoInput v-on: 하위 컴퍼넌트에서 발생시킨 이벤트 이름 = "현재 컴퍼넌트의 메서드 명"></TodoInput> -->
    <!--<TodoList v-bind:내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트"></TodoList>--> 
  </div>
</template>

<script>
import Todoheader from './components/header.vue'
import TodoInput from './components/Todoinput.vue'
import TodoList from './components/Todolist.vue'
import Todofooter from './components/footer.vue'
/*es6 문법 */
export default {
  data: function(){
    return{
      todoItems: []
    }
  },
  methods:{
    addOneItem:function(todoItem){
      /*하위 컴퍼넌트에서 넘어 온 인자값(this.newTodoItem)을 받아서 원래 있던 this.newTodoItem 대신 맵핑 시킨다.*/
       var obj = {completed: false, item: todoItem};
          /*텍스트 값 플러스 그 그 텍스트값이 체크 되는지 되는지 안된는지에 대한 그 진의 값(불린값)를 저장하였다.*/
          localStorage.setItem(todoItem, JSON.stringify(obj));
          /*newTodoItem에 값이 localStorage에 string으로 들어간다.*/
        /*data 안에 있는 newTodoItem을 접근한다. 보통 this는 자바스크립트 스코프를 지칭하는것이다.
        하지만 여기에서의 this는 data와 methods가 들어간 이 인스턴스를 말하는것이고 접근할수 있다.*/
       /*localStorage.setItem('key','value')키와 벨류로 setItem를 호출 할수 있습니다.*/
       this.todoItems.push(obj)
       /*todoItems에 넣어준다. */
    },
    removeOneItem:function(todoItem, index){
      localStorage.removeItem(todoItem.item)
      /*todoItem가 객체이고 키값이랑 밸률이 동일하기 때문에 item만 삭제하면 된다.*/
      this.todoItems.splice(index,1);
    },
    toggleOneItem:function(todoItem, index){
      // todoItem.completed = !todoItem.completed;
      this.todoItems.splice[index].completed = !this.todoItems.splice[index].completed
      /*위 코드는 받았던걸 다시 넘겨서 다시 가져 오는것이기 때문에 컴퍼넌트경계가 확실하지 않은 안좋은 안티코디라고 할수 있기 때문에 지워주고 변경했다.*/
      //로컬 스토리지의 데이터를 갱신한다.
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems:function(){
       localStorage.clear()
       this.todoItems = [];
    },
  },
  created: function(){
    /*인스턴스가 바로 호출 되는 vue라이브사이클 훅 훅이란 생산되는 시점에 이 안에 있는 로직 호출이 되는 것 */
    if(localStorage.length > 0){
      for(var i = 0; i<localStorage.length ;i ++){
        // this.todoItems.push(localStorage.key(i))
        /*같은 인스턴스 안에 있는 todoItems에  push 담는다. */
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
        //localStorage.key(i)에 loglevel:webpack-dev-server를 제외한 나머지 값
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //getItem로 localStorage.key를 뺀다면 벨류가 떨어져 나간다. input에서 저장될때 json.string으로 보냈기 때문에 순수하게 들어오는 값도 string이기 때문에 parse(풀어서) obj으로 바꾸어준다.
        }
      }
    }
  },
  components:{
    'Todoheader':Todoheader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'Todofooter':Todofooter,
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
h1{
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow{
  box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
}
</style>