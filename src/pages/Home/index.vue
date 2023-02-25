<template>
  <div>
    <TypeNav/>
    <List/>
    <Recommend/>
    <Bank/>
    <Like/>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"/>
    <Brand/>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import List from '@/pages/Home/List';
import Recommend from '@/pages/Home/Recommend';
import Bank from '@/pages/Home/Rank';
import Floor from '@/pages/Home/Floor';
import Like from '@/pages/Home/Like';
import Brand from '@/pages/Home/Brand';
export default {
    name: 'Home',
    components: {List,Recommend,Bank,Floor,Like,Brand},
    mounted(){
      this.$store.dispatch('getFloor');
    },
    computed: {
      ...mapState({
        floorList: (state)=>{
          return state.home.floorcategory
        }
      })
    }
}
</script>

<style>

</style>