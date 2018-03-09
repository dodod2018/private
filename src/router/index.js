import Vue from 'vue'
import Router from 'vue-router'
import modules from '../config/modules'


Vue.use(Router) 


let routes = []
for(var i=0,len=modules.length;i<len;i++){
  const item = modules[i]
  if(item.path){
    routes.push({
      path:item.path,
      component:()=>import('../views/'+item.component)
    })
  }else{
    const ary = item.sub
    for(var j=0,lenJ=ary.length;j<lenJ;j++){
      const item2 = ary[j]
      routes.push({
        path:ary[j].path,
        component:()=>import('../views/'+item2.component)
      })
    }
  }
}


export default new Router({
  routes
})

