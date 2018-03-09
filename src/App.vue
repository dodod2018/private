<template>
  <div id="app">
    <div class="sidebar-wrapper">
      <Sidebar/>
    </div>
    <div class="page-wrapper">
      <router-view/>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data () {
    return {
    }
  },
  methods: {
    logout(){
      this.$router.push('/login')
    },
     ...mapActions([
      'get_user_info'
    ]),
  },
  mounted(){
    this.$nextTick(() => {
        // this.get_user_info()
    })
  }
}
</script>
<style lang="less">
  #app{
    display: flex;
    >.page-wrapper{
      width:100%;
      padding:16px;
    }
  }
</style>




