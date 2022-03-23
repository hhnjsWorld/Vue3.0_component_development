<template>
<!-- 单独放一个样式{ disabled } -->
  <div :class="[type, { disabled }]">{{ content }}</div>
</template>

<script>
import validatorDisabledVue from './validatorDisabled.vue'
export default {

  props: {
    content: {
      type: String,
      default: '确定'
    },
    type: {
      type: String,
      default: 'info',
      /* 验证是否是class类的其中一个 */
      validator(v) {
        // console.log(v);
        return ['success','danger','info'].includes(v)
      }
    },
    disabled: { type: Boolean, default: false }
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
    background: rgb(15, 209, 209);
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