<template>
  <div>
      <ul>
        <li class="shadow" v-for="todoItem in todoItems" v-bind:key="todoItem">
          {{todoItem}}
          <span class="removeBtn " v-on:click="removeTodo">
            <i class="fas fa-trash-alt"></i>
          </span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  data: function(){
    return{
      todoItems: []
    }
  },
  created: function(){
    /*인스턴스가 바로 호출 되는 vue라이브사이클 훅 훅이란 생산되는 시점에 이 안에 있는 로직 호출이 되는 것 */
    if(localStorage.length > 0){
      for(var i = 0; i<localStorage.length ;i ++){
        // this.todoItems.push(localStorage.key(i))
        /*같은 인스턴스 안에 있는 todoItems에  push 담는다. */
        if(localStorage.key(i) !== 'loglevel:webpack-dev-server'){
        //localStorage.key(i)에 loglevel:webpack-dev-server를 제외한 나머지 값
          this.todoItems.push(localStorage.key(i))
        // console.log( localStorage.key(i));
        }

      }
      
    }
  },
  methods:{
    removeTodo:function(){
      
    }
  },
}
</script>

<style>
ul{
  list-style: none;
  padding-left:0px;
  margin-top: 0;
  text-align: left;
}
li{
  display: flex;
  min-height:50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: #fff;
  border-radius: 5px;
}
.checkBtn{
  line-height: 45px;
  color: #64adfe;
  margin-right: 5px;
}
.checkBtnCompleted{
  color: #b3adad;
}
.textCompleted{
  text-decoration: line-through;
  color: #63adad;
}
.removeBtn{
  margin-left: auto;
  color: #de4343;
  background: none;
  border: 0px;
  cursor: pointer;
}
</style>