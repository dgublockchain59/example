<template>
  <div class="hello">
    <br/><br/><h1>{{ msg }}</h1>
    <br/><br/><h2>MEMBER SIGNUP</h2>
    <table>
      <tr>
        <td>학번 : </td>
        <td><input type="text" v-model="id"></td>
      </tr>
      <tr>
        <td>비밀번호 : </td>
        <td><input type="password" v-model="passwd"></td>
      </tr>
    </table>
    <button v v-on:click="signUp">회원가입</button>      

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
    signUp: function() {
      this.$http.post('/api/login/auth',
        { id:this.id,
          passwd: this.passwd
        }).then(
        res=> {
          alert("회원가입이 완료되었습니다.");
          alert("로그인 완료")
          console.log(res);
          this.$router.push(`/userLogin/${this.id}`);
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
table{
 
height: 100px;
margin: auto;
text-align: center;
}


</style>