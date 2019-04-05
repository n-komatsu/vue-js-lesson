import Vue from 'vue';

import MyApp from 'Components/App';
import store from './store';

new Vue({
  el: '#app',
  store,
  components: {
    MyApp
  },
  template: '<my-app></my-app>',
});