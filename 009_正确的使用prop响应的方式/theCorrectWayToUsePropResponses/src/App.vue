<!--单向数据流 父组件更改数据子组件 -->
<template>

<!-- type:Object -->
<!-- 父子传达的两者都变 -->
  <UsePropResponses :content="btnContent" type="success" />
  <!-- 更改了属性  内容跟着随之变化 -->

  <button @click="btnContent = '我俩变'">父组件</button>

  {{ btnContent }}
 
</template>

<script>
/* 按钮样式 */
import UsePropResponses from './components/UsePropResponses.vue'
export default {
  components: {
  UsePropResponses
  },
  data() {
   
    return {
    btnContent:'默认'

    }
  },
} 
</script>
<style lang="scss" scoped>
</style>


