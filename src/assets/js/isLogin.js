/**
 * Created by Administrator on 2016/12/20.
 */
 var accountInfo='';
(function(){
    var iHtml=document.getElementsByTagName('html')[0];
    iHtml.style.display='none';
    ajax({
        url: "/uc/userinfo.do",              //请求地址
        type: "GET",                       //请求方式
        data: '',        //请求参数
        dataType: "json",
        success: function (response, xml) {
            // 此处放成功后执行的代码
            // iHtml.style.display='block';
            var data=JSON.parse(JSON.parse(response));
            accountInfo=data;
            if(data.result==100 && isLoginHtml()){
                window.location.href='user.html';
            }else if(data.result==-2  && !isLoginHtml()){
                window.location.href='login.html';
            }else{
                iHtml.style.display='block';
            }
        },
        fail: function (status) {
            // 此处放失败后执行的代码
            alert('系统获取异常');
        }
    });
})()
function isLoginHtml(){
    var add=window.location.pathname;
    if(add.indexOf('login.html')!=-1){
        return true;
    }
    return false;
}
function ajax(options) {
    options = options || {};
    options.type = (options.type || "GET").toUpperCase();
    options.dataType = options.dataType || "json";
    var params = formatParams(options.data);

    //创建 - 非IE6 - 第一步
    if (window.XMLHttpRequest) {
        var xhr = new XMLHttpRequest();
    } else { //IE6及其以下版本浏览器
        var xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }

    //接收 - 第三步
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var status = xhr.status;
            if (status >= 200 && status < 300) {
                options.success && options.success(xhr.responseText, xhr.responseXML);
            } else {
                options.fail && options.fail(status);
            }
        }
    }

    //连接 和 发送 - 第二步
    if (options.type == "GET") {
        xhr.open("GET", options.url + "?" + params, true);
        xhr.send(null);
    } else if (options.type == "POST") {
        xhr.open("POST", options.url, true);
        //设置表单提交时的内容类型
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(params);
    }
}
//格式化参数
function formatParams(data) {
    var arr = [];
    for (var name in data) {
        arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
    }
    arr.push(("v=" + Math.random()).replace(".",""));
    return arr.join("&");
}