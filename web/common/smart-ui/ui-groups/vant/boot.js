(function(){
    var path = utils.getCurrentBootScriptPath();
    var version = utils.config.version;
    document.write('<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />');
    document.write('<link href="' + path + '/index.css?jsv='+version+'" rel="stylesheet" type="text/css" />');
    document.write('<script src="' + path + '/../vue.global.prod.js?jsv='+version+'" type="text/javascript"></sc' + 'ript>');
    document.write('<script src="' + path + '/vant.min.js?jsv='+version+'" type="text/javascript"></sc' + 'ript>');
    document.write('<script src="' + path + '/message.js?jsv='+version+'" type="text/javascript"></sc' + 'ript>');
    utils.delayAction(function (){
        return window.webos && window.webos.message;
    },function (){
        webos.message.commonMsg = function(text,title){
            var map = {
                "信息":"info-o",
                "错误":"close",
                "警告":"warning-o",
                "成功":"passed"
            };
            vant.showToast({
                message: text,
                icon: map[title],
            });
        };
    },30*1000);
    window.VueUse = function (app){
        app.use(vant);
    }
})()