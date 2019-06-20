<template>
  <div class = "courses">
    <h1>수강 과목 목록</h1>
    <div v-for="course in courses" v-bind:key="course.id" class="course">
      <div>
        <strong>{{course.name}}</strong>
      </div>
    </div>
    <button v v-on:click="postNewMonitoring">add</button>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/course/${id}`)
      .then((response) => {
        this.courses = response.data
        console.log(response)
      })
  },
  data: function () {
    return {
       courses: []
    }
  },
  methods: {
    postNewMonitoring: function () {
      this.$http.post('/api/monitorings',
        {
          'id': '2016112182',
          'type': '객체지향설계와 패턴',
          'operation': '수강과목 추가',
          'ip': '211.192.49.151',
          'time': new Date().toLocaleString()
        })
        .then((response) => {
          console.log(response)
        }),
        this.$http.post(`/api/mail`,
        {
          'id': '2016112182',
          'type': '객체지향설계와 패턴',
          'operation': '수강과목 추가',
          'ip': '211.192.49.151',
          'time': new Date().toLocaleString()
        })
        .then((response) => {
          console.log(response)
        }),
        this.$http.post(`/api/course`,
        {
          'id': '2016112182',
          'name': '객체지향설계와 패턴',
        })
        .then((response) => {
          console.log(response)
        })
    }
    },
}
</script>
