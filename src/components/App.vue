<template>
  <h1>{{message}}</h1>
</template>

<script>
export default {
  data() {
    return {
      message: '<span>Hello Vue</span>',
    }
  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
</style>