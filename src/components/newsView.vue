<template>
  <div class="my-newsxx">
    <div class="am-container my-qcwbj">
      <article class="am-article">
        <div class="am-article-hd">
          <h1 class="am-article-title">天猫双11全球狂欢节正式启航</h1>
          <p class="am-article-meta">发布时间:{{list.time | formatTime}}</p>
        </div>

        <article
          data-am-widget="paragraph"
          class="am-paragraph am-paragraph-default"
          data-am-paragraph="{ tableScrollable: true, pureview: true }"
        >
          <p class="paragraph-default-p">{{list.title}}</p>
          <img :src="list.img">
          <p>{{list.content}}</p>
          <img :src="list.img">
          <p>配置方面，ThinkPad S420搭载了酷睿i5-2430M处理器和AMD Radeon HD 6630M显卡，320GB硬盘与2GB DDR3内存，同时这款笔记本在商务方面也有其独到之处，APS硬盘保护、防泼溅键盘、ThinkLight键盘灯，指纹识别器，都将为用户提供ThinkPad家族始终如一的高品质及可靠性。</p>
          <img :src="list.img">
          <p>{{list.content}}</p>
        </article>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {}
    };
  },
  methods: {},
  mounted() {
    let id = this.$route.params.id;
    this.$http({
      url: "/data/newslist.json"
    }).then(res => (this.list = res.data[id - 1]));
  }
};
</script>

