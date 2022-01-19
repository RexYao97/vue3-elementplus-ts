<script setup lang="ts">

</script>

<template>
  <div class="container" tg-name="blur" tg-from="100" tg-to="0" tg-edge="inset">
    <div class="container" tg-name="opacity" tg-from="0" tg-to="1">
      <div class="sticky">
        <span>Hello.</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
body {
  padding: 0;
  margin: 0;
}

.container {
  height: 200vh;
}

.sticky {
  font-size: 10rem;
  font-weight: bold;
  letter-spacing: -0.03em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: sticky;
  top: 0;
  filter: blur(calc(var(--blur) * 1px));
}

span {
  opacity: var(--opacity);
}
</style>
