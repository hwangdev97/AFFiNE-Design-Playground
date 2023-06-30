<script lang="ts" setup>
const props = defineProps({
  title: String,
});
</script>
<template>
  <div class="detailToolBarLayout">
    <span class="toolBarButton" @click="$router.go(-1)">
      <i-fa6-solid-arrow-left style="padding-right: 8px; color: #8e8e8e" />
      Go back
    </span>
    <span class="detailTitle">
    {{ props.title }}
  </span>
    <div class="rightActions">
      <span
        class="toolBarButton showCodeButton"
        @click="$emit('showDialog', true)"
      >
        <i-fa6-solid-code style="color: #8e8e8e" />
      </span>

      <span class="toolBarButton">
        <i-fa6-solid-arrow-right />
      </span>
    </div>
  </div>
</template>
<style>
:root {
  --tool-bar-width: 530px;
}

.detailToolBarLayout {
  width: var(--tool-bar-width);
  min-width: 58px;
  height: 58px;

  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5vh;
  left: calc(50vw - var(--tool-bar-width) / 2);

  background-color: #ffffff;
  border-radius: 30px;
  align-items: center;
  border: 1px solid #c9c9c9;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);

  user-select: none;

  transition: all 0.2s ease-in-out;
  animation: toolBarAppear 860ms cubic-bezier(0.65, 0, 0.35, 1);
}

.detailToolBarLayout span {
  font-size: 1rem;
  font-weight: 500;
  color: #8e8e8e;
  margin: 0 8px;
}

.detailToolBarLayout:hover {
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.18);
}

.detailToolBarLayout span:hover {
  color: #4a4a4a;
}

.toolBarButton {
  display: flex;

  align-items: center;
  justify-content: space-between;
  border-radius: 30px;
  padding: 12px 16px;
  transition: all 0.2s ease-in-out;
}

.toolBarButton:hover {
  background-color: #f0f0f0;

  border-radius: 30px;
  transform: scale(1.05);
}
.toolBarButton:active {
  transform: scale3d(0.985, 0.985, 1);
}

.rightActions {
  display: flex;
}

.detailTitle {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4a4a4a;
  margin: 0 8px;
}

@keyframes toolBarAppear {
  0% {
    bottom: 4vh;
    transform: scale(0.7);
  }
  100% {
    bottom: 5vh;
    transform: scale(1);
  }
}
</style>
