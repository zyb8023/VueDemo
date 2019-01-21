<template>
  <div class="v-head">
    <!--顶部导航-->
    <div class="my-header">
      <header data-am-widget="header" class="am-header am-header-default am-header-fixed">
        <div class="am-header-right am-header-nav">
          <a href="#right-link" class></a>
          <nav data-am-widget="menu" class="am-menu am-menu-offcanvas1" data-am-menu-offcanvas>
            <a href="javascript: void(0)" class="am-menu-toggle">
              <i class="am-header-icon am-icon-bars"></i>
            </a>

            <div class="am-offcanvas">
              <div class="am-offcanvas-bar am-offcanvas-bar-flip">
                <ul class="am-menu-nav am-avg-sm-1">
                  <li class>
                    <router-link to="/home">首页</router-link>
                  </li>
                  <li class>
                    <router-link to="/about">关于我们</router-link>
                  </li>
                  <li class>
                    <router-link to="/productlist">产品中心</router-link>
                  </li>
                  <li class>
                    <router-link to="/newslist">新闻中心</router-link>
                  </li>
                  <li class>
                    <router-link to="/contcat">联系我们</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <h1 class="am-header-title">
          <a href="javascript:;" class @click="gohome">
            <img src="../assets/picture/logo.png">
          </a>
        </h1>
        <div class="am-header-left am-header-nav">
          <a href="javascript:;" @click="goback" class>
            <i class="am-header-icon am-icon-arrow-left"></i>
          </a>
        </div>
      </header>
    </div>
    <!--顶部导航  end-->
  </div>
</template>
<script>
export default {
  name: "v-head",
  methods: {
    goback() {
      this.$router.go(-1);
    },
    gohome(){
      this.$router.push("/home");
    }
  }
};
</script>

