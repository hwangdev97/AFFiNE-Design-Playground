<script lang="ts" setup>
defineProps<{
  item: ProtoTypeItem;
}>();
</script>
<template>
  <NuxtLink :to="item.route">
    <div class="previewCardLayout">
      <!-- playsinline -->
      <video
        class="previewCardVideo"
        :src="item.video"
        autoplay
        playsinline
        muted
        loop
      ></video>
      <div class="previewCardMeta">
        <div>
          <div class="previewCardTitle">{{ item.title }}</div>
          <div class="previewCardDescription">{{ item.subscribe }}</div>
        </div>
        <div class="previewCardAction">
          <span class="previewCardButton">view </span>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
a {
  height: auto;
  display: flex;
  flex-wrap: wrap;
  text-decoration: none;
}

.previewCardLayout {
  height: 100%;
  min-width: 300px;
  flex: 1;
  display: flex;

  flex-direction: column;
  background-color: rgb(255, 255, 255);
  border-radius: 8px;
  margin: 6px;
  overflow: hidden;
  border: 1px solid rgb(222, 222, 222);
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease-in-out;
  animation: previewCardAppear 860ms cubic-bezier(0.65, 0, 0.35, 1);
}

.previewCardLayout:hover {
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
}

.previewCardTitle {
  font: 1.5rem;
  color: rgb(130, 130, 130);
  text-align: left;
  user-select: none;
}

.previewCardTitle:hover .previewCardDescription:hover {
  color: rgb(97, 97, 97);
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
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
}

.previewCardButton:hover {
  background-color: #e6e6e6;
}

@keyframes previewCardAppear {
  0% {
    transform: scale(0.85);
  }
  100% {
    transform: scale(1);
  }
}
</style>
