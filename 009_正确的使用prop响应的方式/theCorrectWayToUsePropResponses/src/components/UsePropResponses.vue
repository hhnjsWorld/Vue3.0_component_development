<template>
  <!-- 单独放一个样式{ disabled } 并传递过去 -->
  <div :class="[type, { disabled }]" @click="onClick">{{ text }}</div>
  <hr />
  <!--照这样看 子组件影响不了父组件 有其他方法-->
  <!-- <button @click="text = '变'">子组件</button>
  {{ text }} -->
</template>

<script>

export default {

  props: {
    /*  */
    content: {
      type: String,
      // type:  Object,
      /* 设置这个告知有没有content这个属性 */
      required: true,
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
    console.log(this.content);
    return {
      /* 自己定义的 指向 定义的属性 */
      text: this.content
    }

  },
  methods: {
    onClick(){
      this.text = 'loading...'
      setTimeout(() => {
        this.text =this.content
      }, 4000);
    }
  },

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
  &.ico {
    background: "../../public/AlwaysAllowed.ico";
  }
}
</style>