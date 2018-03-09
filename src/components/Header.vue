<template>
  <div class="header">
    <div class="logo">
      <img src="../assets/img/total_logo.png" alt="">
    </div>
    <ul class="links">
      <li class="icon-box">
        <i class="icon icon-16 icon-user"></i>
        <span>个人中心</span>
      </li>
      <li class="icon-box" @click="panelStatus.panel = !panelStatus.panel">
        <i class="icon icon-16 icon-user"></i>
        <span>商户面板</span>
        <div class="panel" v-show="panelStatus.panel">
          <div class="panel-top">
            <div class="ptl icon-box">
              <i class="icon icon-32 icon-user"></i>
              <span>test@beecloud.cn（管理员）</span>
            </div>
            <div class="ptr">已认证</div>
          </div>
          <div class="panel-middle">
            <ul class="clearfix">
                <router-link tag="li" :to="item.path" v-for="(item,index) in _modules" :key="index">
                  <i class="icon icon-24" :class="'icon-'+item.name"></i>
                  <p>{{item.title}}</p>
                </router-link>
            </ul>
          </div>
          <div class="panel-bottom">
            <div class="icon-box">
              <i class="icon icon-16 icon-exit"></i>
              <span>退出</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import modules from '../config/modules'
export default {
  data () {
    return {
      panelStatus:{
        panel:false
      },
    }
  },
  computed:{
    _modules:() => modules
  },
  methods: {
    logout(){
      this.$router.push('/login')
    },
    showPanel(){

    }
  }
}
</script>

<style lang="less" scoped>
@border-gray:#e7e7e7;
@bg-gray:#F4F6F7;
.header{
  height:50px;
  line-height:50px;
  border-bottom:1px solid @border-gray;
  background-color: @bg-gray;
  .logo{
    display: inline-block;
    height:100%;
    width:220px;
    border-right:1px solid @border-gray;
    padding:8px 30px 6px;
    img{
      float:right;
      display: block;
      height:100%;
    }
  }
  .links{
    float:right;
    list-style: none;
    margin:0;
    >li{
      float:left;
      padding:0 16px;
      cursor: pointer;
      position: relative;
      >i{
        margin-right:5px;
      }
      >span{
        color:#777;
      }
    }
  }
  .icon-box{
    >i{
      margin-right:5px;
    }
  }
  .panel{
    font-size:1.2rem;
    position: absolute;
    right:0;
    top:50px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.16), 0 0 10px 0 rgba(0, 0, 0, 0.04);
    width:500px;
    z-index:1;
    >.panel-top{
      height: 80px;
      line-height: 80px;
      padding: 0 32px;
      background-color: white;
      >.ptl{
        float: left;
      }
      >.ptr{
        float: right;
      }
    }
    >.panel-middle{
      background-color: #F8F8F8;
      color: #999999;
      padding: 36px 36px 0;
      ul{
        list-style: none;
        margin: 0;
        padding:0;
        border-bottom:1px solid #bcbcbc;
        li{
          float: left;
          text-align: center;
          margin-bottom: 50px;
          width: 25%;
          cursor: pointer;
          >p{
            margin:15px 0 0;
            line-height: 1em;
          }
        }
      }
    }
    >.panel-bottom{
      background-color: #F8F8F8;
      color:#999;
      .icon-box{
        text-align: center;
        font-size: 14px;
      }
    }
  }
}
</style>
