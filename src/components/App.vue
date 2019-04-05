<template>
  <div>
    <h1
      v-html="leads.message"
      :class="classObject"
    ></h1>
    <p>{{ leads.description }}</p>
    <button @click="changeTextSize">large</button>
    <button
      @click="addDescription"
    >
      add description
    </button>
    <hr>
    <child-component
      v-if="isShow"
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
    <button @click="toggleShow">toggle isShow</button>
    <hr>
    <p v-if="id === 1">1</p>
    <template v-else-if="id === 2">
      <p>2-1</p>
      <p>2-2</p>
      <p>2-3</p>
    </template>
    <p v-else>Other</p>
    <hr>
    <template v-for="item in items">
      <child-component 
        :key="item.id"
        :title="item.title"
      >
        <span>slot content</span>
      </child-component>
    </template>
    <hr>
    <counter></counter>
    <hr>
    <input type="text" v-model="inputText">
    <p>computed: {{ getUpperCaseText }}</p>
    <p>methods: {{ showUpperCaseText() }}</p>
    <hr>
    <template v-for="text in texts">
      <p>{{ text }}</p>
    </template>
    <button @click="updateText">update text</button>
    <hr>
    <form>
      <div>
        <span>名前:</span>
        <input-text v-model="form.name"></input-text>
        <p>名前: {{ getInputName }}</p>
      </div>
      <div>
        <span>性別:</span>
        <label>
          男性
          <input type="radio" value="male" v-model="form.sex">
        </label>
        <label>
          女性
          <input type="radio" value="female" v-model="form.sex">
        </label>
        <p>性別: {{ getRadioValue }}</p>
      </div>
      <div>
        <select v-model="form.selected">
          <option disabled value="">--出身地を選択してください--</option>
          <option v-for="option in form.options"
            :value="option.value"
          >
            {{ option.value }}
          </option>
        </select>
        <p>出身地:{{ getSelectValue }}</p>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="form.checked">
          20際以上です
        </label>
        <p>bool: {{ getCheckBoxValue }}</p>
      </div>
    </form>
    <hr>
    <article v-for="post in posts">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </article>
  </div>
</template>

<script>
import ChildComponent from 'Components/ChildComponent';
import Counter from 'Components/Counter';
import InputText from 'Components/InputText';
import axios from 'axios';

export default {
  beforeCreate() {
    console.log('beforecreate');
    console.log(this.leads);
  },
  created() {
    console.log('created');
    console.log(this.posts);
    axios.get('/data.json').then(res => {
      this.posts = res.data.posts;
    });
  },
  beforeMount() {
    console.log("beforemount");
    console.log(this.$el);
  },
  mounted() {
    console.log('mounted');
    console.log(this.$el);
    console.log(this);
  },
  beforeUpdate() {
    console.log('beforeupdate');
  },
  updated() {
    console.log('updated');
  },
  data() {
    return {
      leads: {
        message: '<span>Hello Vue</span>',
        description: '',
      },
      isShow: true,
      id: 2,
      inputText: '',
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
          title: '２番目のリスト',
        },
        {
          id: 3,
          title: '3番目のリスト',
        }
      ],
      texts: ['javascript', 'jQuery'],
      form: {
        name: '',
        sex: '',
        selected: '',
        options: [
          {
            value: '東京都',
          },
          {
            value: '埼玉県',
          },
          {
            value: '神奈川県',
          },
          {
            value: '千葉県',
          },
        ],
        checked: false,
      },
      posts: [],
    }
  },
  methods: {
    incrementCount(){
      this.count++;
    },
    showUpperCaseText(){
      const upperCaseText = this.inputText.toUpperCase();
      // console.log(`method: ${upperCaseText}`);
      return upperCaseText;
    },
    addDescription() {
      this.leads.description = 'Vue-lesson';
      // console.log(this);
      // console.log(this.leads.description);
    },
    updateText() {
      this.$set(this.texts, 1, 'Vue.js');
    },
    changeTextSize() {
      this.classObject = {...this.classObject, 'is-large': true};
    },
    toggleShow() {
      this.isShow = !this.isShow;
    }
  },
  computed: {
    getUpperCaseText(){ 
      const upperCaseText = this.inputText.toUpperCase();
      // console.log(`computed: ${upperCaseText}`);
      return upperCaseText;
    },
    getInputName() {
      return this.form.name;
    },
    getRadioValue() {
      return this.form.sex;
    },
    getSelectValue() {
      return this.form.selected;
    },
    getCheckBoxValue() {
      return this.form.checked;
    }
  },
  watch: {
    inputText(value, oldValue) {
      console.log(`value -> ${value}`);
      console.log(`oldValue -> ${oldValue}`);
    },
    'leads.description': {
      handler(){
        console.log('add description');
      },
      deep: true,
    }
  },
  components: {
    ChildComponent,
    Counter,
    InputText,
  }
}
</script>

<style scoped>
  .is-green {
    color: green;
  }
  .is-large {
    font-size: 48px;
  }
  hr {
    margin: 16px 0;
  }
</style>