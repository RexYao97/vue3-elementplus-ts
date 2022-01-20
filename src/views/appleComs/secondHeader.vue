<script setup lang="ts"></script>

<template>
  <section class="section-manifesto">
    <div class="wallpaper-video-container">
      <video
        muted
        playsinline
        loop
        autoplay
        preload="none"
        aria-hidden="true"
        src="/video/large.mp4"
        class="wallpaper-video"
      ></video>
    </div>
    <div class="manifesto-copy-container">
      <div class="section-content">
        <ul
          class="key-features"
          tg-from="0"
          tg-to="100"
          to-step="1"
          tg-edge="cover"
          tg-map="0...30:0.25;31...40:1;41...100:0.25;"
        >
          <li
            class="feature"
            tg-name="action-li"
            style="opacity: var(--action-li)"
          >
            Pro 级摄像头系统，能力强悍提升；
          </li>
          <li
            class="feature"
            tg-name="action-li"
            style="opacity: var(--action-li)"
          >
            显示屏响应之快，让体验全面刷新；
          </li>
          <li
            class="feature"
            tg-name="action-li"
            style="opacity: var(--action-li)"
          >
            芯片速度再创 iPhone 巅峰；
          </li>
          <li
            class="feature"
            tg-name="action-li"
            style="opacity: var(--action-li)"
          >
            坚固耐用的设计，出类拔萃；
          </li>
          <li
            class="feature"
            tg-name="action-li"
            style="opacity: var(--action-li)"
          >
            电池续航更是大步飞跃。
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<style lang="less">
.section-manifesto {
  min-height: 100vh;
  z-index: 1;
  position: relative;
  overflow-x: visible !important;
  --initial-video-overlap: -100vh;
  --comp-padding-bottom: 95px;
}
.wallpaper-video-container {
  min-height: var(--lt-content-min-height);
  position: sticky;
  top: var(--lt-sticky-top);

  .wallpaper-video {
    background-repeat: no-repeat;
    background-image: url(/img/02.jpeg);
    width: 100%;
    height: var(--lt-content-min-height);
    background-position: 50%;
    background-size: cover;
    object-fit: cover;
    display: block;
  }
}
.manifesto-copy-container {
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  margin-top: var(--initial-video-overlap);
  transform: translateZ(0);
  position: relative;
  padding-top: 100px;
  padding-bottom: var(--comp-padding-bottom);
  .section-content {
    margin-left: auto;
    margin-right: auto;
    width: 980px;
    .key-features {
      flex-basis: 91.6666666667%;
      max-width: 91.6666666667%;
      margin-left: 0;
      display: block;
      list-style-type: disc;
      text-align: left;
      font-size:19px;
      .feature {
        font-family: SF Pro SC,SF Pro Display,SF Pro Icons,PingFang SC,Helvetica Neue,Helvetica,Arial,sans-serif;
        font-size: 80px;
        line-height: 1.05;
        font-weight: 600;
        list-style-type: none;
        opacity: 0.25;
        transition-property: opacity;
        transition-duration: 0.5s;
        display: inline;
        color: #f5f5f7;
        text-size-adjust: 100%;
        transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
      }
    }
  }
}
</style>
