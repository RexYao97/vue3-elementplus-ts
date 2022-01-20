<script setup lang="ts"></script>

<template>
  <section class="section-hero">
    <div class="lift-transition-sticky-content">
      <div class="hero-copy-wrapper">
        <h1 class="hero-headline"></h1>
        <h2 class="hero-intro-copy">强得很</h2>
      </div>
      <div class="hero-video-container">
        <div style="" class="list-img"></div>
      </div>
    </div>
  </section>
</template>
<style lang="less">
.section-hero {
  z-index: 0;
  position: relative;
  min-height: var(--lt-container-min-height);
  overflow: visible !important;

  margin-bottom: var(--lt-container-overlap);
  .lift-transition-sticky-content {
    min-height: var(--lt-content-min-height);
    position: sticky;
    top: var(--lt-sticky-top);
    overflow:hidden;
  }
  .hero-video-container {
    width: 2560px;
    height: 100vh;
    left: 50%;
    margin-left: -1280px;
    margin-top: 0px;
    z-index: 1;
    position: relative;
    text-align: left;
    .list-img {
      width: 100%;
      height: 900px;
      background-repeat: no-repeat;
      background-image: url('https://www.apple.com.cn/v/iphone-13-pro/d/images/overview/hero/hero_endframe__earisgmphfee_xlarge.jpg');
      background-size: contain;
      background-position: 50%;
      position: absolute;
      left: 0;
      width: 100%;
      height: 900px;
      top: 164px;
      bottom: 0;
    }
  }

  .hero-copy-wrapper {
    --device-end-height: calc(var(--device-start-height) - 162px);
    position: absolute;
    height: calc(100% - var(--device-end-height));
    width: 100%;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    place-content: center;
    text-align: center;
    padding-top: 130px;
  }
  .hero-headline {
    width: 156px;
    height: 23px;
    background-size: 156px 23px;
    background-repeat: no-repeat;
    background-image: url('/img/01-header.svg');
    position: relative;
    left: 50%;
    margin-left: -78px;
    margin-bottom: 0px;
  }
  .hero-intro-copy {
    font-size: 80px;
    line-height: 1.05;
    font-weight: 600;
    letter-spacing: 0em;
    margin-top: 22px;
    color: #1d1d1f;
  }
}
</style>
