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
  <ContentDoc class="detailLayout" v-slot="{ doc }">
    <ContentRenderer class="detailLayout" :value="doc" />

    <DetailToolBar @showDialog="setIsOpen(true)" :title="doc.title" />
  </ContentDoc>
  <Dialog :isOpen="isOpen" @update:isOpen="setIsOpen(false)">
    <ContentDoc
      class="typeset"
      :path="`${$router.currentRoute.value.fullPath}info`"
    />
  </Dialog>
</template>
<style>
.detailLayout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

/*  */
.typeset {
  width: 100%;
  height: 90%;
  overflow: scroll;
  padding: 16px;
}
</style>
