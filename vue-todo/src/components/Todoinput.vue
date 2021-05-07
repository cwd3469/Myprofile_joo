<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
      <span class="addContainer " v-on:click="addTodo">
        <i class="fas fa-plus addBtn"></i>
      </span>

      <Modal v-if="showModal" v-on:close="showModal = false">
        <h3 slot="header">
          경고!
          <i class="fas fa-times closeModalBtn" @click="showModal=false" ></i>
        </h3>             
            <div slot="body">
                너 뒤에 귀신있다.
            </div>
      </Modal>
  </div>    

</template>

<script>
import Modal from './common/Modal'
export default {
  data(){
    return{
      newTodoItem:"",
      showModal:false
    }
  },
  methods:{
    addTodo(){
      if( this.newTodoItem != ''){
      // this.$emit('addTodoItem',this.newTodoItem);
      // const text = this.newTodoItem.trim();
        /*원래 $emit으로 상위 컴퍼넌트인 APP.vue으로 보냈지만
        mutations으로 관리를 해주면 되기때문에 $store로 stare.js로 mutation 함수 addOneItem에 newTodoItem를 보내면 된다.*/
        this.$store.commit('addOneItem',this.newTodoItem);
        this.clearInput()
      }else{
        this.showModal = !this.showModal;
      }

    },
    clearInput(){
      this.newTodoItem = '';
    }
  },
  components: {
    Modal
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
  .closeModalBtn{
    color:#42b983;
    cursor: pointer;
  }
</style>
