<template>
  <div style="font-size:100px;text-align:center">
    <button @click="alert">alert</button>
  </div>
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
export default {
  data() {
    return{

    }
  },
  methods:{
    alert(){
      this.$message({
        message:'的路口附近的萨拉',
        type:'success'
      })
    }
  }
};
</script>
<style scoped lang="less">

</style>
