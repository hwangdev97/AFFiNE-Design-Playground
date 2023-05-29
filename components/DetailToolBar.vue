<script lang="ts" setup></script>
<template>
  <div class="detailToolBarLayout">
    <span @click="$router.go(-1)">Go back</span>
  </div>
</template>
<style>
:root {
  --tool-bar-width: 180px;
}
.detailToolBarLayout {
  width: var(--tool-bar-width);
  min-width: 58px;
  height: 58px;

  display: flex;
  position: absolute;
  bottom: 5vh;
  left: calc(50vw - var(--tool-bar-width) / 2);

  background-color: #ffffff;
  border-radius: 30px;
  justify-content: center;
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
  color: #454545;
  margin: 0 8px;
  cursor: pointer;
}

.detailToolBarLayout:hover {
  box-shadow: 0px 3px 18px rgba(0, 0, 0, 0.18);
}

.detailToolBarLayout span:hover {
  color: #4a4a4a;
}

@keyframes toolBarAppear {
  0% {
    bottom: -5vh;
    transform: scale(0.7);
  }
  100% {
    bottom: 5vh;
    transform: scale(1);
  }
}
</style>
