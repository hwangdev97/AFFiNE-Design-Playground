<script lang="ts" setup>
const isOpen = ref(false);
const setIsOpen = (value: boolean) => {
  isOpen.value = value;
};

const { page } = useContent();
useContentHead(page);

console.log(useRoute.name);
</script>
<template>
  <div class="detailLayout">
    <ContentDoc v-slot="{ doc }">
      <ContentRenderer  class="detailLayout" :value="doc" />

      <DetailToolBar @showDialog="setIsOpen(true)" :title="doc.title" />
    </ContentDoc>
  </div>
</template>
<style>
.detailLayout {
  width: 100vw;
  height: 100vh;
}
</style>
