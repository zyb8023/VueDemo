<template>
  <div class="my-newsfy">
    <div class="am-container my-qcwbj">
      <div data-am-widget="list_news" class="am-list-news am-list-news-default">
        <div class="am-list-news-bd">
          <ul class="am-list">
            <!--缩略图在标题左边-->
            <li
              class="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-left"
              v-for="(item,index) of newsList"
              :key="index"
            >
              <div class="am-u-sm-3 am-list-thumb">
                <router-link :to="{name:'newsview',params:{id:item.id}}">
                  <img :src="item.img" alt>
                </router-link>
              </div>

              <div class="am-u-sm-9 am-list-main">
                <h3 class="am-list-item-hd">
                  <router-link :to="{name:'newsview',params:{id:item.id}}">{{item.title}}</router-link>
                </h3>

                <div class="am-list-item-text" v-html="item.content"></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newsList: [],
      msg: "新闻资讯"
    };
  },
  mounted() {
    this.$http({
      url: "/data/newslist.json"
    }).then(res => (this.newsList = res.data));
  }
};
</script>
