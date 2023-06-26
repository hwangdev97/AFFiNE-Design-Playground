<script lang="ts" setup></script>
<template>
  <div class="zoomFilterTabLayout">
    <div class="ZFTabBarLayout">
      <span>All</span>
      <span>Pages</span>
      <span>Edgeless</span>
      <span>Views</span>
      <span>Tags</span>
    </div>
  </div>
</template>
<style scoped>
.zoomFilterTabLayout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.ZFTabBarLayout {
  display:  flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 800px;
  height: 80px;
  background-color: #ffffff;
  border-radius: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
  margin: 0 auto;
}
</style>
