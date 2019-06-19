<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">OGU</b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"/>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/student">학생정보</b-nav-item>
          <b-nav-item to="/course">수강과목</b-nav-item>
          <b-nav-item to="/assign">과제</b-nav-item>
          <b-nav-item to="/usages">이용내역</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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
