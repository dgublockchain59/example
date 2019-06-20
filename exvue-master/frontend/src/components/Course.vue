<template>
  <div class = "courses">
    <h1>수강 과목 목록</h1>
    <div v-for="course in courses" v-bind:key="course.id" class="course">
      <div>
        <strong>{{course.name}}</strong>
        <button v v-on:click="postNewMonitoring">변경</button>
      </div>
    </div>

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
      var id=this.$route.course.id
      this.$http.post('/api/monitorings',
        {
          'id': '2016112182',
          'type': id,
          'operation': 'drop Testing',
          'ip': '211.192.49.151',
          'time': new Date().toLocaleString()
        })
        .then((response) => {
          console.log(response)
        })
    }
  }
}
</script>
