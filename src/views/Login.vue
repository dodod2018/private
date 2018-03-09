<template>
  <div class="login-page">
    <div class="box">
      <div class="title">Login</div>
      <b-form class="login-form" @submit="login">
        <b-form-input 
                      type="text"
                      v-model="form.username"
                      required
                      placeholder="输入用户名">
        </b-form-input>
        <b-form-input 
                      type="password"
                      v-model="form.password"
                      required
                      placeholder="输入密码">
        </b-form-input>
        <b-button-group class="w-100">
          <b-button class="w-100" type="submit" variant="primary">登录</b-button>
        </b-button-group>
      </b-form>
    </div>
  </div>
</template>

<script>
import {mapActions,mapMutations} from 'vuex'
export default {
  data () {
    return {
      form: {
      }
    }
  },
  methods: {
    ...mapActions([
      'alert','request'
    ]),
    ...mapMutations([
      'set_user'
    ]),
    login(){
      let _this = this
      this.request({
        router:this.$router,
        method:'get',
        uri:'login',
        data:this.form,
        success:res => {
          _this.set_user(res.user)
          localStorage.setItem('token',res.token)
          this.$router.push('/')
        }
      })
    }
  }
}
</script>
<style scoped lang="less">
  .w-100{
    width:100%;
  }
  .login-form{
    max-width:300px;
    margin:0 auto;
    background-color: #fff;
    padding: 1.5rem;
    border: 1px solid #EFEFEF;
    box-shadow: 0px 1px 12px 0px rgba(197, 197, 197, 0.5);
    border-radius: 5px;
    input{
      margin-bottom:16px;
    }
  }
  .title{
    text-align: center;
    font-size: 36px;
    color: #fff;
    padding: 0 0 32px 0;
    font-size: 50px;
  }
  .login-page{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-color: #17a2b8;
    }
  @media screen and (max-width: 600px){
    .login-form{
      border:none;
      box-shadow:none;
      margin-top:0;
    }
    .title{
      padding:0;
    }
  }
  @media screen and (min-width: 601px){
    .login-page{
      display:flex;
      align-items: center;
    }
    .box{
      width:100%;
      text-align: center;
      position: relative;
      top:-100px;
    }
  }
</style>
