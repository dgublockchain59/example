<template>
  <div>
    <h1>사용자 상세목록</h1>
    <strong v-for="user in users" v-bind:key="user.id">{{user.name}},{{user.age}}</strong>

    <button v v-on:click="postNewMonitoring">테스틍</button>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/tests/${id}`)
      .then((response) => {
        this.users = response.data
        console.log(response)
      })
  },
  data: function () {
    return {
      users: []
    }
  },
  methods: {
    postNewMonitoring: function () {
      this.$http.post('/api/monitorings',
        {
          'id': '2016112182',
          'type': '[subject record]',
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
