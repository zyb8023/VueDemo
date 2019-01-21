<template>
  <div class="my-aboutxx">
    <myweizhi :ms="msg"></myweizhi>
    <div class="am-container my-qcwbj">
      <article class="am-article">
        <div class="am-article-bd">
          <p
            class="am-article-lead"
          >英特尔公司[1] 是美国一家主要以研制CPU处理器的公司，是全球最大的个人计算机零件和CPU制造商，它成立于1968年，具有46年产品创新和市场领导的历史。1971年，英特尔推出了全球第一个微处理器。微处理器所带来的计算机和互联网革命，改变了整个世界。在2016年世界五百强中排在第158位。[3] 2014年3月5日，Intel收购智能手表Basis Health Tracker Watch的制造商Basis Science。[4] 2014年8月14日，英特尔6.5亿美元收购Avago旗下公司网络业务。2015年12月斥资167亿美元收购了Altera公司。 2016年4月底，英特尔公司发言人证实，2016年7月，英特尔宣布该公司历史上规模最大的裁员计划，准备削减1.2万人。</p>
          <p class="am-article-lead">[2] 2014年2月19日，英特尔推出处理器至强E7 v2系列采用了多达15个处理器核心，成为英特尔核心数最多的处理器。</p>
        </div>
      </article>
    </div>
    <copyright></copyright>
  </div>
</template>
<script>
import copyright from "./copyRight";
import myweizhi from "./myWeizhi";
export default {
  data() {
    return {
      msg: "关于我们"
    };
  },
  components: {
    copyright,
    myweizhi
  }
};
</script>
