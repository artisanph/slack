import Vue from 'vue';
import VueRouter from 'vue-router';
import Conversation from '../components/Conversation';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',

    routes: [
      { path: '/', component: Conversation },
      { path: '/messages/:channel', name: 'channel', component: Conversation }
    ]
});
