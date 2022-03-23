<!--单向数据流 父组件更改数据子组件 -->
<template>
<!-- type:String -->
<!-- 正常情况下 父传给子 父变 子变  子变 父不变  -->
  <!-- 父子传达的两者都变 -->
  <vBind :content="btnContent1" type="info" />
  <!-- 更改了属性  内容跟着随之变化 -->

  <button @click="btnContent1 = '我变你变'">父组件</button>
  {{ btnContent1 }}


<br>
<br>
<br>

  
<!-- type:Object -->
<!-- 父子传达的两者都变 -->
  <wBind :content="btnContent2" type="success" />
  <!-- 更改了属性  内容跟着随之变化 -->

  <button @click="btnContent2.text = '我俩变'">父组件</button>

  {{ btnContent2.text }}
 
</template>

<script>
/* 按钮样式 */
import vBind from './components/vBind.vue'
import wBind from './components/wBind.vue'
export default {
  components: {
    vBind,//父传子 、子不变 字符串
    wBind//父子都变 对象类型

  },
  data() {
    return {
      btnContent1:'', 
      btnContent2: { text: '' }

    }
  },
} 
</script>

<style lang="scss" scoped>
</style>