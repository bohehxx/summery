function Widget(){}
Widget.prototype={
    on:function(type,handler){
        if (typeof this.handlers[type]=='undefined') {
            this.handlers[type]=[];
        }
        this.handlers[type].push(handler);
        return this;
    },
    fire:function(type,data){
        if (this.handlers[type] instanceof Array) {
            var handlers = this.handlers[type];
            for(var i=0,len=handlers.length;i<len;i++){
                handlers[i](data);
            }
        };
    },
    destructor:function(){
        this._mask && this._mask.remove();
    },
    destroy:function(){		 //方法：渲染组件
        this.destructor();
        this.boudingBox.off();
        this.boudingBox.remove();
    },
    render:function(){		//方法：渲染组件
        this.renderUI();
        this.handlers={};
        this.bindUI();
        this.syncUI();
        $(document.body).append(this.boudingBox);
    },





}
