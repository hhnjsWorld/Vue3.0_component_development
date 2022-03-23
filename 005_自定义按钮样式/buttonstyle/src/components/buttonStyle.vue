<template>
  <div :class="zeng">{{ Add }}</div>
  <div :class="shan">{{ Del }}</div>
  <div :class="gai">{{ Rev }}</div>
  <div :class="cha">{{ Find }}</div>
</template>

<script>
export default {

  props: {
    /* 增删改查子定义 */
    Add: {
      type: String
    },
    Del: {
      type: String,
    },
    Rev: {
      type: String
    },
    Find: {
      type: String
    },
    /* 增删改查利用sass & 添加class类对象 */

    zeng: {
      type: String,
      default: 'zeng'
    },
    shan: {
      type: String,
      default: 'shan'
    },
    gai: {
      type: String,
      default: 'gai'
    },
    cha: {
      type: String,
      default: 'cha'
    }

  },
  data() {
    return {

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

  padding: 5px 10px;
  margin: 4px;
  border-radius: 10px;
  // opacity: 0.4;
  transition: 1s;
  display: inline;
  cursor: pointer;
  & {
    &.zeng {
      background-color: rgba(165, 17, 17, 0.6);
    }
    &.shan {
      background: rgb(82, 77, 77, 0.6);
    }
    &.gai {
      background: rgb(226, 42, 177, 0.6);
    }
    &.cha {
      background: rgb(230, 211, 5, 0.6);
    }
  }
  &:hover {
    // opacity: 1;
    &.zeng {
      background-color: rgba(165, 17, 17, 1);
    }
    &.shan {
      background: rgb(82, 77, 77, 1);
    }
    &.gai {
      background: rgb(226, 42, 177, 1);
    }
    &.cha {
      background: rgb(230, 211, 5, 1);
    }
  }
}
</style>