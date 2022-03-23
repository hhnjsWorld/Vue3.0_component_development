<template>
  <div>
    <input type="text" :value="content" @input="change"  />
    {{ content }}
  </div>
</template>

<script>
export default {
  // props: ['value'],
  props:['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      content: this.modelValue
    }
  },
  methods: {
    change(event) {
      //  console.log(event);
      /* 同步效果 */
      this.content = event.target.value
      /* vue3双绑原理  */
      this.$emit('update:modelValue',this.content)
    }
  }
}
</script>

<style>
</style>