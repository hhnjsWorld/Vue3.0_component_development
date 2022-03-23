<template>
  <!-- 利用style样式 再用父传子的概念 画一个样式 -->
  <div>{{ content }}{{arr}}</div>
</template>

<script>
export default {
  /* 子组件定义属性 并接收 父组件传递过来的数据 */
  // props: ['content'],
  /* 是一个对象的话限定传递的是什么类型 */
  props: {
    /* 限定传递的是什么类型 */
    content: {
      type: String,//Boolean Number Function Object
      /* 不传值的时候默认是确定 可以设置的 */
      default: '确定'
    },
    arr:{
    type:Number,
    default(){
      return[1,2,3]
    }
    }
  },
  // data() {
  //   return {


  //   }
  // },
}
</script>

<style lang="scss" scoped>
/* 定义了一个按钮 */
/* 渐变+高亮 */
div {
  background: green;
  color: red;
  padding: 5px 10px;
  border-radius: 10px;
  opacity: 0.5;
  transition: 1s;
  display: inline;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
}
</style>