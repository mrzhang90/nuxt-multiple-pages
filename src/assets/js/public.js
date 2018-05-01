/**
 * Created by Administrator on 2016/11/1.
 */
var phoneReg=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
var strReg=/[` ~!@#$%^&*()_+=<>?:"{},.\/;'[\]]/im;//验证特殊字符
var dateReg = /^\d{4}-(0[1-9]|1[012])(-\d{2})*$/;
var pwdReg=/^\d{4,6}$/;
var internationalPhoneReg=/^[0-9]{0,5}[-+() ]{0,1}[0-9]{0,5}[-+() ]{0,1}[0-9]{0,5}$/;//电话和手机验证
var codeReg=/^[a-zA-Z0-9]{0,4}$/;
var IDReg=/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name]) {
            if (!o[this.name].push) {
                o[this.name] = [ o[this.name] ];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};
$.extend({
    checkSpechars:function(str,isRequired){
        var value=str.val();
        return (!strReg.test(value)) && (value.length>1 || !isRequired);
    },
    checkID:function(str,isRequired){
        var value=str.val();
        return (IDReg.test(value));
    },
    checkPhone:function(str,isRequired){
        var value=str.val();
        return (value.length==11 && phoneReg.test(value));
    },
    checkInternationalPhone:function(str,isRequired){
        var value=str.val();
        return (value.length>=8 && internationalPhoneReg.test(value));
    },
    checkEmail:function (str,isRequired){
        var value=str.val();
        return (value.length>5 && emailReg.test(value));
    }
})
export var userAgent = navigator.userAgent.toLowerCase();
// Figure out what browser is being used 
jQuery.browser = {
    version: (userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [])[1],
    safari: /webkit/.test(userAgent),
    opera: /opera/.test(userAgent),
    msie: (/msie/.test(userAgent)||/rv:/.test(userAgent)) && !/opera/.test(userAgent),
    mozilla: /mozilla/.test(userAgent) && !/(compatible|webkit)/.test(userAgent)
};
$(function(){
    // var width='1300';
    // if($(document.body).width()<1180 && isPhone()){
        // $('body').css("width",$(document.body).width());
        // $(".phoneWidth").css("width",$(document.body).width()).css('overflow','hidden');
    // }
    nav_loginDown();
    hoverShowDown();
    hovChangeStyle();
    new search();
    floatRight();
    if($.browser.msie){
        jQuery('[placeholder]').focus(function() {
          var input = jQuery(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
          }
        }).blur(function() {
          var input = jQuery(this);
          if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
          }else{
            input.removeClass('placeholder');
          }
        }).blur();
    }
});
//验证手机
export function isPhone(){
    var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
    var browser = navigator.userAgent.toLowerCase(); 
    var isMobile = false; 
    for (var i=0; i<mobileAgent.length; i++){
        if(browser.indexOf(mobileAgent[i])!=-1){
            isMobile = true; 
            // alert(mobileAgent[i]);
            // location.href = '手机网址';
            break;
        }
    }
    return isMobile;
}
//内容横向导航,滚动定位
export function navScrollPosition(obj){
    var nav=obj.element;
    var css=obj.css || {'width':nav.width()};
    var YDheight=nav.height();
    var pos_obj=nav.offset();//left和top
    $(window).scroll(function(){
        var scrollTop=$(window).scrollTop();
        if(pos_obj.top <= scrollTop){//开始添加样式
            // nav.addClass('navActive').css(css);
            nav.addClass('navActive');
        }else{
            nav.removeClass('navActive');
        }
    })
}
//个人中心的导航下拉
export function nav_loginDown(){
    var str='<ul style="display:none;" class="login_down"><li><a href="/user.html">个人信息</a></li><li><a href="/user_payment.html">我的订单</a></li>';
    str+='<li><a href="/user_shoppingCar.html">我的购物车</a></li>';
    str+='</ul>';
    $('.personal_icon').append(str);
    is_login(function(data){
        if(data.result==100){
            $('.index_login').html('hi,<a href="/user.html">'+data.nickName+'</a>').show();
            $('.login_down').append('<li class="loginDown"><a href="javascript:void(0)" onclick="loginOut()">退出登录</a></li>');
        }else{
            $('.index_login').show();
        }
    })
}
//经过导航，改变样式
export function hovChangeStyle(){
    $('#user_active').addClass('active');
    var nav_div=$("div:not('.active')",$("nav"));
    nav_div.hover(function(){
        $(this).addClass('active');
    },function(){
        $(this).removeClass('active');
    })
}
//鼠标经过，下拉显示
export function hoverShowDown(){
    $('.personal_icon').hover(function(){
        $('.login_down').toggle();
    })
}
//退出登录事件
export function loginOut(){
    login_post('/loginOut.do','','GET',function(data){
        //data=JSON.parse(data);
        select_success(data,function(){
            window.location.href='/login.html';
        })
    },1)
}
//定位居中
export function posMiddle(element){
    element.css('margin-top',-element.height()/2);
}
//右侧浮动
export function floatRight(info){
    createFloatRight();
    EVscrollTop();
    function createFloatRight(){
        var tmp='<a href="javascript:void(0)" class="join_Car shoppingCar"><i></i><span>加入购物车</span></a><a href="javascript:void(0)" class="now_bug buyImmediately"><i></i><span>立即购买</span></a>';
        var element='',right_float=$('#right_float');
        if(right_float.length<=0){
            element=$('<div id="right_float" style="display:none;"><a href="javascript:void(0)" onclick="onlineQQ()" class="online_advice" target="_self"><i></i><span>在线咨询</span></a><a href="javascript:void(0)" class="back_top" onclick="backTop()" target="_self"><i></i><span>返回顶部</span></a></div>');
            $("body").append(element);
        }else{
            // right_float.show()
        }
        if(info){
            $('#right_float').prepend(tmp);
        }
        posMiddle($("#right_float"));
    }
    function EVscrollTop(){
        //当鼠标滚动，超过一屏，显示右侧浮动框
        var client_height=$(window).height();
        $(window).scroll(function(){
            var scrollTop=$(window).scrollTop();
            if(client_height/2 <= scrollTop){//开始添加样式
                $('#right_float').fadeIn(500);
            }else{
                $('#right_float').hide();
            }
        })
    }
}
//返回顶部
export function backTop(){
    $('body,html').animate({scrollTop:"0"},500);
    return false;
}
//在线咨询-需要先申请qq在线客服：http://shang.qq.com/v3/widget.html
export function onlineQQ(){
    var qq='781581897';
    var link = 'http://wpa.qq.com/msgrd?v=3&uin='+qq+'&site=qq&menu=yes';
    window.open(link,'_blank');
    return false;
}
//判断用户是否登录
export function is_login(callback){
    login_post('/uc/userinfo.do','','GET',function(data){
        //data=JSON.parse(data);
        callback(data);
    },1)
}
//加载目的地 主题分类 时间周期 等
export function load_local(id,callback) {
    var con1=[];
    login_post('/getCategroyList.do?categoryType='+id,'','GET',function(data){
        //data=JSON.parse(data);
        select_success(data,function(){
            if(data.categoryList.length>0){
                con1=data.categoryList;
            }
            callback(con1);
        })
    });
}
//按钮点击后，不可再点击
export function btn_disable(That,isDisabled){
    if(isDisabled){
        That.attr('disabled','disabled').addClass('disabled');
    }else{
        That.removeAttr('disabled').removeClass('disabled');
    }
}
//搜索
export function search(){
    var search=$('.search');
    var This=this;
    this.keydown=false;
    this.isHidden=true;//为true则input显示，为false则input隐藏
    this.input=search.children('input');
    this.btn=search.find('a');
    search.on('mouseover',function(){
        if(!This.isHidden){
            return false;
        }
        This.keydown=true;
        This.input.val('请输入您要搜索的关键词').css('color','#d7d7d7');
        return false;
    });
    search.on('mouseout',function(){
        if(!This.isHidden){
            return false;
        }
        This.keydown=false;
        This.input.val('');
        return false;
    });
    this.input.on('focus',function(){
        This.isHidden=false;
        if(This.input.val()=='请输入您要搜索的关键词')
            This.input.val('').css('color','#828282');
        search.addClass('active');
        return false;
    })
    this.input.on('click',function(){
        return false;
    })
    this.btn.on('click',function(){
        btn_search();
        return false;
    });
    search.on('click',function(){
        return false;
    });
    $(document).on('click',function(){
        This.isHidden=true;
        This.input.val('');
        search.removeClass('active');
    });
    $(document).keydown(function(ev){
        if(ev.keyCode==13 && This.keydown){
            btn_search();
            return false;
        }
    })
    function btn_search(){
        var val=This.input.prop('value');
        if(val=='请输入您要搜索的关键词' || !val){
            // alert('请输入正确的搜索内容');
            // return false;
        }else{
            var obj={
                'searchContent':val
            };
            auto_submit('/search.jsp',$.param(obj),'get');
        }
    }
}
// auto_submit('aa.html','{}','get','_blank')
export function auto_submit(address,obj,method,target){
    method=method || 'post';
    target=target || '_self';
    address=(!obj)?address:address+'?'+obj;
    if(method.toLowerCase()=='get'){
        if(target=='_self'){
            window.location.href=address;
        }else{
            window.open(address);
        }
    }else{
        var frm=$('<form id="frmSubmit" action='+address+' method='+method+' target='+target+'></form>');
        // for(var key in obj){
        //     frm.append('<input type="text" name="'+key+'" value="'+obj[key]+'">');
        // }
        $('body').append(frm);
        $('#frmSubmit').submit();
    }
}
//创建一个div,并定位
export function index_select(element,con){
    var pos_obj=element.offset();//left和top
    var width=element.width();
    var height=element.height();
    pos_obj.top+=height;
    pos_obj.width=width;

    var li='';
    if(con.length>0){
        for(var i=0,len=con.length;i<len;i++){
            if(!con[i]['categoryId']){
                li+='<li class="disabled" data-value="'+con[i]['categoryId']+'">'+con[i]['categoryName']+'</li>';
            }else{
                li+='<li data-value="'+con[i]['categoryId']+'">'+con[i]['categoryName']+'</li>';
            }
        }
    }else{
        li='<li>正在加载&nbsp;&nbsp;&nbsp;&nbsp;<img src="../img/load.gif" width="25"/> </li>';
    }
    
    var cName=element.attr('class').split(' ')[0];
    $("#"+cName).css({
        top:pos_obj.top,
        left:pos_obj.left,
        width:pos_obj.width
    }).html(li).fadeIn(300);
    // if(!document.getElementById(cName)){
    //     var nDiv=$("<ul class='posElement' id='"+cName+"' style='position:absolute;top:"+pos_obj.top+"px;left:"+pos_obj.left+"px;width:"+pos_obj.width+"px'>"+li+"</ul>");
    //     $(document.body).append(nDiv);
    // }else{
    //     $("#"+cName).css({
    //         top:pos_obj.top,
    //         left:pos_obj.left,
    //         width:pos_obj.width
    //     }).html(li).fadeIn(300);
    // }
}
export function index_blur(element){
    var cName=element.attr('class').split(' ')[0];
    var posElement=$("#"+cName);
    posElement.fadeOut(300);
}
$('#posElement1').on('click','li',function(){
    if($(this).attr('data-value')){
        $('.'+$(this).parent().attr('id')).val($(this).html()).attr('data-value',$(this).attr('data-value')).removeClass('placeholder');
    }
})
$('#posElement2').on('click','li',function(){
    if($(this).attr('data-value')){
        $('.'+$(this).parent().attr('id')).val($(this).html()).attr('data-value',$(this).attr('data-value')).removeClass('placeholder');
    }
})
//背景层显示隐藏
export function bg_showORhide(){
    //body背景色变透明黑
    if(!document.getElementById('divBG')){
        $('body').append('<div id="divBG"></div>')
        // var divBG=document.createElement("div");
        // divBG.id="divBG";
        // divBG.style.position="fixed";
        // divBG.style.transition="1s";
        // divBG.style.zIndex="999";
        // divBG.style.top="0";
        // divBG.style.left="0";
        // divBG.style.width='100%';
        // divBG.style.height='100%';
        // divBG.style.background='rgba(0,0,0,.5)';
        // document.body.appendChild(divBG);
    }else{
        $('#divBG').css('display','block');
    }
}
//提交表单
export function login_post(address,data,method,successFn,errorFn,contentType){
    $.ajax({
        url:address,
        type:method || 'post',
        data:data,
        dataType:"json",
        contentType:contentType || 'application/x-www-form-urlencoded; charset=UTF-8',
        success:successFn,
        error:errorFn ||function(XMLHttpRequest, textStatus, errorThrown){
            console.log(arguments);
            return false;
        }
    })
}
//验证对象是否为空
export function isEmptyObject(obj){
    for(var item in obj){
        return true;
    }
    return false;
}
export function success(data,callback,errback){
    if(data.result==100){
        callback();
    }else{
        alert(data.resultDesc);
        errback && errback();
        return false;
    }
}
export function select_success(data,callback,errback){
    if(data.result==100){
        callback();
    }else{
        console.log(data);
        errback && errback();
        return false;
    }
}
//提交图片
export function file_post(address,data,method,successFn,errorFn){
    $.ajax({
        url:address,
        type:method || 'post',
        data:data,
        contentType: false,    //不可缺
        processData: false,    //不可缺
        success:successFn,
        error:errorFn ||function(){
            alert('系统获取异常');
        }
    })
}
//根据传入的数值，获取男或女
export function getSex(sex){
    return sex==0?'男':'女';
}
/**
 * 图片地址处理，用用逗号把图片地址切割成数组，并返回
 * @returns {pic} 给定数组
 */
export function handle_pic(pic){
    if(pic && pic.indexOf(',')!=-1){
        picArr=pic.split(',');
        return picArr;
    }
    return [pic];
}
/**
 * 获取给定日期的周一到周日某一天的时间戳
 * @returns {number} 1-7的数字，默认为1
 * @param {dateTime} 给定日期，默认当天
 */
export function getWeek(num,dateTime){
    num=num || 1;
    var now = dateTime?new Date(dateTime):new Date();
    var nowTime = now.getTime() ;
    var day = now.getDay()==0?7:now.getDay();
    var oneDayLong = 24*60*60*1000 ;
    var MondayTime = nowTime - (day-num)*oneDayLong  ;
    return formatDate(MondayTime);
}
/**
 * 获取给定日期的当月或者上个月或上上月的第一天的时间戳
 * @returns {number} 1-7的数字，默认为1
 * @param {dateTime} 给定日期，默认当天
 */
export function getMonth(num,dateTime){
    num=num || 1;
    var now = dateTime?new Date(dateTime):new Date();
    var nowTime = now.getTime() ;
    var year = now.getFullYear();
    var month = now.getMonth()+1-num+1;
    if(month<=0){
        month+=12;
        year-=1;
    }
    return formatDate(year+'-'+month+'-'+1);
}
/**
 * 时间数组转换成正常时间格式
 * @param arrTime
 * @returns {string}
 */
export function formatDate(time,style){
    var format='',str='';
    var dateTime=new Date(time);
    dateTime = dateTime.getFullYear() > 0 ? dateTime : new Date(Date.parse(time.replace(/-/g, "/")));
    switch(style){
        case 0:
            format='-';
            str=dateTime.getFullYear()+format+toDb(dateTime.getMonth()+1)+format+toDb(dateTime.getDate());
            break;
        case 1:
            format=['年','月','日','时','分','秒'];
            str=dateTime.getFullYear()+format[0]+toDb(dateTime.getMonth()+1)+format[1]+toDb(dateTime.getDate())+format[2];
            break;
        case 2:
            str=toDb(dateTime.getDate())+'/'+toDb(dateTime.getMonth()+1)+'/'+dateTime.getFullYear();
            break;
        case 3:
            str=dateTime.getFullYear()+'-'+toDb(dateTime.getMonth()+1)+'-'+toDb(dateTime.getDate())+' '+dateTime.getHours()+':'+dateTime.getMinutes()+':'+dateTime.getSeconds();
            break;
        default:
            str=dateTime.getFullYear()+''+toDb(dateTime.getMonth()+1)+''+toDb(dateTime.getDate());
            break;
    }
    return str;
}
// 根据持续天数设置时间范围
export function getDurationSetDate(detailStartTime,duration){
    var now = detailStartTime?new Date(detailStartTime):new Date();
    now = now.getFullYear() > 0 ? now : new Date(Date.parse(detailStartTime.replace(/-/g, "/")));
    var nowTime = now.getTime() ;
    duration = duration*24*60*60*1000;
    return formatDate(nowTime+duration,0);
}
/**
 * 给日期的个位补0
 * @param date
 * @returns 如果10以内,补一个0,10及以上的数字,改成字符串格式输出
 */
export function toDb(date){
    return date<10?'0'+date:''+date;
}
//对象转换字符串
export function ObjTrans(obj){
    var str='',i=0;
    for(var item in obj){
        if(i==0){
            str+=item+'='+obj[item];
        }else{
            str+='&'+item+'='+obj[item];
        }
        i++;
    }
    return str;
}
/**
 * 分页
 * @param element 元素
 * @returns {object}
 */
export function pageSet(data){
    var pageNo=data.pageNo;
    var totalPage=data.totalPage;
    if(totalPage==0 && data.totalCount==0){
        return [];
    }
    var arr=[];
    if(pageNo==1){
        arr.push('<span class="firstPage current"><</span>');
    }else{
        arr.push('<a class="firstPage" href="#'+(pageNo-1)+'"><</a>');
    }
    for(var i=1;i<=totalPage;i++){
        if(i==pageNo){
            arr.push('<span class="current">'+i+'</span>');
        }else{
            arr.push('<a href="#'+i+'">'+i+'</a>');
        }
    }

    if(pageNo==totalPage){
        arr.push('<span class="endPage current">></span>');
    }else{
        arr.push('<a class="endPage" href="#'+(pageNo+1)+'">></a>');
    }
    return arr;
}
/*
* 分页点击触发，改变数据
* */
export function change_page(element,data,callback){
    $(element).on('click','a',function(){
        // if($(this).is('.firstPage')){
        //     data['pageNo']=1;
        // }else if($(this).is('.endPage')){
        //     data['pageNo']=data['totalPage'];
        // }else{
            data['pageNo']=Number($(this).attr('href').split('#')[1]);
        // }
        callback && callback(data);
        return false;
    })
}
/*字符串过滤HTML*/
export function setContent(str) {
    str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
    str.value = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
    //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
    return str;
}
/** 
 * js截取字符串，中英文都能用 
 * @param str：需要截取的字符串 
 * @param len: 需要截取的长度 
 */
export function cutstr(str, len) {
    var str_length = 0;
    var str_len = 0;
    str_cut = new String();
    str_len = str.length;
    for (var i = 0; i < str_len; i++) {
        a = str.charAt(i);
        str_length++;
        if (escape(a).length > 4) {
            //中文字符的长度经编码之后大于4  
            str_length++;
        }
        str_cut = str_cut.concat(a);
        if (str_length >= len) {
            str_cut = str_cut.concat("...");
            return str_cut;
        }
    }
    //如果给定字符串小于指定长度，则返回源字符串；  
    if (str_length < len) {
        return str;
    }
}
//获取文本宽度
export function textWidth(text){
    var sensor = $('<div class="selectbox">'+ text +'</div>').css({display: 'none'});
    $('body').append(sensor);
    var width = sensor.width();
    sensor.remove();
    return width;
};
// export default navScrollPosition;

