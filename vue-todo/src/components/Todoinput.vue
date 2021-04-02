<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer " v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>
  </div>
<!--인풋 박스을 만들어서 특정 택스트 값을 입력을 하면 그 택스트 값을 로컬스트로지에 저장을 합니다.-->
<!--인풋 박스에 입력된 값들이 스크립트딴에서 인식을 할려면 v-model이라는 디렉티브를 사용해야한다. v-model의 역할은 입력된값은 동적으로 vue 인스턴트 안에 맵핑하는 역할-->
<!--v-on:click의 역할 클릭했을때 동작하는 매소드를 입력하는 곳-->
</template>

<script>
export default {
  data: function(){
    return{
      newTodoItem:""
    }
  },
  methods:{
    addTodo: function(){
      if( this.newTodoItem != ''){
      this.$emit('addTodoItem',this.newTodoItem);
        // this.$emit('새로운 이벤트 이름',인자1, 인자2)이런 씩으로 상위 컴퍼넌트로 보낼수 있다.
        // this.newTodoItem는 원래 하위컴퍼넌트에 있던 거니깐 상위 컴퍼넌트로 보내주기만 하면된다.
        /* 함수입력 값를 초기화 하는 로직 newTodoItem를 비워 두면 클릭시 newTodoItem을 수행하고 있던 곳이 비워진다.*/
        this.clearInput()
      }

    },
    clearInput: function(){
      this.newTodoItem = '';
    }


  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox{
    background: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input{
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer{
    float: right;
    background: linear-gradient(to right, #6478FB,#8763fb);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn{
    color: #fff;
    vertical-align: middle;
  }
</style>
