import Vue from 'vue';
import router from './router.js';
import VueResource from 'vue-resource';

Vue.use(VueResource);

let app = Vue.extend({});

router.start(app, '#app');
