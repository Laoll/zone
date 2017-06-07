/**
 * Created by Administrator on 2017/5/24.
 */
var template = require('./app.html');
require('./app.less');

module.export = {
    template: template,
    data: function () {
        return {
            message:"hello world!!"
        };
    }
}