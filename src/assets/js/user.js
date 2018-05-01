/**
 * Created by Administrator on 2016/11/9.
 */
$(function(){
    //个人首页的左侧导航列表
    userIndexList();
    $('.j_integral').click(function(){$('.alertMessage').show()})
    var alertMessage=$('.alertMessage');
    // data.ifPop && alertMessage.show();
    var close=$('.close',alertMessage);
    close.click(function(){
        alertMessage.hide(300);
    })
});
//个人首页的左侧导航列表
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
        if($.browser.msie && parseInt($.browser.version)<8){
            $('.li_aActive').removeClass('li_aActive')
            This.addClass('li_aActive');
            var ul=This.parent().siblings('li').find('ul');
            ul.slideUp(300);
            ulIndex.slideDown(300);
            return;
        }
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
//个人首页-渲染弹出框和页面上展示的用户信息
function render_alertANDuserinfo(data){
    renderUserInfo(data);
    $('#phone').children('span').text(data.mobile);
    $('#email').children('span').text(data.email);
    $('#nickname').children('span').text(data.nickName);
    $('#sex').children('span').text(data.gender==0?'男':'女');
    if(data.birthTime){
        $('#birthday').children('span').text(formatDate(data.birthTime,0));        
    }
    $('#loveCity').children('span').text(data.loveCity);
}
//登录
function logo_user(callback){
    var phone_input=$('.phone_input');
    var pwd_input=$('.pwd_input');
    var pwd_message=pwd_input.siblings('label');
    var code_input=$('.code_input');
    var code_message=code_input.siblings('label');
    $('.imgCode').click(function(){
        $("#imgCode").attr('src',"/verifyCode.do?"+(Math.random()*100));
    })
    $('.aCode').click(function(){
        var cur_time=120;
        var phone_value=phone_input.val();
        if(!veriPhone()){
            return false;
        }
        var data={
            phone:phone_value
        };
        var This=$(this);
        $(this).attr('disabled','disabled').addClass('disable');
        var timer=setInterval(function(){
            cur_time--;
            if(cur_time>0){
                This.val(cur_time+'秒后重新获取');
            }else{
                clearInterval(timer);
                This.removeAttr('disabled').val('获取验证码').removeClass('disable');
            }
        },1000);
        login_post('mobileCode.do',data,'',successFn);
        function successFn(json_data){
            var data=JSON.parse(json_data);
            if(data.result==100){
                pwd_message.show().html('验证码已成功发送');
            }else{
                pwd_message.show().html(data.resultDesc);
                clearInterval(timer);
                This.removeAttr('disabled').val('获取验证码').removeClass('disable');
            }
        }
    });
    var i=0;
    $(document).on('keydown',function(ev){
        if(ev.keyCode==9){
            i=i%3;
            ++i;
            $('[tabindex='+i+']').focus();
            return false;
        }
        if(ev.keyCode==13){
            if($('.search').is('.active')){//搜索打开这里不执行
                return false;
            }
            subLogin();
            return false;
        }
    })

    $('#submit_login').click(function(){
        subLogin();
    })
    function subLogin(){
        if(!veriPhone()){
            return false;
        }
        var pwd_value=pwd_input.val();
        if(pwd_value.length>3 && pwd_value.length<7 && pwdReg.test(pwd_value)){//验证没有问题
            pwd_message.hide().html('');
        }else{
            pwd_input.focus();
            pwd_message.show().html('请输入正确的动态密码');
            return false;
        }
        var code_value=code_input.val();
        if(code_value.length==4 && codeReg.test(code_value)){//验证没有问题
            code_message.hide().html('');
        }else{
            code_input.focus();
            code_message.show().html('请输入正确的验证码');
            return false;
        }
        var This=$('#submit_login');
        This.attr('disabled','disabled').addClass('disable');
        var phone_value=phone_input.val();
        var data={
            'mobile':phone_value,
            'phoneCode':pwd_value,
            'imgCode':code_value,
            'autoLog':$('.autoLog').is(':checked')
        };
        login_post('login.do',data,'',successFn);
        function successFn(json_data){
            var data=JSON.parse(json_data);
            // console.log(data)
            if(data.result==100){
                callback && callback();
            }else{
                This.removeAttr('disabled','disabled').removeClass('disable');
                alert(data.resultDesc);
            }
        }
    }
    function veriPhone(){
        var phone_value=phone_input.val();
        var phone_message=phone_input.siblings('label');
        if(phone_value.length==11 && phoneReg.test(phone_value)){//验证没有问题
            phone_message.hide().html('');
        }else{
            phone_input.focus();
            phone_message.show().html('请输入正确的手机');
            return false;
        }
        return true;
    }
}
//加载用户基本信息
function getUserData(callback){
    login_post('/uc/userinfo.do','','',function(data){
        data=JSON.parse(data);
        user_success(data,function(){
            callback && callback(data)
        });
    });
}
//渲染用户基本信息
function renderUserInfo(data){
    $('.nicknNme_lbl').text(data.nickName);
    $('.integral_lbl').text(data.credit);
    if(Number(data.unReads)>0){
        $('.message').show().children('span').text(data.unReads);
    }
    if(data.photoUrl){
        if($.browser.msie && parseInt($.browser.version)<9){
            $('#photo_img').addClass('imgIE');
            $('#photo_img1').attr('src',data.photoUrl).show();
        }else{
            imgCenter($('#photo_img'),data.photoUrl)
        }
    }
}
//首页基础信息编辑
function edit_userInfo(){
    var default_edit=$('#default_edit');
    var nickname=$('#nickname');
    var nspan=nickname.children('span');
    var ninput=nickname.children('input');

    var birthday=$('#birthday');
    var bspan=birthday.children('span');
    var binput=birthday.find("input");

    var loveCity=$('#loveCity');
    var lspan=loveCity.children('span');
    var linput=loveCity.children('input');

    var sex=$('#sex');
    var sspan=sex.children('span');
    var this_value='';
    default_edit.click(function(){
        if($(this).html()=="编辑"){
            this_value="保存";
            nspan.hide();
            ninput.attr("value",nspan.text()).show();
            bspan.hide();
            if($.browser.msie && parseInt($.browser.version)<8){
                birthday.children('.calendar-input-wrap').css({'display':'inline'}).children("input").attr("value",bspan.text());
            }else{
                birthday.children('.calendar-input-wrap').css({'display':'inline-block'}).children("input").attr("value",bspan.text());
            }
            lspan.hide();
            linput.attr("value",lspan.text()).show();
            sspan.hide();
            var num=sspan.text()=="女"?1:0;
            sex.children('label').css('display','inline-block').children('input:eq('+num+')').attr('checked','checked');
        }
        else{
            if(check_nickname(ninput) && check_birthday(binput,birthday) && check_loveCity(linput)){
                var nvalue=ninput.val();
                var bvalue=binput.val();
                var lvalue=linput.val();
                var svalue=sex.find('input:checked').val();
                var data={
                    'birthTime':bvalue,
                    'gender':svalue,
                    'nickName':nvalue,
                    'loveCity':lvalue
                }
                login_post('/uc/updateUserInfo.do',data,'',function (data) {
                    user_success(JSON.parse(data),function(){
                        nspan.text(nvalue).show();
                        ninput.hide();
                        bspan.text(bvalue).show();
                        birthday.children('.calendar-input-wrap').css('display','none');
                        lspan.text(lvalue).show();
                        linput.hide();
                        sspan.text(svalue==0?'男':'女').show();
                        sex.children('label').css('display','none');
                    })
                });
                this_value="编辑";
            }
        }
        $(this).html(this_value);
    })
    ninput.blur(function(){
        check_nickname($(this));
    })
    binput.blur(function(){
        check_birthday($(this),birthday);
    })
    linput.blur(function(){
        check_loveCity($(this))
    })
}
//首页头像修改
function edit_photo(url,successFn,errorFn){
    var photoDiv=$('.photoDiv');
    var uploadFile=$('#uploadFile');
    var btn_upload=$('#btn_upload');
    $('.j_edit_photo').click(function(){
        var That=$(this);
        if(That.text()=="收起"){
            $('.aeidt').text("编辑");
            // photoDiv.fadeOut(300);
            photoDiv.hide();
        }else{
            That.text("收起");
            // photoDiv.fadeIn(300);
            photoDiv.show();
        }
        return false;
    });
    if(!Boolean(window.FormData)||($.browser.msie && parseInt($.browser.version)<10)){
        $('#spanButtonPlaceholder').show();
        btn_upload.hide();
        btn_upload.click(function(){
            swfu.startUpload();
        })
    }else{
        btn_upload.click(function(){
            uploadFile.click();
        })
        uploadFile.on('change',function(){
            uploadImage($(this)[0])
        })
        function uploadImage(obj) {
            if(validateImage(obj)) {
                var data = new FormData();
                data.append('uploadFile', obj.files[0]);
                file_post(url,data,'',function(data){
                    data=JSON.parse(data);
                    data=JSON.parse(data);
                    imgUrl=data.url;
                    successFn(data);
                });
            }
        }
    }
    $('.j_save_photo').click(function(){
        if(!imgUrl){
            alert('请先上传头像')
            return false;
        }
        save_photo(imgUrl,function(){
            if($.browser.msie && parseInt($.browser.version)<9){
                $('#photo_img1').attr('src',imgUrl);
            }else{
                imgCenter($('#photo_img'),imgUrl)
            }
            window.location.reload();
        })
    })
    function save_photo(url,callback){
        login_post('/uc/updatePhoto.do','userPhotoUrl='+url,'',function(data){
            data=JSON.parse(data);
            success(data,function(){
                callback && callback();
            })
        })
    }
}
//预览头像
function see_photo(data){
    var bigPhoto=$('#bigPhoto');
    changeEl(bigPhoto,data.url);
    var photo_108=$('#photo_108');
    changeEl(photo_108,data.url);
    var photo_100=$('#photo_100');
    changeEl(photo_100,data.url);
    var photo_50=$('#photo_50');
    changeEl(photo_50,data.url);

    function changeEl(element,src){
        var bi=$('i',element).hide();
        $('img',element).attr('src',src).css('display','inline-block');
    }
}
//获取订单列表
function get_orderList(public_obj,callback){
    login_post('/uc/userorder.do',public_obj,'',function(data){
        data=JSON.parse(data);
        user_success(data,function(){
            callback(data);
        })
    });
}
function user_success(data,callback){
    if(data.result==100){
        callback();
    }else if(data.result==-2){
        alert(data.resultDesc);
        window.location.href='/login.html';
    }else{
        alert(data.resultDesc);
    }
}
function check_nickname(This){
    var value=This.val();
    var message=This.siblings('i');
    if(value.length>1 && !(strReg.test(value))){
        message.html('');
    }else{
        // This.focus();
        message.html('请输入正确的昵称');
        return false;
    }
    return true;
}
function check_birthday(This,birthday){
    var value=This.val();
    var i=birthday.find('i');
    if(value!="" && dateReg.test(value)){
        i.html('');
    }else{
        // This.focus();
        i.html('请输入正确的生日');
        return false;
    }
    return true;
}
function check_loveCity(This){
    var value=This.val();
    var i=This.siblings('i');
    if(value!=""){
        i.html('');
    }else{
        // This.focus();
        i.html('请输入内容');
        return false;
    }
    return true;
}
function car(){
    var car_ul=$('#car_ul');
    var li=$('li',car_ul);
    var all_car_check=$('.input_all_car');
    var li_car_check=$('input',car_ul);
    var money_car=$('.money_car'),moneyTotal=0;
    var number_car=$('.number_car'),numTotal=0;
    var checkedCount_car=0,len=li_car_check.length;
    //点击li下的input改变li样式
    car_ul.on('click','input',function(){
        var money=Number($(this).parent().siblings('.money_span_car').html());
        var numCar=Number($(this).parent().siblings('.num_span_car').html());
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
        isAll()
    })
    //点击全选改变样式
    all_car_check.click(function(){
        var isChecked=$(this).prop('checked');
        checked_change_li(isChecked);
    });
    $('.a_del').click(function(){
        if(window.confirm('您确定要删除吗？')){
            var check=$('#car_ul input:checked');
            if(check.length>0){
                // var data=new FormData();
                var data=[];
                check.each(function(){
                    data.push({
                        'campusId':$(this).attr('data-campusId'),
                        'detailId':$(this).attr('data-detailId')
                    })
                })
                login_post('/deleteCartItem.do',JSON.stringify(data),'',function(data){
                    user_success(JSON.parse(data),function(){
                        check.each(function(){
                            var childCheck=$(this);
                            del_change($(this),childCheck)
                        })
                    })
                })
            }
            return false;
        }
    })
    $('.child_del').click(function(){
        if(window.confirm('您确定要删除吗？')){
            var This=$(this);
            var childCheck=$(this).parent().find('input[name="campusId"]');
            var data={
                'campusId':childCheck.attr('data-campusId'),
                'detailId':childCheck.attr('data-detailId')
            };
            login_post('/deleteCartItem.do',data,'',function(data){
                user_success(JSON.parse(data),function(){
                    del_change(This,childCheck);
                })
            })
        }
    })
    //结算
    $('.checkout').click(function(){
        var check=$('#car_ul input:checked');
        if(check.length>0){
            var arr=[];
            arr.push(moneyTotal);
            check.each(function(){
                var parent=$(this).parent();
                var title=parent.siblings('.yingdi_title');
                arr.push([$(this).attr('data-campusid'),$(this).attr('data-detailid'),title.children('img').attr('src'),title.children('span').text(),Number(parent.siblings('.span4').text()),Number(parent.siblings('.num_span_car').text()),Number(parent.siblings('.money_span_car').text())].join('$$'));
            });
            auto_submit('/user_checkout.jsp','orderList='+arr,'post');
        }
        return false;
    })
    //删除购物车的列表后，改变元素
    function del_change(That,childCheck){
        var money=Number(That.siblings('.money_span_car').html());
        var numCar=Number(That.siblings('.num_span_car').html());
        if(childCheck.prop('checked')){
            checkedCount_car--;
            moneyTotal-=money;
            numTotal-=numCar;
            That.parents('li').removeClass('active');
        }
        isAll();
        That.parent('li').remove();
        if($('.child_del').parent('li').length==0){
            $('.cont_right_car').html('<ul><li class="noMessage_border">您的购物车还是空的，赶紧行动吧！</li></ul>')
        }
    }
    function isAll(){
        if(checkedCount_car==len){
            all_car_check.prop('checked',true);
        }else{
            all_car_check.prop('checked',false);
        }
        change_total();
    }
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
        number_car.html(numTotal);
    }
}
//校验图片格式及大小 Add Date 2012-6-14 LIUYI
function validateImage(obj) {
    var file = obj;
    var tmpFileValue = file.value;
    //校验图片格式
    if(/^.*?\.(gif|png|jpg|jpeg|bmp)$/.test(tmpFileValue.toLowerCase())){
        //校验图片大小,这段代码需调整浏览器安全级别(调到底级)和添加可信站点(将服务器站点添加到可信站点中)
        var maxSize = 1024 * 1024 * 2; //最大2MB
        if(file.value != "" ){
            var size=obj.files[0].size;
            if(size<0 || size>maxSize){
                alertMesageAndHide("超出最大限制",4);
                return false;
            }else{
                return true;
            }
        }else{
            alertMesageAndHide("请选择文件!",4);
            return false;
        }
    } else {
        alertMesageAndHide("图片格式有误!",4);
        return false;
    }
}
//图片居中
function imgCenter(element,src){
    var img=new Image();
    img.src=src;
    img.onload=function(){
        var width=$(this)[0].width;
        var height=$(this)[0].height;
        var obj={'background-image':'url("'+src+'")'};
        if(width>height){
            obj['background-size']="auto 100%";
        }else{
            obj['background-size']='100% auto';
        }
        element.css(obj);
    }
}