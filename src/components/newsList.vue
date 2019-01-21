<template>
  <div class>
    <myweizhi :ms="msg"></myweizhi>
    <news></news>
    <copyright></copyright>
  </div>
</template>
<script>
import copyright from "./copyRight";
import myweizhi from "./myWeizhi";
import news from "./news";
export default {
  data() {
    return {
      msg: "新闻资讯"
    };
  },
  components: {
    copyright,
    myweizhi,
    news
  }
};
</script>

