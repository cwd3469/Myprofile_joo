<template>
  <div>
      <ul>
        <li class="shadow" v-for="(todoItem, index) in propsdata" v-bind:key="todoItem.item">
          <!--todoitems 안에서 각각의 리스트를 todoItem 왕 index로 접근할 수 있다. 그리고 각각의 값을 매서드에 넘길수 있다.-->
          <i class="fas fa-check checkBtn" v-on:click="toggleComplete(todoItem, index)" v-bind:class="{checkBtnCompleted: todoItem.completed}"></i>

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
  props: ['propsdata'],
  methods:{
    removeTodo:function(todoItem, index){
      this.$emit('removeItem', todoItem, index);
      /*input에서 받은 내용을 다 올려 주면 된다.*/
      
    },
    toggleComplete: function(todoItem, index){
      this.$emit('toggleItem', todoItem, index)
    }
  }
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