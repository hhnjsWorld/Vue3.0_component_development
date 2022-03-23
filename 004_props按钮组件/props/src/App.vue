<template>
<!-- 以表达式的方式显示我data里卖弄的 数据 :content 此content -->
<!-- 以Sting渲染 -->
  <hn-button :content="btContent" />
  <!-- 以默认方式渲染 props里设置 -->
  <hn-button/>
  <!-- 以对象方式渲染 -->
  <hn-button :content="{a:34,b:'ss'}" /><!-- 以type等于Object的方式表达 -->
</template>
<script>
import hnButton from "./components/Button.vue";
export default {
  
  components: { hnButton },
  data() {
    return {
      btContent:'保存提交'
    };
  },
};
</script>

<style lang="scss" scoped>
</style>