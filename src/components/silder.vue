<template>
  <div class="my-lunbo">
    <!--轮播图-->
    <swipe class="my-swipe">
      <swipe-item class="slide1">
        <img src="../assets/picture/banner1.jpg">
      </swipe-item>
      <swipe-item class="slide2">
        <img src="../assets/picture/banner2.jpg">
      </swipe-item>
      <swipe-item class="slide3">
        <img src="../assets/picture/banner3.jpg">
      </swipe-item>
      <swipe-item class="slide4">
        <img src="../assets/picture/banner4.jpg">
      </swipe-item>
    </swipe>
    <!--轮播图  end-->
  </div>
</template>
<style>
.my-swipe {
  height: 150px;
}
.my-swipe img {
  width: 100%;
  height: 100%;
}
</style>

<script>
import { Swipe, SwipeItem } from "vue-swipe";
import "vue-swipe/dist/vue-swipe.css";
export default {
  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem
  }
};
</script>

  