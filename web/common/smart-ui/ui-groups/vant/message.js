(function(){
    utils.message = {
        msg:function(text,type){
            if(!type){
                type = "primary";
            }
            if(!type || type == "info"){
                type = "primary";
            }
            if(type == "error"){
                type = "danger";
            }
            vant.showNotify({ type: type, message: text });
        },
        loading:function(text){
            vant.showLoadingToast({
                message: text,
                forbidClick: true,
                duration:0
            });
        },
        cancelLoading:function(){
            vant.closeToast();
        },
        alert:function(text,callback){
            vant.showDialog({
                message: text,
            }).then(() => {
                if(callback){
                    callback();
                }
            });
        },
        confirm:function(text,callback){
            vant.showConfirmDialog({
                allowHtml:true,
                message:text
            }).then(() => {
                 if(callback){
                     callback(1);
                 }
            }).catch(() => {
                if(callback){
                    callback(0);
                }
            });
        },
        prompt:function(text,callback,def){
            if(!def){
                def = "";
            }
            console.log(def);
            vant.showConfirmDialog({
                allowHtml:true,
                message:"<div>"+text+"<input class='my-vant-input vant-prompt-input' value='"+def+"'/></div>"
            }).then(() => {
                if(callback){
                    callback(1,document.querySelector(".vant-prompt-input").value);
                }
                var input = document.querySelector(".my-vant-input");
                if(input){
                    input.value = "";
                }
            }).catch(() => {
                if(callback){
                    callback(0);
                }
                var input = document.querySelector(".my-vant-input");
                if(input){
                    input.value = "";
                }
            });
        }
    }
})();