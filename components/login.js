/**
 * Created by gaowenlin on 2017/7/6.
 */
define(['text!./login.html','pro/regularjs/dist/regular'],function (tpl) {
        return Regular.extend({
            name:"login",
            template:tpl
        })
    }
)