import { createApp } from 'vue';
import AddOne from './components/AddOne.js'
import AddTwo from './components/AddTwo.js'
import MinusOne from './components/MinusOne.js';

const app = {
};

const vueApp = createApp(app);
vueApp.component('add-one', AddOne);
vueApp.component('add-two', AddTwo);
vueApp.component('minus-one', MinusOne);
vueApp.mount("#app");
