<template>
    <div>
    <TypeNav/>
    <ListContainer/>
    <Recommend/>
    <Rank/>
    <Link/>
    <Floor/>
    </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Link from '@/pages/Home/Link'
import Floor from '@/pages/Home/Floor'
    export default {
        components:{
            ListContainer,
            Recommend,
            Rank,
            Link,
            Floor
        }
    }
</script>

<style lang="less" scoped>

</style>