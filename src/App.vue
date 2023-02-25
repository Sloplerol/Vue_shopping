<template>
  <div>
      <MyHeader/>
      <router-view></router-view>
      <MyFooter v-show="$route.meta.isshow || $route.meta.isshow"/>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader';
import MyFooter from '@/components/MyFooter'
export default {
  name: 'App',
  components: {MyHeader,MyFooter},
  //在App组件里面无论路由如何跳转最终响应回来的结果只有一次
  mounted(){
      this.$store.dispatch('category');
  }
}
</script>

<style>

</style>