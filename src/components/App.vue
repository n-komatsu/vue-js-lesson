<template>
  <div>
    <h1>{{message}}</h1>
    <child-component></child-component>
  </div>
</template>

<script>
import ChildComponent from 'Components/ChildComponent';

export default {
  data() {
    return {
      message: '<span>Hello Vue</span>',
    }
  },
  components: {
    ChildComponent,
  }
}
</script>

<style scoped>
  h1 {
    color: green;
  }
</style>