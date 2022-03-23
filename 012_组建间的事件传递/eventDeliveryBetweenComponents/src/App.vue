<!--单向数据流 父组件更改数据子组件 -->
<template>
  <!-- type:Object -->
  <!-- 父子传达的两者都变 -->

  <!-- 并没有定义在props里的属性 会直接定义在根元素标签上 -->


  <!-- <event-between-components title="hn" :content="btnContent" type="success" :click="show" /> -->

  <event-between-components title="hn" :content="btnContent" type="success" @mousemove="show"/><!-- @click="show" 是子组件触发的 自动传递给子组件触发的 -->

  <!-- 更改了属性  内容跟着随之变化 -->

  <!-- 仅限于 父组件从0到1 -->
  <!-- <button @click="btnContent = 'one'">父组件</button> -->

  <!-- {{ btnContent }} -->
</template>

<script>
/* 按钮样式 */
import eventBetweenComponents from './components/eventBetweenComponents.vue'
export default {
 
  components: {
    eventBetweenComponents
  },
  data() {
    return {
      btnContent: '变帅'
    }
  },
  methods: {
    show() { 
      alert('胡海宁')
    },
    
  },
} 
</script>
<style lang="scss" scoped>
</style>


