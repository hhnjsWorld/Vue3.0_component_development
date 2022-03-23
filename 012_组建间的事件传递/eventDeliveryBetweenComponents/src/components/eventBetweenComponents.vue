<template>
  <section>
    <!-- 非props属性直接拿的话用$attrs.方法 -->
    <!-- <div :title="$attrs.title" :class="[type, { disabled }]" @click="delay" >{{ text }}</div> -->
    <!-- {{click()}} -->

    <div :class="[type, { disabled }]" >{{ text }}</div>

    <!-- 绑定父组件传达过来的事件 "$attrs -->
    <h2 style="width:20px" v-bind="$attrs">a</h2>
    
  </section>
  <!-- <hr /> -->

  <!--照这样看 子组件影响不了父组件 有其他方法-->
  <!-- <button @click="text = '变'" style="color:red">子组件</button>
  {{ text }}-->
</template>

<script>

export default {
  /* 开启的话 子组件触发的点击事件接收不到 */
  inheritAttrs: false,
  props: {
    /* 学到以前的内容的话 就知道 这个属性值设置为函数形式 父级用表达式:取渲染就行 */
    click: { type: Function },
    /*  */
    content: {
      type: String,
      // type:  Object,
      /* 设置这个告知有没有content这个属性 */
      // required: true,
      default: '确定'
    },
    /*  */
    type: {
      type: String,
      default: 'info',

      /* 验证是否是class类的其中一个 */
      validator(v) {
        // console.log(v);
        return ['success', 'danger', 'info'].includes(v)
      }
    },
    /* 判断默认是不显示任何样式 把disabled送过去 判断布尔值*/
    disabled: { type: Boolean, default: false },


  },

  /* props的响应式基于data */
  data() {
    /* 这个this指向属性 :content="btnContent" */
    // console.log(this.content);
    // console.log(this.click());
    return {
      /* 自己定义的 指向 定义的属性 */
      text: this.content
    }

  },
  /* 方法 */
  methods: {
    onClick() {
      this.text = 'loading'
      setTimeout(() => {
        this.text = this.content
      }, 1000);
    },
    // delay(){
    //  setTimeout(() => {
    //    return this.click() 
    //   }, 1000);
    // }
  },
  /* 监听props是否发生了变化 */
  /* 监听并绑定到了 值的变化 */
  watch: {
    content(nv) {
      /* 首先打印新旧值 */

      console.log(nv);
      //  nv = ov
      /* 从loading 到 1 */
      this.text = nv
    }
  }

}

</script>

<style lang="scss" scoped>
/* 定义了一个按钮 */
/* 渐变+高亮 */
div {
  color: black;
}
div {
  // color: black;
  background: green;
  cursor: pointer;
  padding: 5px 10px;
  margin: 4px;
  border-radius: 10px;
  opacity: 0.4;
  transition: 1s;
  display: inline;

  &:hover {
    opacity: 1;
  }
  &.info {
    background-color: rgb(71, 165, 17);
  }
  &.success {
    background: rgb(106, 15, 209);
  }
  &.danger {
    background: rgb(228, 61, 61);
  }
  &.disabled {
    opacity: 1;
    background: rgb(70, 70, 55) !important;
    color: azure;
    cursor: default;
  }
}
</style>