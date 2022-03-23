<template>
<div class="lesson">
  <!-- 父组件的 数据 v-for取的数据item做事情 -->
  <Lesson v-for="item in picture" :key="item.id" :lesson="item" />
</div>
 
</template>

<script>
import db from '../data/db.js'
import Lesson from './components/Lesson.vue'
export default {
  components: {
   Lesson
  },

  data() {
    return {
      /*  */
     picture:db
    }
  },
}
</script>

<style lang="scss" scoped>
.lesson{
  /* grid布局的 横板布局 */
  display: grid;
  grid-template-columns: repeat(3,1fr);
  /* 间距 */
  column-gap: 20px;
}
</style>