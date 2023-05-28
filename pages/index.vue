<script lang="ts" setup>
const prototypeList = ref<ProtoTypeItem[]>([
  {
    title: "Edgeless Shape",
    subscribe: "Edgeless Shape Button Demo",
    route: "/prototype/edgelessshape",
    video: "/video/edgeless-shape.mp4",
  },
  {
    title: "Split Page",
    subscribe: "Split Page Demo with groovy animation",
    route: "/prototype/splitpage",
    video: "/video/split-page.mp4",
  },
  {
    title: "Update Button",
    subscribe: "Update Button Demo with background animation",
    route: "/prototype/updatebutton",
    video: "/video/update-button.mp4",
  },
]);
</script>
<template>
  <div class="layout">
    <section class="title">
      <h1>
        Some code snippet for <span class="affineLogo"> </span> written by
        <span class="hwangLogo"> </span>
      </h1>
      <h2>Try AFFiNE</h2>
    </section>

    <div class="prototypeGridLayout">
      <PreviewCard v-for="item in prototypeList" :item="item" />
    </div>
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.prototypeGridLayout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  grid-template-rows: masonry;
  padding: 3rem 6rem;
}

.title {
  display: flex;
  justify-content: space-between;
  padding: 8rem 10rem 0 10rem;
  user-select: none;
}

.title h1 {
  color: #585858;
  display: flex;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
}

.title h2 {
  display: flex;
  align-items: center;
  color: #585858;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
}

.affineLogo {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("/logoAffine.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 0.25rem;
}

.hwangLogo {
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url("/hwangAvatar.png");
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 0.5rem;
}
</style>
