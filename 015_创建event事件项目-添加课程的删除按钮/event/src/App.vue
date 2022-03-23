<template>
  <div id="lesson">
    <!-- 父组件的 数据 v-for取的数据item做事情 -->
    <!-- 给了点击事件 传个形参 看看打印什么 -->
    <!-- 强调N遍:子组件出发事件，父组件调用方法 -->
    <Lesson id="hhn" v-for="item in picture" :key="item.id" :lesson="item" @click="show(item)" />
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
      picture: db
    }
  },
  methods: {
    show(item) {
      console.log(item);
      /* 给了点击事件 传个形参 看看打印什么 */
      /* 根据 findIdex + splice的方法 进行删除操作 index拟出下标的方式进行删除操作 */
      const index = this.picture.findIndex(l => l.id == item.id);
      /* 截断的操作 */
      this.picture.splice(index, 1)
    }
  },
}
</script>

<style lang="scss" scoped>
#lesson {
  /* grid布局的 横板布局 */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* 间距 */
  column-gap: 20px;
  #hhn {
    // border: 1px aqua solid;
  }
}
</style>