<template>
  <div id="app">
    <v-head></v-head>
    <v-silder></v-silder>
    <router-view></router-view>
    <v-foot></v-foot>
  </div>
</template>
<script>
import VFoot from "./components/VFoot";
import VHead from "./components/VHead";
import silder from "./components/silder";
export default {
  components: {
    "v-foot": VFoot,
    "v-head": VHead,
    "v-silder": silder
  }
};
</script>
