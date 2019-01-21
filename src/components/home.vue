<template>
  <div class="home">
    <!--关于我们-->
    <div class="my-syabout">
      <div class="am-container my-qcwbj">
        <div data-am-widget="titlebar" class="am-titlebar am-titlebar-default">
          <nav class="am-titlebar-nav">
            <a href="#c1" class="my-title-l">ABOUT US</a>
            <a href="#c2" class="my-title-r">关于我们</a>
          </nav>
        </div>

        <hr data-am-widget="divider" style class="am-divider am-divider-default">

        <div data-am-widget="intro" class="am-intro am-cf am-intro-default">
          <div class="am-g am-intro-bd">
            <div class="am-intro-left am-u-sm-5">
              <img src="/images/cp05.jpg" alt="小娜">
            </div>
            <div class="am-intro-right am-u-sm-7">
              <p>英特尔公司[1] 是美国一家主要以研制CPU处理器的公司，是全球最大的个人计算机零件和CPU制造商，它成立于1968年，具有46年产品创新和市场领导的历史。1971年，英特尔推出了全球第一个微处理器。微处理器所带来的计算机和互联网革命，改变了整个世界。在2016年世界五百强中排在第158位。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--关于我们  end-->
    <!--产品展示-->
    <div class="my-sycp">
      <div class="am-container my-qcwbj">
        <div data-am-widget="titlebar" class="am-titlebar am-titlebar-default">
          <nav class="am-titlebar-nav">
            <a href="#c1" class="my-title-l">PRODUCTS</a>
            <a href="#c2" class="my-title-r">产品展示</a>
          </nav>
        </div>
        <hr data-am-widget="divider" style class="am-divider am-divider-default">
        <!--产品分类-->
        <ol class="am-breadcrumb am-breadcrumb-slash">
          <li>
            <a href="#">产品分类A</a>
          </li>
          <li>
            <a href="#">产品分类B</a>
          </li>
          <li class="am-active">产品分类C</li>
        </ol>
        <!--产品分类-->
        <ul
          data-am-widget="gallery"
          class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default"
          data-am-gallery="{ }"
        >
          <li>
            <div class="am-gallery-item">
              <a href="#" class>
                <img src="../assets/picture/bing-1.jpg" alt="远方 有一个地方 那里种有我们的梦想">
                <h3 class="am-gallery-title">复合PVC地板卷材</h3>
              </a>
            </div>
          </li>
          <li>
            <div class="am-gallery-item">
              <a href="#" class>
                <img src="../assets/picture/bing-2.jpg" alt="某天 也许会相遇 相遇在这个好地方">
                <h3 class="am-gallery-title">大理石纹PVC地板</h3>
              </a>
            </div>
          </li>
          <li>
            <div class="am-gallery-item">
              <a href="#" class>
                <img src="../assets/picture/bing-3.jpg" alt="不要太担心 只因为我相信">
                <h3 class="am-gallery-title">复合胶地板</h3>
              </a>
            </div>
          </li>
          <li>
            <div class="am-gallery-item">
              <a href="#" class>
                <img src="../assets/picture/bing-4.jpg" alt="终会走过这条遥远的道路">
                <h3 class="am-gallery-title">环保PVC地板卷材</h3>
              </a>
            </div>
          </li>
          <li>
            <div class="am-gallery-item">
              <a href="#" class>
                <img src="../assets/picture/bing-4.jpg" alt="终会走过这条遥远的道路">
                <h3 class="am-gallery-title">水晶面PVC地板卷</h3>
              </a>
            </div>
          </li>
          <li>
            <div class="am-gallery-item">
              <a href="#" class>
                <img src="../assets/picture/bing-4.jpg" alt="终会走过这条遥远的道路">
                <h3 class="am-gallery-title">耐磨PVC地板卷材</h3>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!--产品展示  end-->
    <!--新闻资讯-->
    <div class="my-synews">
      <div class="am-container my-qcwbj">
        <div data-am-widget="titlebar" class="am-titlebar am-titlebar-default">
          <nav class="am-titlebar-nav">
            <a href="#c1" class="my-title-l">NEWS</a>
            <a href="#c2" class="my-title-r">新闻资讯</a>
          </nav>
        </div>

        <hr data-am-widget="divider" style class="am-divider am-divider-default">
        <news></news>

      </div>
    </div>
    <!--新闻资讯  end-->
  </div>
</template>

<script>
import news from './news';
export default {
  components: {
    news
  }
}
</script>

