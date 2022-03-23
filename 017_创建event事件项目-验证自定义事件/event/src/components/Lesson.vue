<template>
  <div>
    <!--  -->
    <img :src="lesson.preview" :title="lesson.title" alt="lesson.title"  />
    <h2 >{{ lesson.title }}</h2>
    <!-- $attrs控制删除 -->
    <!-- <span v-bind="$attrs" @click="del">✖</span> -->
    <!-- $emit控制删除 -->
    <!-- <span @click="del">✖</span> -->
    <!-- 换成下面的写法 -->
    <span @click="del">✖</span>
  </div>
</template>

<script>
export default {
  /* 接受来自父组件的 数据 v-for取的数据item做事情 */
  /* 默认 注销了 不用父级的触发层 搭配 v-bind="$attrs" 做在子组件的某个标签触发这个方法 */
  // inheritAttrs: false,

  props: ['lesson'],
  /* 单独触发click事件 自定义触发什么事件 */

  /* 进行事件验证 */
  emits: {
    del(v) {
      console.log(v);
      /* 验证是否是一个数字 */
      if (/^\d+$/.test(v)) {
        // console.log('ok');
        return true
      } 
      throw new error('del requires a numeric argument del需要数值参数')
    }
  }
  ,
  methods: {
    del() {
      //  console.log('删除');
      /* 父在子注册的属性对响应式数据props的操作  */
      this.$emit('del',this.lesson.id)
    }
  },
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid grey;
  text-align: center;
  transition: 1s;
  position: relative;
  &:hover {
    box-shadow: 0 0 20px #aaa;
    > span {
      /* 控制显隐本身就有 渐变的效果 */
      opacity: 1;
      &:hover {
        box-shadow: 0 0 20px rgb(94, 16, 16);
      }
    }
  }

  img {
    width: 100%;
    // height: 80%;
    white-space: wrap;
  }
  h2 {
    padding: 0 0 20px;
    margin: 0;
  }
  span {
    display: block;
    background-color: #555;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 10px;
    right: 10px;
    line-height: 110%;
    cursor: pointer;
    transition: 1s;
    opacity: 0;
  }
}
</style>