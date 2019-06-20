<template>
  <div>
    <!--<b-table striped hover :items="items" :fields="fields"></b-table>-->

    <div v-for="history in historys" v-bind:key="history.id" class="history">
      <div>
        <strong>{{history.type}}</strong>
        <strong>{{history.operation}}</strong>
        <strong>{{history.ip}}</strong>
        <strong>{{history.time}}</strong>

        <!--<router-link :to="{ name: 'detail', params: { id: user.id }}">더보기</router-link>-->
      </div>
    </div>

  </div>
</template>

<script>
// import data from '@/data'
// let items = data.Content.sort((a, b) => { return b.content_id - a.content_id })
// items = items.map(contentItem => { return {...contentItem, user_name: data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name} })
// export default {
//   data () {
//     return {
//       fields: [
//         {
//           key: 'content_id',
//           label: '글번호'
//         },
//         {
//           key: 'title',
//           label: '제목'
//         },
//         {
//           key: 'created_at',
//           label: '등록일'
//         },
//         {
//           key: 'user_name',
//           label: '글쓴이'
//         }
//       ],
//       items: items
//     }
//   }
// methods:{
//   rowClick(item, index, e){
//     this.$router.push({
//       path:'/board/free/detail/${item.content}'
//     })
//   }
// }
// }
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
  }
}
</script>