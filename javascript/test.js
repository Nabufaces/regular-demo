/**
 * Created by gaowenlin on 2017/7/5.
 */
var Regular = require("regularjs");

var component = new Regular({
    template:"<button on-click={count = count + 1}>加{count}</button><p>{count}</p>",
    data:{count:1}
}).$inject("#app");

var list = new Regular({
    template:
        "{#list items as item}\
            <p>{item_index}:{item}</p>\
          {/list}",
    data:{
        items:["a","b","c"]
    }
}).$inject(document.body,"top");

/*
var Component = Regular.extend({
    template:
    "<div>fullname: <input r-model={fullname}></div>"+
    "<div>first: <input r-model={first}></div>"+
    "<div>last: <input r-model={last}></div>"+
    "<div>Wellcome! {wellcome}</div>",
    computed: {
        fullname: {
            get: function(data){
                return data.first + "-" + data.last;
            },
            set: function(value, data){
                var tmp = value.split("-");
                data.first = tmp[0];
                data.last = tmp[1];
            }
        }
    }
})

var component = new Component({
    computed: {
        wellcome: "'welcome' + fullname"
    },
    data: {first: '1', last: '2'}
}).$inject("#app");*/



