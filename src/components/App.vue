<template>
  <div>
    <h1
      v-html="message"
      :class="classObject"
    ></h1>
    <child-component
      v-show="isShow"
    >
      <template #head>
        <p>head slot</p>
      </template>
      <template #default>
        <p>main slot</p>
        <p>main slot2</p>
      </template>
      <template #foot>
        <p>foot slot</p>
      </template>
    </child-component>
    <p v-if="id === 1">1</p>
    <template v-else-if="id === 2">
      <p>2-1</p>
      <p>2-2</p>
      <p>2-3</p>
    </template>
    <p v-else>Other</p>
    <template v-for="item in items">
      <child-component :key="item.id">
        <span>slot content</span>
      </child-component>
    </template>
    <button @click="count++">Add to count</button>
    <p>{{ count }}回クリックされました</p>
  </div>
</template>

<script>
import ChildComponent from 'Components/ChildComponent';

export default {
  data() {
    return {
      message: '<span>Hello Vue</span>',
      isShow: true,
      id: 2,
      count: 0,
      classObject: {
        'is-green': true,
      },
      items: [
        {
          id: 1,
          title: '1番目のリスト',
        },
        {
          id: 2,
          title: '２番目のリスト'
        },
        {
          id: 3,
          title: '3番目のリスト'
        }
      ],
    }
  },
  components: {
    ChildComponent,
  }
}
</script>

<style scoped>
  .is-green {
    color: green;
  }
</style>