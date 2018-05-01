<template>
  <div>
      <!-- <input type="button" value="dd" @click="view"> -->
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
                <a href="/info.jsp?campusId=data.left.campsId]]">
                <div class="img_parent"><div class="img" style="background-image:url([[data.left.campsImages]]);"></div></div>
                <div class="info">
                    <span class="left" title="{{data.left.campsName}}">[[data.left.campsName]]</span>
                    <div class="right"><i>￥</i><label>[[data.left.detailPrice]]</label><span>起</span></div>
                </div>
                </a>
            </li>
            <li>
                <a href="/info.jsp?campusId=[[data.right1.campsId]]">
                <div class="img" style="background-image:url([[data.right1.campsImages]]);"></div>
                <div class="info">
                    <span class="left" title="[[data.right1.campsName]]">[[data.right1.campsName]]</span>
                    <div class="right"><i>￥</i><label>[[data.right1.detailPrice]]</label><span>起</span></div>
                </div>
                </a>
            </li>
            <li>
                <a href="/info.jsp?campusId=[[data.right2.campsId]]">
                <div class="img" style="background-image:url([[data.right2.campsImages]]);"></div>
                <div class="info">
                    <span class="left" title="[[data.right2.campsName]]">[[data.right2.campsName]]</span>
                    <div class="right"><i>￥</i><label>[[data.right2.detailPrice]]</label><span>起</span></div>
                </div>
                </a>
            </li>
            <li>
                <a href="/info.jsp?campusId=[[data.right3.campsId]]">
                <div class="img" style="background-image:url([[data.right3.campsImages]]);"></div>
                <div class="info">
                    <span class="left" title="[[data.right3.campsName]]">[[data.right3.campsName]]</span>
                    <div class="right"><i>￥</i><label>[[data.right3.detailPrice]]</label><span>起</span></div>
                </div>
                </a>
            </li>
            <li>
                <a href="/info.jsp?campusId=[[data.right4.campsId]]">
                <div class="img" style="background-image:url([[data.right4.campsImages]]);"></div>
                <div class="info">
                    <span class="left" title="[[data.right4.campsName]]">[[data.right4.campsName]]</span>
                    <div class="right"><i>￥</i><label>[[data.right4.detailPrice]]</label><span>起</span></div>
                </div>
                </a>
            </li>
            <li>
                <a href="/info.jsp?campusId=[[data.right5.campsId]]">
                <div class="img" style="background-image:url([[data.right5.campsImages]]);"></div>
                <div class="info">
                    <span class="left" title="[[data.right5.campsName]]">[[data.right5.campsName]]</span>
                    <div class="right"><i>￥</i><label>[[data.right5.detailPrice]]</label><span>起</span></div>
                </div>
                </a>
            </li>
            <li>
                <a href="/info.jsp?campusId=[[data.right6.campsId]]">
                <div class="img" style="background-image:url([[data.right6.campsImages]]);"></div>
                <div class="info">
                    <span class="left" title="[[data.right6.campsName]]">[[data.right6.campsName]]</span>
                    <div class="right"><i>￥</i><label>[[data.right6.detailPrice]]</label><span>起</span></div>
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
                {% for item in data.categoryList %}
                    <li>
                        <a href="/search.jsp?subjectCategoryId=[[item.categoryId]]"><div style="background-image:url([[item.categoryUrl]])"></div><span>[[item.categoryName]]</span><i></i></a>
                    </li>
                {% endfor %}
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
import indexController from "~/controllers/indexController";
export default {
//   computed:{
//     data(){
//       return this.$store.state.content;
//     }
//   },
  methods:{
    // view(){
      // var content=this.$store.state.content;
    //   this.$store.commit('index/add',122)
    // }
  },
  async fetch ({ store, params })  {
    var data=await indexController.index(context)

      // .then(function(data){
        // var data={data};
        console.log({data})
          return {'data':data};
    //   context.store.commit('index/add',data)
    // })
  }
}
</script>