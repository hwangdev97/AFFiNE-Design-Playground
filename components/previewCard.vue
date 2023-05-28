<script lang="ts" setup>
defineProps<{
  item: ProtoTypeItem;
}>();
</script>
<template>
  <div class="previewCardLayout">
    <video class="previewCardVideo" :src="item.video"></video>
    <div class="previewCardMeta">
      <div class="previewCardInfo">
        <div class="previewCardTitle">{{ item.title }}</div>
        <div class="previewCardDescription">{{ item.subscribe }}</div>
      </div>
      <div class="previewCardAction">
        <NuxtLink class="previewCardButton" :to="item.route">view</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.previewCardLayout {
  height: auto;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  margin: 6px;
  overflow: hidden;
  border: 1px solid rgb(222, 222, 222);
}


.previewCardTitle {
  font: 1.5rem;
  color: rgb(184, 184, 184);
  text-align: left;
  user-select: none;
}

.previewCardDescription {
  font-size: 0.8rem;
  color: rgb(184, 184, 184);
  text-align: left;
  user-select: none;
}
.previewCardVideo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.previewCardMeta {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 10px;
}
.previewCardAction {
  display: flex;
  justify-items: center;
  align-items: center;
}

.previewCardButton {
  border-radius: 8px;
  padding: 4px 10px;
  color: rgb(117, 117, 117);
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.previewCardButton:hover {
  background-color: #e6e6e6;
}
</style>
