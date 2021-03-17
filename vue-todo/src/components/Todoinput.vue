<template>
  <div>
      <input type="text" v-model="newTodoItem">
      <button v-on:click="addTodo">add</button>
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
     /*data 안에 있는 newTodoItem을 접근한다. 보통 this는 자바스크립트 스코프를 지칭하는것이다.
     하지만 여기에서의 this는 data와 methods가 들어간 이 인스턴스를 말하는것이고 접근할수 있다.*/       
    //  console.log(this.newTodoItem);
     /*console.log의 저장하는 로직 */
    
     localStorage.setItem(this.newTodoItem,this.newTodoItem)
     /*로컬스토리지에 저장하는 로직 
     localStorage.setItem('key','value')키와 벨류로 setItem를 호출 할수 있습니다.*/
    this.newTodoItem = '';
    /* 함수입력 값를 초기화 하는 로직 newTodoItem를 비워 두면 클릭시 newTodoItem을 수행하고 있던 곳이 비워진다.*/
    this.clearInput()
    },
    clearInput: function(){
      this.newTodoItem = '';
    }


  }
}
</script>

<style>

</style>