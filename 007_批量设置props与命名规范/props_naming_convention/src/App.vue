<template>
  <NamingConventions content="保存提交" hnTip='我的' type="success" style="margin-right:10px" />
  <NamingConventions content="删除" type="danger" style="margin-right:10px" />
  <!-- 如果你添加abc 不在已定义的范围之内 -->
  <NamingConventions content="反馈" type="success" style="margin-right:10px" />
  <!-- 单独表达式disable放过来的是没有任何功能的 单独占一个样式  type="disabled"-->
  <NamingConventions content="编辑"  :disabled="true" style="margin-right:10px" />

  <NamingConventions content="保存1" type="success" />
  <!-- 上下两种写法一样的 -->
  <NamingConventions v-bind="{ content: '保存2', type: 'success', style: 'margin: 120px' }" />
</template>

<script>
/* 按钮样式 */
import NamingConventions from './components/namingConventions.vue'
export default {
  components: {
    NamingConventions
  },
  data() {
    return {
      // add: '增加',
      // del: '删除',
      // rev: '修改',
      // find: '查找'
     
    }
  },
} 
</script>

<style lang="scss" scoped>
</style>