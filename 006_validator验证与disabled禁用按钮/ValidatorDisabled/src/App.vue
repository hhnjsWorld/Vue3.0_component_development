<template>
  <ValidatorDisabled content="保存提交" type="success" style="margin-right:10px" />
  <ValidatorDisabled content="删除" type="danger" style="margin-right:10px" />
  <!-- 如果你添加abc 不在已定义的范围之内 -->
  <ValidatorDisabled content="反馈" type="success" style="margin-right:10px" />
  <!-- 单独表达式disable放过来的是没有任何功能的 单独占一个样式 -->
  <ValidatorDisabled content="编辑" :disabled="true" style="margin-right:10px" />
</template>

<script>
/* 按钮样式 */
import ValidatorDisabled from './components/validatorDisabled.vue'
export default {
  components: {
    ValidatorDisabled
  },
  data() {
    return {
      add: '增加',
      del: '删除',
      rev: '修改',
      find: '查找'
    }
  },
} 
</script>

<style lang="scss" scoped>
</style>