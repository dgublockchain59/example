<template>
  <div>
    <!--<b-table striped hover :items="items" :fields="fields"></b-table>-->
    <div v-for="history in historys" v-bind:key="history.id" class="history">
      <div>
        <strong>{{history.type}}</strong>
        <strong>{{history.operation}}</strong>
        <strong>{{history.ip}}</strong>
        <strong>{{history.time}}</strong>
      </div>
    </div>
    <button v v-on:click="mail">메일 보내기</button>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.$http.get(`/api/monitorings/${id}`)
      .then((response) => {
        this.historys = response.data
        console.log(response)
      })
  },
  data: function () {
    return {
      historys: []
    }
  },
  methods: {
    mail: function () {
      this.$http.post(`/api/mail`,
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
