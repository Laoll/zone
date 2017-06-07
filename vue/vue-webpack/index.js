/**
 * Created by Administrator on 2017/5/24.
 */
var Vue = require('vue');

var app = new Vue({
    el: '#app',
    components: {
        app: require('./src/app.js')
    }
})