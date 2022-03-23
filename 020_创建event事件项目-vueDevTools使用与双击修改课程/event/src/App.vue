<template>
  <div id="lesson">
    <!-- 父组件的 数据 v-for取的数据item做事情 -->
    <!-- 给了点击事件 传个形参 看看打印什么 -->
    <!-- 强调N遍:子组件触发事件，父组件调用方法 -->
    <!--  -->
    <!-- <Lesson id="hhn" v-for="item in picture" :key="item.id" :lesson="item" @click="show(item)" /> -->
    <!--  -->
    <!-- 以下都是非props父传子其他的属性,父传子的话 子组件定义属性,根组件排列好属性并接收写好的数据 并父传子传递 -->
    <!-- 如果批量用同一个方法的时候 我们可以用 v-bind='$attrs',  -->
    <!-- 如果独立用一个方法的时候 我们可以用 子传父 $emit自定义属性,定义多个不同的方法,  -->

    <Lesson v-for="item in picture" :key="item.id" :lesson="item" @del="remove" v-model="item.title"/>
    <!-- {{ picture[0]}} -->
    <!-- 1.v-model -->
    <!-- <input type="text" v-model="person" /> -->
    <!-- 2.方法展示v-model -->
    <!-- <input type="text" :value="person" @input="input" /> -->
    <!-- 3.一行代码解释v-model -->
    <!-- <input type="text" :value="person" @input="person=$event.target.value" /> -->
    <!-- {{ person }} -->

    <!-- 正常来说的话 @input="person=$event.target.value" 就行 -->
    <!-- <Vue3input :value="person" @input="person=$event.target.value" /> -->

    <!-- 在Vue3里的话用这个 -->
    <!-- 1.  <Vue3input :value="person" @update:value="refresh" /> -->

    <!-- <Vue3input v-model:value="person" /> -->
    <!-- 最终简写:注册的属性中填写props:['modelValue']的格式 -->
    <!-- <Vue3input v-model="person" /> -->

    <!-- 3. <Vue3input :value="person" @update:value="person = $event" /> -->
  </div>
  <!-- <hr /> -->
  <!-- {{ person }} -->
</template>

<script>
import db from '../data/db.js'
import Lesson from './components/Lesson.vue'
// import Vue3input from './components/Vue3input.vue'
export default {
  components: {
    Lesson, /* Vue3input */
  },

  data() {

    return {
      /*  */
      picture: db,
      person: 'hhn'
    }
  },
  methods: {

    remove(/* item */id) {
      /* 直接使用id */
      console.log(id);
      // console.log(item);
      /* 给了点击事件 传个形参 看看打印什么 */
      /* 根据 findIdex + splice的方法 进行删除操作 index拟出下标的方式进行删除操作 */
      const index = this.picture.findIndex(l => l.id == id);
      /* 截断的操作 */
      this.picture.splice(index, 1)
      console.log(index);
      // input(event) {
      //   // console.log(event.target.value);
      //   this.person = event.target.value
      // },



      // show(id) {
      //   console.log(id);

      //   /* 给了点击事件 传个形参 看看打印什么 */
      //   /* 根据 findIdex + splice的方法 进行删除操作 index拟出下标的方式进行删除操作 */
      //   const index = this.picture.findIndex(l => l.id == item.id);
      //   /* 截断的操作 */
      //   this.picture.splice(index, 1)

      // },




    },

    /* vue3双绑原理 */
    // refresh(value) {
    //   this.person = value;
    // }
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