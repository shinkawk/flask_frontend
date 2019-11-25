<template>
  <div class="home">
    <div>{{users}}</div>
  </div>

</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      users: {}
    }
  },
  components: {
  },
  mounted: function () {
    console.log(this.users)
    const baseURI = '/api/users'
    this.$http.get(baseURI).then((result) => {
      this.users = result.data
    })
  }
}
</script>
