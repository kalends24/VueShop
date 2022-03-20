<template>
  <div>
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Link />
    <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import {mapState} from 'vuex'
import ListContainer from "@/pages/Home/ListContainer";
import Recommend from "@/pages/Home/Recommend";
import Rank from "@/pages/Home/Rank";
import Link from "@/pages/Home/Link";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
export default {
  components: {
    ListContainer,
    Recommend,
    Rank,
    Link,
    Floor,
    Brand,
  },
  mounted() {
    this.$store.dispatch("getFloorList");
  },
  computed:{
      ...mapState({
          floorList: state => {
                return state.home.floorList
            }
      })
      
  }
};
</script>

<style lang="less" scoped>
</style>