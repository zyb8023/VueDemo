<template>
  <div>
    <myweizhi :ms="msg"></myweizhi>
    <products></products>
    <copyright></copyright>
  </div>
</template>
<script>
import copyright from "./copyRight";
import myweizhi from "./myWeizhi";
import products from "./products";
export default {
  data() {
    return {
      msg: "产品中心"
    };
  },
  components: {
    copyright,
    myweizhi,
    products
  }
};
</script>

