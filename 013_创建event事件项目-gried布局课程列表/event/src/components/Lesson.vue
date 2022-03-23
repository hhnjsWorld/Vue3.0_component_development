<template>
  <div>
    <!--  -->
    <img :src="lesson.preview" :alt="lesson.title" :title="lesson.title" />
    <h2>{{ lesson.title }}</h2>
  </div>
</template>

<script>
export default {
  /* 接受来自父组件的 数据 v-for取的数据item做事情 */
  props: ['lesson'],
  data() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style lang="scss" scoped>
div {
  border: 1px solid grey;
  text-align: center;
  &:hover {
    box-shadow: 0 0 20px #aaa;
  }
  h2 {
    padding: 0 0 20px;
    margin: 0;
  }
  img {
    width: 100%;
    
  }
}
</style>