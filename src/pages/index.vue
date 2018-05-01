<template>
  <div>
      <section class="select_camp phoneWidth">
          <ul class="carousel">
              <li class="banner0" style="cursor:default;background-image:url('http://oss.camplink.cn/homeCarouse/jpg/06c267bacb5c4852b4cc78fc764c079c_20170911140555.jpg')"></li>
              <li class="banner1" style="cursor:default;background-image:url('http://oss.camplink.cn/homeCarouse/jpg/866fef6dde8a412a819937daf3c535c7_20170907174335.jpg')"></li>
                  </ul>
          <ul class="carousel_index">
              <li class="active"></li>
              <li></li>
          </ul>
          <div class="width_content">
              <p class="p1">选择我的营地</p>
              <div class="div_input"><input type="text" id="place" class="posElement1" placeholder="想去哪里" autocomplete="off"></div>
              <div class="div_input"><input type="text" id="wantDo" class="posElement2" placeholder="想做什么" autocomplete="off"></div>
              <div class="div_input">
                  <!-- <input type="text" class="startTime" placeholder="出发时间" autocomplete="off" id="J_DepDate"> -->
                  <!-- <input type="text" class="startTime" placeholder="出发时间" autocomplete="off" id="J_EndDate"> -->
                  <div class="dataDiv depDiv"><input placeholder="出发时间" class="startTime" id="J_DepDate" type="text" value="" /></div>
                  <div class="dataDiv endDiv" style="display:none;"><input placeholder="出发时间" class="startTime" id="J_EndDate" type="text" value="" /></div>
                  <div class="dataPos">至</div>
              </div>
              <a href="javascipt:void(0)" id="search"><i></i></a>
          </div>
      </section>
      <section class="hotNew_camp width_content">
        <div class="hot_title clear">
            <a href="/search.jsp" class="home_more">More</a>
            <div class="border_hot"></div>
            <div class="div_p_hot">
                <p>热门营地 HOT</p>
            </div>
            <div class="border_hot"></div>
        </div>
        <ul class="hotNew_list clear">
          <li>
              <a href="/info.jsp?campusId=20170819135330CAM660cd568">
              <div class="img_parent"><div class="img" style="background-image:url(http://oss.camplink.cn/camps/jpg/Aerial-shot-e1448613226737_20170819135424.jpg);"></div></div>
              <div class="info">
                  <span class="left" title="英国全真插班英语营">英国全真插班英语营</span>
                  <div class="right"><i>￥</i><label>6580</label><span>起</span></div>
              </div>
              </a>
          </li>
          <li>
              <a href="/info.jsp?campusId=20170828110642CAM9168c0b6">
              <div class="img" style="background-image:url(http://oss.camplink.cn/camps/jpg/4_20170828110736.jpg);"></div>
              <div class="info">
                  <span class="left" title="欧洲高端滑雪体验营">欧洲高端滑雪体验营</span>
                  <div class="right"><i>￥</i><label>11800</label><span>起</span></div>
              </div>
              </a>
          </li>
          <li>
              <a href="/info.jsp?campusId=20170829114202CAM87b64136">
              <div class="img" style="background-image:url(http://oss.camplink.cn/camps/jpg/bc03b1a5a1454df98bbceac2da51874d_20170831132722.jpg);"></div>
              <div class="info">
                  <span class="left" title="美国中小学插班寄宿营">美国中小学插班寄宿营</span>
                  <div class="right"><i>￥</i><label>29500</label><span>起</span></div>
              </div>
              </a>
          </li>
          <li>
              <a href="/info.jsp?campusId=20170821153308CAM73548f5a">
              <div class="img" style="background-image:url(http://oss.camplink.cn/camps/jpg/9-national-university-of-singapore-nus-singapore-singapore_20170821153749.jpg);"></div>
              <div class="info">
                  <span class="left" title="新家坡国立大学高端英语插班营">新家坡国立大学高端英语插班营</span>
                  <div class="right"><i>￥</i><label>12500</label><span>起</span></div>
              </div>
              </a>
          </li>
          <li>
              <a href="/info.jsp?campusId=20170901103234CAM47f063ef">
              <div class="img" style="background-image:url(http://oss.camplink.cn/camps/png/fd060b31b0fd4aec93925ccec61b3d0d_20170901113055.png);"></div>
              <div class="info">
                  <span class="left" title="美国加州篮球训练+比赛冬令营">美国加州篮球训练+比赛冬令营</span>
                  <div class="right"><i>￥</i><label>7035</label><span>起</span></div>
              </div>
              </a>
          </li>
          <li>
              <a href="/info.jsp?campusId=20170830094855CAM873eceb6">
              <div class="img" style="background-image:url(http://oss.camplink.cn/camps/jpg/b44963a704cb44f9b5c76f81653e462d_20170831161439.jpg);"></div>
              <div class="info">
                  <span class="left" title="中美机器人对抗大赛-加州赛区">中美机器人对抗大赛-加州赛区</span>
                  <div class="right"><i>￥</i><label>9045</label><span>起</span></div>
              </div>
              </a>
          </li>
          <li>
              <a href="/info.jsp?campusId=">
              <div class="img" style="background-image:url();"></div>
              <div class="info">
                  <span class="left" title=""></span>
                  <div class="right"><i>￥</i><label></label><span>起</span></div>
              </div>
              </a>
          </li>
        </ul>
      </section>
      <section class="about_camp width_content" onclick="window.open('/about.html')">
        <span>关于Camplink</span>
        </section>
        <section class="subjects_camp width_content">
        <div class="hot_title clear">
            <a href="/search.jsp" class="home_more">More</a>
            <div class="border_hot"></div>
            <div class="div_p_hot">
                <p>主题分类</p>
                <p class="p1">SUBJECTRS</p>
            </div>
            <div class="border_hot"></div>
        </div>
        <div class="subjects_div">
            <ul class="subject_list">
              <li v-for="item in data.categoryList">
                  <a href="/search.jsp?subjectCategoryId={item.categoryId}"><div style="background-image:url({item.categoryUrl})"></div><span>{{item.categoryName}}</span><i></i></a>
              </li>
            </ul>
            <a href="" class="subject_left j_leftLunbo"><i></i></a>
            <a href="" class="subject_right j_rightLunbo"><i></i></a>
        </div>
      </section>
      <ul class='posElement' id='posElement1' style='position:absolute;display:none;'></ul>
      <ul class='posElement' id='posElement2' style='position:absolute;display:none;'></ul>
  </div>
</template>
<script>
require('~/assets/css/index.css')
import * as util from '~/assets/js/public.js'
import indexController from "~/controllers/indexController";
export default {
  head () {
    return {
      title: "首页"
    }
  },
  async asyncData (context)  {
    var data=await indexController.index(context)

      // .then(function(data){
        // var data={data};
        console.log({data})
          return {data};
    //   context.store.commit('index/add',data)
    // })
  }
}
</script>