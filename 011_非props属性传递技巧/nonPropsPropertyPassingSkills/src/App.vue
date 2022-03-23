<!--单向数据流 父组件更改数据子组件 -->
<template>
  <!-- type:Object -->
  <!-- 父子传达的两者都变 -->

  <!-- 并没有定义在props里的属性 会直接定义在根元素标签上 -->
  <nonPropsPassing   :content="btnContent" type="success" title="我的吗" />

  <!-- 更改了属性  内容跟着随之变化 -->

<!-- 仅限于 父组件从0到1 -->
  <button @click="btnContent = 'one'">父组件</button>

  {{ btnContent }}
</template>

<script>
/* 按钮样式 */
import nonPropsPassing from './components/nonPropsPassing.vue'
export default {
  components: {
    nonPropsPassing
  },
  data() {
    return {
      btnContent: 'zero'
    }
  },
} 
</script>
<style lang="scss" scoped>

</style>


