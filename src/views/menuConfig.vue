<script setup lang="ts">
import firstHeader from './appleComs/firstList.vue';
import secondHeader from './appleComs/secondHeader.vue';
import thirdHeader from './appleComs/thirdHeader.vue';
</script>

<template>
  <div class="scrool-view">
    <firstHeader />
    <secondHeader />
    <thirdHeader />
  </div>
</template>
<style scoped lang="less">
@font-face {
  font-family: 'SF Pro SC';
  	font-style:normal;
	font-weight:300;
  src: url('public/font/PingFangSC-Semibold.woff2');
  
}
body {
  padding: 0;
  margin: 0;
}

.scrool-view {
  height: 2000px;
  background: white;
  position: absolute;
  left: 0;
  right: 0;
  /* 变量声明 */
   --device-start-height: 750px;
  --lt-container-overlap: -100vh;
  --lt-sticky-top: 0;
  --lt-container-min-height: calc(var(--lt-content-min-height) * 2);
  --lt-content-min-height: calc(var(--lt-container-overlap) * -1);

}

</style>
