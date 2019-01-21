import axios from 'axios';
import Vue from 'vue';

export default{
    install(Vue){
        Vue.prototype.$http=axios; //或者
        window.axios=axios;
    }
}


