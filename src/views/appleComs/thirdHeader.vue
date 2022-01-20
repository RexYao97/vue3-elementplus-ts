<script setup lang="ts"></script>

<template>
  <section class="section-design">
    <div class="lift-transition-sticky-content">

    </div>
  </section>
</template>
<style lang="less" scoped>
.section-design {
  --static-row-min-height: 900px;
  background-color: #fff;
  .lift-transition-sticky-content{
        min-height: var(--lt-content-min-height);
    position: sticky;
    top: var(--lt-sticky-top);
  }
}
</style>
