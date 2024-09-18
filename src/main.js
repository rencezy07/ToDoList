import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css'; // Vuetify styles
import '@fortawesome/fontawesome-free/css/all.css'; // Font Awesome styles

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: 'fa', // Use 'mdi' for Material Design Icons
  },
  typography: {
    fontFamily: 'sans-serif', // Set your custom font here
  },
});

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
