<template>
  <div class="my-cpxx">
    <div class="am-container my-qcwbj">
      <article class="am-article">
        <div class="am-article-hd">
          <h1 class="am-article-title">欧莱雅LOREAL清润多重活性保湿深透晶露180ML</h1>
          <p class="am-article-meta">发布时间:{{list.time |formatTime}}</p>
        </div>

        <div
          class="am-slider am-slider-default"
          data-am-flexslider="{controlNav: 'thumbnails', directionNav: false, slideshow: false}"
        >
          <ul class="am-slides">
            <li data-thumb="/images/cp06.jpg">
              <img src="/images/cp06.jpg">
              <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>
            </li>
            <li data-thumb="/images/cp05.jpg">
              <img src="/images/cp05.jpg">
              <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>
            </li>
            <li data-thumb="/images/cp07.jpg">
              <img src="/images/cp07.jpg">
              <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>
            </li>
            <li data-thumb="/images/cp02.jpg">
              <img src="/images/cp02.jpg">
              <div class="am-slider-desc">远方 有一个地方 那里种有我们的梦想</div>
            </li>
          </ul>
        </div>

        <article
          data-am-widget="paragraph"
          class="am-paragraph am-paragraph-default"
          data-am-paragraph="{ tableScrollable: true, pureview: true }"
        >
          <p class="paragraph-default-p">{{list.content1}}</p>
          <img :src="list.img">
          <p>外观方面，这款笔记本电脑依旧保持了ThinkPad家族系列一贯的沉稳、严谨风格，搭配上优化的“浮岛式”键盘设计，在展现S系列极简主义设计风格的同时，更让用户不论是在办公室还是外出携带时，都能轻松自如，时刻演绎属于自己的独特魅力。同时ThinkPad S420配备了14英寸LED背光显示屏，分辨率为1366×768。</p>
          <img src="/images/cp08.jpg">
          <p>配置方面，ThinkPad S420搭载了酷睿i5-2430M处理器和AMD Radeon HD 6630M显卡，320GB硬盘与2GB DDR3内存，同时这款笔记本在商务方面也有其独到之处，APS硬盘保护、防泼溅键盘、ThinkLight键盘灯，指纹识别器，都将为用户提供ThinkPad家族始终如一的高品质及可靠性。</p>
          <img :src="list.img">
          <p>{{list.content2}}</p>
        </article>
      </article>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      list: {}
    };
  },
  mounted() {
    axios({
      url: "/data/productList.json"
    }).then(res => (this.list = res.data[this.id - 1]));
  }
};
</script>

