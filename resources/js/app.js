
require('./bootstrap');

window.Vue = require('vue').default;
import Vue from "vue";
import Vuetify from "vuetify";
// import VueRouter from "vue-router";
import "vuetify/dist/vuetify.min.css";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

Vue.use(Vuetify);
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */



Vue.component('example-component', require('./components/ExampleComponent.vue').default);


const app = new Vue({
    el: '#app',
    vuetify: new Vuetify({
        iconfont: "mdi",
        theme: {
            themes: {
                light: {
                    primary: "#EB8635", // naranja
                    secondary: "#363636",
                    accent: "#e3ecf5", // tablas
                    error: "#FF5252",
                    info: "#1963ad",
                    success: "#4CAF50",
                    warning: "#FFC107",
                },
            },
        },
    }),

});
