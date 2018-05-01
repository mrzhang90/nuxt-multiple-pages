<template>
    <!-- <div> -->
        <!-- <router-link to="/">index1</router-link>
        <router-link to="/about">about2</router-link>
        <router-link to="/todos">todos</router-link> -->
    <!-- </div> -->
    <section class="header phoneWidth">
        <section class="head1 clear">
            <div class="left">
                <!-- <a href="/" target="_self"> </a> -->
                <router-link to="/"></router-link>
            </div>
            <div class="right">
                <div class="search">
                    <input type="text" value=""><div class="inco"><a href="search.html"></a></div>
                </div>
                <div style="float:left;margin-left: 7px;padding-top:8px;">
                    <div class="index_login"><a href="/login.html">登录</a></div>
                    <div class="tel">
                        <span>客户热线：010-59354211</span>
                    </div>
                </div>
            </div>
        </section>
        <section class="head_nav">
            <div class="width_content">
                <nav>
                    <div class="index_icon" id="user_active">
                        <a href="index.jsp" target="_self">首页</a>
                    </div>
                    <div class="about_icon ">
                        <a href="about.html" target="_self">关于我们</a>
                    </div>
                    <div class="news_icon ">
                        <a href="news.html"target="_self"><span>Camplink</span>资讯</a>
                    </div>
                    <div class="private_icon ">
                        <a href="customized.html"target="_self">私人定制</a>
                    </div>
                    <div class="personal_icon ">
                        <a href="login.html"target="_self">个人中心</a>
                    </div>
                </nav>
            </div>
        </section>
    </section>
</template>
<script>
require('~/assets/css/style.css')
</script>