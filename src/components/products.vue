<template>
  <div class="my-cpfy">
    <div class="am-container my-qcwbj">
      <ul
        data-am-widget="gallery"
        class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default"
        data-am-gallery="{ }"
      >
        <li v-for="item of products" :key="item.id">
          <div class="am-gallery-item">
            <router-link :to="{name:'productview',params:{id:item.id}}">
              <img :src="item.img" alt>
              <h3 class="am-gallery-title">{{item.title}}</h3>
            </router-link>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [],
      msg: "产品中心"
    };
  },
  mounted() {
    axios({
      url: "/data/productList.json"
    }).then(res => (this.products = res.data));
  }
};
</script>

