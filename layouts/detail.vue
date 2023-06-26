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
      <ContentRenderer class="detailLayout" :value="doc" />

      <DetailToolBar @showDialog="setIsOpen(true)" :title="doc.title" />
    </ContentDoc>
    <Dialog :isOpen="isOpen" @update:isOpen="setIsOpen(false)">
      <ContentDoc
        class="typeset"
        :path="`${$router.currentRoute.value.fullPath}info`"
      />
    </Dialog>
  </div>
</template>
<style>
.detailLayout {
  width: 100%;
  height: 100%;
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
