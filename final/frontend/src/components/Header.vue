<template>
  <div>
    <table>
      <tr>
        <td style="cursor:hand" onClick="location.href='http://localhost:8080'">OGU</td>
        <td style="cursor:hand" onClick="location.href='http://localhost:8080'">학생정보</td>      
        <td style="cursor:hand" onClick="location.href='http://localhost:8080/#/course/2016112182'">수강과목</td>
        <td style="cursor:hand" onClick="location.href='http://localhost:8080/#/monitoring/2016112182'">이용내역</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default{
  name: 'Header',
  data (){
    return {}
  }
}
</script>

<style scoped>
table{
 
height: 100px;
margin: auto;
text-align: center;
}

</style>
