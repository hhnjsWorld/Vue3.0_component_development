<!--单向数据流 父组件更改数据子组件 -->
<template>
  <!-- type:Object -->
  <!-- 父子传达的两者都变 -->
  <watch-to-props :content="btnContent" type="success" />
  <!-- 更改了属性  内容跟着随之变化 -->

<!-- 仅限于 父组件从0到1 -->
  <button @click="btnContent = '1'">父组件</button>

  {{ btnContent }}
</template>

<script>
/* 按钮样式 */
import watchToProps from './components/watchToProps.vue'
export default {
  components: {
    watchToProps
  },
  data() {
    return {
      btnContent: '0'
    }
  },
} 
</script>
<style lang="scss" scoped>
</style>


