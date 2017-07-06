/**
 * Created by gaowenlin on 2017/7/6.
 */

var Modal = Regular.extend({
    template:"#modal",
    init:function () {
        if(!this.parent){
            this.inject(document.body)
        }
    },
    close:function () {
        this.$emit("close");
        this.destroy();
    },
    confirm:function () {
        this.$emit("confirm",this.data);
    }
});

var modal = new Modal({
    data:{
        content:"<input type='text' class='form-control' r-model='{contentText}'>\
        <p>{contentText}</p>",
        title:"请输入确认信息"
    }
});

modal.$on('confirm',function (data) {
    console.log(data.contentText)
});