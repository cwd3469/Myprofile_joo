<template>
  <div>
      <ul>
        <li class="shadow" v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item">
          <!--todoitems 안에서 각각의 리스트를 todoItem 왕 index로 접근할 수 있다. 그리고 각각의 값을 매서드에 넘길수 있다.-->
          <i class="fas fa-check checkBtn" v-on:click="toggleComplete(todoItem, index)" v-bind:class="{checkBtnCompleted:todoItem.completed}"></i>

          <span v-bind:class="{textCompleted: todoItem.completed}">
              {{ todoItem.item }}
          </span>
          <span class="removeBtn " v-on:click="removeTodo(todoItem, index)">
           
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
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          //getItem로 localStorage.key를 뺀다면 벨류가 떨어져 나간다. input에서 저장될때 json.string으로 보냈기 때문에 순수하게 들어오는 값도 string이기 때문에 parse(풀어서) obj으로 바꾸어준다.
        }

      }
      
    }
  },
  methods:{
    removeTodo:function(todoItem, index){
      localStorage.removeItem(todoItem)
      this.todoItems.splice(index,1)
    },
    toggleComplete: function(todoItem, index){
      todoItem.completed = !todoItem.completed;
      //로컬 스토리지의 데이터를 갱신한다.
      localStorage.removeItem(todoItem.index)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
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