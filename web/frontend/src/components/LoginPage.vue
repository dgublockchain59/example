<template>
  <div class="hello">
    <br/><br/><h1>{{ msg }}</h1>
    <br/><br/><h2>MEMBER LOGIN</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     <b-form-group id="input-group-1" label="Your ID:" label-for="id">
       <b-form-input
         id="id"
         v-model="form.id"
         required
         placeholder="Enter ID"
       ></b-form-input>
     </b-form-group>
     <b-form-group id="input-group-2" label="Your Password:" label-for="passwd">
       <b-form-input
         id="input-2"
         v-model="form.passwd"
         required
         placeholder="Enter Password"
       ></b-form-input>
     </b-form-group>
     <b-button type="submit" variant="primary">Submit</b-button>
     <b-button type="reset" variant="danger">Reset</b-button>
   </b-form>
  </div>

</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '학생 정보 관리 사이트에 오신 것을 환영합니다.',
      form:{
      id: '',
      passwd: '',
    },
    show: true
  }
  }, 
  methods: {
    // signUp: function (event) {
    //   this.$http.post('localhost:3000/login/add', { //axios 사용
    //     user: this.user
    //   })
    //   .then((response) => {
    //     if (response.data.result === 0) {
    //       alert('Error, please, try again')
    //     }
    //     if (response.data.result === 1) {
    //       alert('Success')
    //       this.$router.push('/login') // Login 페이지로 보내줌
    //     }
    //   })
    //   .catch(function (error) {
    //     alert('error')
    //   })
    // }
    loginSubmit: function() {
      console.log("로그인");
      this.$Axios.post(`http://127.0.0.1:3000/login/auth`, { id: this.id, passwd: this.passwd}).then(
        res=> {
          console.log(res);
          this.$router.push("/");
        }
      )
    },
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>