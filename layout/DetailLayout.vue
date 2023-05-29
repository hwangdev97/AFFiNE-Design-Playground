<script lang="ts" setup></script>
<template>
  <div class="detailLayout">
    <main class="detailLayout">
      <slot></slot>
    </main>
    <DetailToolBar />
  </div>
</template>
<style>
.detailLayout {
  width: 100vw;
  height: 100vh;
}
</style>
