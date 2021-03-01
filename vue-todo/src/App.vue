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
/*es6 문법 */
export default {
  components:{
    'Todoheader':Todoheader,
    'TodoInput':TodoInput,
    'TodoList':TodoList,
    'Todofooter':Todofooter,
  }
}
</script>

<style>

</style>