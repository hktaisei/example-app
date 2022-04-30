require('./bootstrap');

import Alpine from 'alpinejs';
import { createApp } from 'vue';
import vueCounter from "./vueCounter";
// import { VueLoaderPlugin } from 'vue-loader';

window.Alpine = Alpine;

Alpine.start();

// const Counter = {
//     data() {
//         return {
//             counter: 0,
//         };
//     },
//     mounted() {
//         setInterval(() => {
//             this.counter++;
//         }, 1000);
//     },
// };

createApp({
    setup(){
        //カウンターを更新する
        const { counter } = vueCounter();

        return {
            counter,
        };
    },
}).mount("#counter");

// Vue.createApp(Counter).mount("#counter");


