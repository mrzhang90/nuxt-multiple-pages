/**
 * Created by Administrator on 2016/11/1.
 */
$(function(){
    //加载日历插件
    calendarLoad();
});
function changeEvent(startTime,callback) {
    startTime.click(function(ev){
        calendar($(this),callback);
        ev.stopPropagation();
        return false;
    })
    $(document).click(function(ev){//当点击文档其他地方，插件消失
        $('#calendar').hide(300);
        ev.stopPropagation();
    })
    $('#calendar').click(function(ev){
        ev.stopPropagation();
    })
    // startTime.blur(function(){//当时间输入框失去焦点后，
    //     var calendar=$('#calendar');
    //     calendar.click(function(ev){//如果点击的是日历插件，那么就不能隐藏日历插件，所以阻止document.click
    //         ev.stopPropagation();
    //     })
    //     $(document).click(function(){//当点击文档其他地方，插件消失
    //         calendar.hide(300);
    //         $(document).unbind('click');
    //     })
    // })
}
function calendarLoad(){
    $(document.body).append('<div id="calendar" style="width:264px;display: none;"><div class="container"><div class="arrow"><span class="close">close</span><span class="prev">prev</span><span class="next">next</span></div><div class="content-box clear"></div></div></div>');
}
//创建日历
function calendar(element,callback){//isHide用来判断要不要隐藏插件
    var pos_obj=element.offset();//left和top
    var width=element.width();
    var height=element.height();
    pos_obj.top+=height;
    pos_obj.width=width;
    var calendar=$('#calendar');
    var caleObj={'display':'block'};
    caleObj['top']=pos_obj.top+'px';
    caleObj['left']=pos_obj.left+'px';
    var prev=$('.prev',calendar);
    var next=$('.next',calendar);
    var close=$('.close',calendar);
    var now=0;
    var caledCount=2;//单日历1、双日历2、或者三日历3
    var clickCount=0,clickObj={"length":0};
    var isLoad=true;//作用：每次运行插件默认为true，同时判断用户之前选择过时间插件，那么就直接显示，不加载插件；当用户点击上下翻页时，为false,重新渲染日历
    var monthS=[];//存储当前两个月份,用来匹配用户第一次点击的月份，如果用户第一次点击后翻页了，那么就不要出现鼠标滑动多选的样式
    crearCalendar(now,caledCount);
    function crearCalendar(nows,caledCount){
        caleObj['width']=264+(202*(caledCount-1))+'px';
        calendar.css(caleObj);
        var content_box=$('.content-box');
        var startdate=element.attr('startdate');
        if(startdate && isLoad){
            now=1;
            return;
        }
        content_box.html('');
        prev.removeClass('prev-btn-disabled');
        for(var n=nows;n<nows+caledCount;n++){
            var inner=$('<div class="inner"></div>');//创建inner元素，用来添加日历表格

            var oDate=new Date();
            //设置时间--默认当前月份的第一天，当点击下一月的话，就是下一个月的第一天，点击上月同理
            oDate.setMonth(oDate.getMonth()+n);
            oDate.setDate(1);
            //number7是记录整个日历，每7天一次<tr></tr>
            var number7=m=oDate.getDay();//获取当前设置时间是周几，如果为0，就是周日
            if(m==0){
                number7=m=7;
            }

            var nYear=oDate.getFullYear();//获取当前年份
            var nMonth=oDate.getMonth()+1;//获取当前月份
            var h4Html=$('<h4></h4>');
            h4Html.html(nYear+'年'+nMonth+'月');
            inner.append(h4Html);//添加日历头部的年月

            var table=$('<table></table>');
            var thead=$('<thead><tr><th class="weekend">日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th class="weekend">六</th></tr></thead>');
            table.append(thead);//往表格里，添加thead

            var tbody=$('<tbody></tbody>')//创建日历表格的tbody，然后开始生成日历内容


            //上个月的空白
            var pDate=new Date();
            pDate.setMonth(pDate.getMonth());
            pDate.setDate(0);
            var dateCount=pDate.getDate();//上月多少天
            var surplusDay=dateCount-m;//上月到当前月空白的几天
            var tr=$('<tr></tr>');
            for(var i=0;i<m;i++){
                var td=$('<td class="disabled"></td>');
                var a=$('<a href="javascript:void(0);" target="_self"></a>');
                a.html(++surplusDay);
                td.append(a);
                tr.append(td);
            }

            //当前月份
            var nDate=new Date();
            var toYear=nDate.getFullYear();//获取今天是几年
            var toMonth=nDate.getMonth()+1;//获取今天是几月
            var toDay=nDate.getDate();//获取今天是几日
            //通过下两句，是为了获取n月多少天
            nDate.setMonth(nDate.getMonth()+n+1);//首先获取n月的下一个月
            nDate.setDate(0);//然后找到n月的最后一天，通过getDate获取到n月有多少天。
            var m=nDate.getDate();//获取n月多少天，通过上面的设置，这里就可以获取到了
            var nYear=nDate.getFullYear();
            var nMonth=nDate.getMonth()+1;
            if(n==0 && toYear==nYear && toMonth==nMonth){//日历中的月份 有当前月的话，那么就不能点击上一月按钮了
                prev.addClass('prev-btn-disabled');
            }
            for(var i=0;i<m;i++){
                if(number7%7==0){
                    tbody.append(tr);//判断每7天，往日历内添加一个tr
                    tr=$('<tr></tr>');
                }
                monthS.push(nMonth);
                if(n==0 && toYear==nYear && toMonth==nMonth && i<toDay-1){
                    var td=$('<td data-date="'+nYear+'-'+toDou(nMonth)+'-'+toDou(i+1)+'" class="disabled"></td>');
                }
                else{
                    var td=$('<td data-date="'+nYear+'-'+toDou(nMonth)+'-'+toDou(i+1)+'"></td>');
                    selectDate(td);
                }
                var a=$('<a href="javascript:void(0);" target="_self"></a>');
                if(n==0 && i==toDay-1){
                    a.addClass('today ');
                }
                a.html(i+1);
                tr.append(td);
                td.append(a);
                number7++;
            }
            tbody.append(tr);//把最后一个tr,添加到日历内

            //下一个月空白
            var countTd=42;//总共应该有35个td
            var nowTd=number7;//已经有了这么多td
            var surplusTd=countTd-nowTd;//还应该有几个td
            for(var i=0;i<surplusTd;i++){
                if(number7%7==0){
                    tbody.append(tr);//判断每7天，往日历内添加一个tr
                    tr=$('<tr></tr>');
                }
                var td=$('<td class="disabled"></td>');
                var a=$('<a href="javascript:void(0);" target="_self"></a>');
                a.html(i+1);
                tr.append(td);
                td.append(a);
                number7++;
            }
            tbody.append(tr);//把最后一个tr,添加到日历内

            table.append(tbody);//往表格里，添加tbody
            inner.append(table);//添加日历表格
            content_box.append(inner);
        }
//            now=nows+caledCount-1;这句在点击下月时，翻两个月
    }
    function selectDate(td){
        td.hover(function(){
            var len=clickObj.length;
            var oIndex=0;
            var nIndex=$(this).index('td');
            if(len==1){
                oIndex=clickObj[0];
                $('td.selected-date').removeClass("selected-date");
                var nM=clickObj['datadate0'].split('-')[1];//获取第一次点击的月份
                if(monthS[0]==nM || monthS[1]==nM){//当前加载的日历月份 == 第一次点击的月份
                    for(var i=oIndex;i<=nIndex;i++){
                        $('td').eq(i).addClass("selected-date");
                    }
                }
            }
        });
        td.click(function(ev){
            var index=$(this).index('td');
            if(clickCount>=2){
                clickCount=0;
                $('td.selected-date').removeClass("selected-date");
                clickObj={"length":0};
            }
            clickObj[clickCount]=index;
            clickObj['datadate'+clickCount]=$(this).attr('data-date');
            clickObj['length']=clickCount+1;
            $(this).addClass("selected-date");
            clickCount++;
            if(clickCount==2){
                calendar.hide(300);//插件隐藏，并且解绑点击事件
                // $(document).unbind('click');
                var text1=clickObj['datadate0'];
                var text2=clickObj['datadate1'];
                if(text1>text2){
                    text1=clickObj['datadate1'];
                    text2=clickObj['datadate0'];
                }
                if(element.is('input')){
                    element.val(text1+'至'+text2).removeClass('placeholder');
                }
                if(element.is('a')){
                    element.text(text1+'至'+text2);
                }
                element.attr({'startdate':text1,'enddate':text2});
                callback && callback(text1,text2);
            }
            ev.stopPropagation();
            return false;
        })
    }
    function toDou(n){
        return n<10?'0'+n:''+n;
    }
    close.click(function(){//当点击隐藏插件时，插件隐藏，并且解绑点击事件
        calendar.hide(300);
        // $(document).unbind('click');
    })
    prev.click(function(ev){
        monthS=[];
        isLoad=false;
        if($(this).attr('class').indexOf('prev-btn-disabled') !=-1){
            return false;
        }
        now-=caledCount;//如果是双日历，每次翻两个月；其他同理
        crearCalendar(now,caledCount);
        ev.stopPropagation();
    })
    next.click(function(ev){
        monthS=[];
        isLoad=false;
        now+=caledCount;//如果是双日历，每次翻两个月；其他同理
        crearCalendar(now,caledCount);
        ev.stopPropagation();
    })
}
