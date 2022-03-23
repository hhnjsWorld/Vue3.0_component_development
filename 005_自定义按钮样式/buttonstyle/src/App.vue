<template>
  <ButtonStyle :style="$attrs.style"  :Add="add" :Del="del" :Rev="rev" :Find="find" />
</template>

<script>
/* 按钮样式 */
import ButtonStyle from './components/buttonStyle.vue'
export default {
  components: {
    ButtonStyle
  },
  data() {
    return {
      add: '增加',
      del: '删除',
      rev: '修改',
      find:'查找'
    }
  },
} 
</script>

<style lang="scss" scoped>
</style>