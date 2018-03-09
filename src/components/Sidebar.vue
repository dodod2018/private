<template>
    <el-menu background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b" 
            :router="true"
            :default-active="activePage"
            class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <template v-for="(item,index) in modules">
        <el-submenu :index="''+index" v-if="item.sub" :key="index">
          <template slot="title">
            <i :class="item.icon"></i>
            <span slot="title">{{item.title}}</span>
          </template>
          <el-menu-item v-for="(item2,index2) in item.sub" :index="item2.path" :key="index2">
            <i :class="item2.icon"></i>
            <span slot="title">{{item2.title}}</span>
          </el-menu-item>
        </el-submenu>
        <el-menu-item :index="item.path" :key="index" v-else>
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </el-menu-item>
      </template>
    </el-menu>
</template>
<script>
import modules from '../config/modules'
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  computed:{
    modules:()=>{
      return modules
    },
    activePage:()=>{
      return window.location.hash.replace('#','')
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less">
.el-menu-vertical-demo{
  height:100%;
  &:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>