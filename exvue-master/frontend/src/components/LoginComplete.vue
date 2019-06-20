<template>
  <div class="hello">
     <br/><br/><h1>{{ msg }}</h1>
    <input type="button" value="로그아웃" onclick="location.href='../'">
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '',
      form:{
      id:'',
      passwd: '',
    },
    show: true
  }
  },
  created: function(){
        var currentUrl = document.location.href
        var id=currentUrl.split('userLogin/')[1];
        console.log(id);
        if(id!="undefined")
          this.msg=id + "님 반갑습니다.";
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