<template>
  <div id="app">
    <Todoheader></Todoheader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <Todofooter></Todofooter>
  </div>
</template>

<script>
import Todoheader from './components/header.vue'
import TodoInput from './components/Todoinput.vue'
import TodoList from './components/Todolist.vue'
import Todofooter from './components/footer.vue'
export default {
  data(){
    return{
     
    }
  },
  methods:{//mutations

  },
  components:{
    Todoheader,
    TodoInput,
    TodoList,
    Todofooter,
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