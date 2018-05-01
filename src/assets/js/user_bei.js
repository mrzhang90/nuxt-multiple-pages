/**
 * Created by Administrator on 2016/11/9.
 */
var phoneReg=/^1[3|4|5|7|8][0-9]\d{4,8}$/;
var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
var strReg=/[`~!@#$%^&*()_+<>?:"{},.\/;'[\]]/im;//验证特殊字符
var dateReg = /^\d{4}-(0[1-9]|1[012])(-\d{2})*$/;
$(function(){
    //弹出框
    var alertMessage=$('.alertMessage');
    var close=$('.close',alertMessage);
    close.click(function(){
        alertMessage.hide(300);
    })
    //个人首页的左侧导航列表
    userIndexList();
    function userIndexList(){
        var userList=$('#userList');
        var a_userList=$('.a_userList');
        var userUl=userList.find('ul');
        a_userList.click(function(){
            var This=$(this);
            var index=a_userList.index(this);
            var ulIndex=userUl.eq(index);
            var liList=$('li',ulIndex);
            var liLength=liList.length;
            var ulHeight=ulIndex.height()>0?0:(47*liLength);
            if(ulHeight==0){
                This.addClass('li_aActive');
            }else{
                This.removeClass('li_aActive');
            }
            ulIndex.animate({
                height:ulHeight},{
                easing: 'easeOutBounce',
                duration: 500,
                complete:function(){

                }
            });
            return false;
        })
    }
    //个人首页，点击编辑，显示文本框，并自动保存提交
    var default_edit=$('#default_edit');
    default_edit.click(function(){
        var this_value=$(this).html()=="编辑"?"保存":"编辑";
        if($(this).html()=="编辑"){
            var phone=$('#phone');
            var span=phone.find('span');
            span.hide();
            var pinput=phone.children('input');
            pinput.attr("value",span.html()).show();
            var pvalue=pinput.val();
            pinput.blur(function(){
                var value=$(this).val();
                var i=$(this).siblings('i');
                if(pvalue==value){
                    i.html('');
                }else if(value.length==11 && phoneReg.test(value)){
                    i.html('正在提交…');
                    //把value通过ajax给后端
                }else{
                    $(this).focus();
                    i.html('请输入正确的手机');
                }
            })

            var email=$('#email');
            var span=email.children('span');
            span.hide();
            var einput=email.children('input');
            einput.attr("value",span.html()).show();
            var evalue=einput.val();
            einput.blur(function(){
                var value=$(this).val();
                var i=$(this).siblings('i');
                if(evalue==value){
                    i.html('');
                }else if(value!="" && emailReg.test(value)){
                    i.html('正在提交…');
                    //把value通过ajax给后端
                }else{
                    $(this).focus();
                    i.html('请输入正确的邮箱');
                }
            })

            var nickname=$('#nickname');
            var span=nickname.children('span');
            span.hide();
            var ninput=nickname.children('input');
            ninput.attr("value",span.html()).show();
            var nvalue=ninput.val();
            ninput.blur(function(){
                var value=$(this).val();
                var i=$(this).siblings('i');
                if(nvalue==value){
                    i.html('');
                }else if(value.length>2 && !(strReg.test(value))){
                    i.html('正在提交…');
                    //把value通过ajax给后端
                }else{
                    $(this).focus();
                    i.html('请输入正确的昵称');
                }
            })

            var sex=$('#sex');
            var span=sex.children('span');
            span.hide();
            var num=span.html()=="女"?1:0;
            sex.children('label').css('display','inline-block').children('input:eq('+num+')').attr('checked','checked');
            sex.children('label').click(function(){
                var value=$(this).children('input:checked').val();
                if(value){
                    //把value通过ajax给后端
                    console.log(value);
                }
            })

            var birthday=$('#birthday');
            var span=birthday.children('span');
            span.hide();
            var binput=birthday.children('.calendar-input-wrap').css('display','inline-block').children("input");
            binput.attr("value",span.html());
            var bvalue=binput.val();
            binput.blur(function(){
                var value=$(this).val();
                var i=birthday.find('i');
                if(bvalue==value){
                    i.html('');
                }else if(value!="" && dateReg.test(value)){
                    i.html('正在提交…');
                    //把value通过ajax给后端
                }else{
                    $(this).focus();
                    i.html('请输入正确的生日');
                }
            })

            var loveCity=$('#loveCity');
            var span=loveCity.children('span');
            span.hide();
            var linput=loveCity.children('input');
            linput.attr("value",span.html()).show();
            var lvalue=linput.val();
            linput.blur(function(){
                var value=$(this).val();
                var i=$(this).siblings('i');
                if(lvalue==value){
                    i.html('');
                }else if(value!=""){
                    i.html('正在提交…');
                    //把value通过ajax给后端
                }else{
                    $(this).focus();
                    i.html('请输入内容');
                }
            })
        }
        else{
            //此处提交表单
            console.log("保存");
        }
        $(this).html(this_value);
    })
    //我的消息_单选多选
    var all_checked=$('.all_checked');
    var cont_border=$('.cont_border');
    var radio_label=cont_border.children('label');
    var input=radio_label.children('input');
    var input_all=all_checked.children('input');
    var length=input.length;
    var count=0,checkedCount=0;
    var del=$('#delete');
    var signRead=$('#signRead');
    all_checked.click(function(){
        var isChecked=!input.prop('checked');
        //如果全部选中，那么值为length，else就是0--在单选时，也会改变此值
        if(isChecked){
            checkedCount=length;
            del.css('display','inline-block');
            signRead.css('display','inline-block');
        }else{
            checkedCount=0;
            del.css('display','none');
            signRead.css('display','none');
        }
        input.prop('checked',isChecked);
        input_all.prop('checked',isChecked);
        return false;
    })
    radio_label.click(function(){
        var this_input=$(this).children('input');
        var isChecked=this_input.prop('checked');
        this_input.prop('checked',!isChecked);
        checkedCount=isChecked?(checkedCount-1):(checkedCount+1);//如果当前没有选中，那么+1，下面就会选中了
        if(checkedCount==length){
            check_bool=true;
            del.css('display','inline-block');
            signRead.css('display','inline-block');
        }else{
            check_bool=false;
            del.css('display','none');
            signRead.css('display','none');
        }
        input_all.prop('checked',check_bool);
        return false;
    })
    //购物车
    var car_ul=$('#car_ul');
    var li=$('li',car_ul);
    var all_car_check=$('.input_all_car');
    var li_car_check=$('input',car_ul);
    var money_car=$('.money_car'),moneyTotal=0;
    var number_car=$('.number_car'),numTotal=0;
    var checkedCount_car=0,len=li_car_check.length;
    //点击li下的input改变li样式
    li_car_check.click(function(){
        var money=Number($(this).siblings('.money_span_car').html());
        var numCar=Number($(this).siblings('.num_span_car').html());
        var isChecked=$(this).prop('checked');
        if(isChecked){
            checkedCount_car++;
            moneyTotal+=money;
            numTotal+=numCar;
            $(this).parents('li').addClass('active');
        }else{
            checkedCount_car--;
            moneyTotal-=money;
            numTotal-=numCar;
            $(this).parents('li').removeClass('active');
        }
        if(checkedCount_car==len){
            all_car_check.prop('checked',true);
        }else{
            all_car_check.prop('checked',false);
        }
        change_total();
    })
    //点击全选改变样式
    all_car_check.click(function(){
        var isChecked=$(this).prop('checked');
        checked_change_li(isChecked);
    });
    function checked_change_li(isChecked){
        if(isChecked){
            checkedCount_car=len;
            li.addClass('active');
            all_car_check.prop('checked',true);
            li_car_check.prop('checked',true);

            var num_span=$('.num_span_car');
            numTotal=0;
            num_span.each(function(){
                numTotal+=Number($(this).html());
            });
            var mon_span=$('.money_span_car');
            moneyTotal=0;
            mon_span.each(function(){
                moneyTotal+=Number($(this).html());
            });
            change_total();
        }else{
            checkedCount_car=0;
            li.removeClass('active');
            all_car_check.prop('checked',false);
            li_car_check.prop('checked',false);
            numTotal=0;
            moneyTotal=0;
            change_total()
        }
    }
    function change_total(){
        money_car.html('¥'+moneyTotal);
        number_car.html('¥'+numTotal);
    }
});
//校验图片格式及大小 Add Date 2012-6-14 LIUYI
function validateImage(obj) {
    var file = obj;
    var tmpFileValue = file.value;
    //校验图片格式
    if(/^.*?\.(gif|png|jpg|jpeg|bmp)$/.test(tmpFileValue.toLowerCase())){
        //校验图片大小,这段代码需调整浏览器安全级别(调到底级)和添加可信站点(将服务器站点添加到可信站点中)
        var maxSize = 1024 * 1024 * 2; //最大2MB
        if(file.value != ""){
            var size=obj.files[0].size;
            if(size<0 || size>maxSize){
                alert("当前文件大小" + (size/1024/1024).toFixed(2) + "MB, 超出最大限制"+(maxSize/1024/1024)+"MB");
                return false;
            }else{
                return true;
            }
        }else{
            alert("请选择上传的文件!");
            return false;
        }
    } else {
        alert("只能上传jpg、jpeg、png、bmp或gif格式的图片!");
        return false;
    }
}