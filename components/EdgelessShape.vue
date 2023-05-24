<script lang="ts" setup>
const colors: Ref<string[]> = ref([
  "#FFF188",
  "#FFC107",
  "#FF9800",
  "#FF5722",
  "#795548",
  "#9E9E9E",
  "#607D8B",
]);

const el = ref<HTMLElement | null>(null);
const onMove = ref(false);
const halfWidth: number = useWindowSize().width.value / 2 - 64;
const halfHight: number = useWindowSize().height.value / 2 - 64;
const { x, y, style } = useDraggable(el, {
  initialValue: { x: halfWidth, y: halfHight },
  onMove: () => {
    onMove.value = true;
  },
  onEnd: (position, e) => {
    onMove.value = false;
    console.log("x =>", position.x);
    if (
      Math.abs(position.x - halfWidth) < 200 &&
      Math.abs(position.y - halfHight) < 200
    ) {
      position.x = halfWidth;
      position.y = halfHight;
    }
  },
});

const pickedColor: Ref<string> = ref("#FFF188");
</script>
<template>
  <div class="layout">
    <h1>Edgeless Shape Button Demo</h1>
    <h1>at {{ x }}, {{ y }}</h1>
    <section class="shapeTypeButton">
      <!-- Rectangle -->

      <svg
        class="shapeBase rectangle"
        ref="el"
        :style="style"
        width="45"
        height="34"
        viewBox="0 0 45 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="45" height="33.75" rx="1.5" :fill="pickedColor" />
        <rect
          x="0.5"
          y="0.5"
          width="44"
          height="32.75"
          rx="1"
          stroke="black"
          stroke-opacity="0.1"
        />
      </svg>
      <!-- Circle -->
      <svg
        class="shapeBase circle"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" :fill="pickedColor" />
        <circle cx="20" cy="20" r="19.5" stroke="black" stroke-opacity="0.1" />
      </svg>

      <!-- Triangle -->
      <svg
        class="shapeBase triangle"
        width="48"
        height="41"
        viewBox="0 0 48 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.701 1.25C23.2783 0.249999 24.7217 0.25 25.299 1.25L46.9497 38.75C47.527 39.75 46.8053 41 45.6506 41H2.34936C1.19466 41 0.472977 39.75 1.05033 38.75L22.701 1.25Z"
          :fill="pickedColor"
        />
        <path
          d="M24.866 1.5L46.5167 39C46.9016 39.6667 46.4204 40.5 45.6506 40.5H2.34936C1.57956 40.5 1.09844 39.6667 1.48334 39L23.134 1.5C23.5189 0.833333 24.4811 0.833333 24.866 1.5Z"
          stroke="black"
          stroke-opacity="0.1"
        />
      </svg>
    </section>
    <section class="colorPickerLayout">
      <span
        :class="`colorPickerItem ${pickedColor === color ? 'selected' : ''}`"
        v-for="color in colors"
        :style="{
          backgroundColor: color,
          width: '2rem',
          height: '2rem',
        }"
        @click="pickedColor = color"
      ></span>
    </section>
  </div>
</template>
<style>
h1 {
  font: 2em sans-serif;
  color: rgb(184, 184, 184);
  text-align: center;
  user-select: none;
}

.layout {
  width: 100%;
  height: 100%;
  background-color: rgb(246, 246, 246);
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: radial-gradient(rgb(209, 209, 209) 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
}

.colorPickerLayout {
  display: flex;
  margin: 2px auto;
}

.colorPickerItem {
  margin: 4px;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}

.selected {
  border: 1px solid rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 0px 1px rgb(97, 97, 97);
}

.colorPickerItem:hover {
  transform: scale(1.3);
}

.shapeTypeButton {
  width: 24rem;
  height: 18rem;
  margin: 32px auto;

  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 12px;
  background-color: rgb(237, 237, 237);
  box-shadow: 0px 0px 12px rgba(66, 65, 73, 0.15);
}

.shapeBase {
  width: 8rem;
  height: 8rem;
  display: block;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.shapeBase:hover {
  transform: scale(1.1);
}

.rectangle {
  position: absolute;
  top: calc(50% - 4rem);
  left: calc(50% - 4rem);
  z-index: 3;
}

.circle {
  position: absolute;
  top: calc(50% - 5rem);
  left: calc(50% - 0.75rem);
  transform: scale(0.8);
  z-index: 2;
}

.triangle {
  position: absolute;
  top: calc(50% - 6rem);
  left: calc(50% - 7rem);
  transform: scale(0.8);
  z-index: 1;
}
</style>
