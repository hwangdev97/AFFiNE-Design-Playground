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
const pickedColor: Ref<string> = ref("#FFF188");

const el = ref<HTMLElement | null>(null);
const elNext = ref<HTMLElement | null>(null);
const onMove = ref(false);
const showFirst = ref(true);
const showNext = ref(false);

const firstStyle = ref({
  top: "calc(50% - 3rem)",
  left: "calc(50% - 3rem)",
});
const nextStyle = ref({
  top: "calc(50% - 3rem)",
  left: "calc(50% - 3rem)",
});

const halfWidth: number = useWindowSize().width.value / 2 - 48; // 3 * 16
const halfHight: number = useWindowSize().height.value / 2 - 48;
const firstPosition = { x: halfWidth, y: halfHight };

const onFirstDraggableEnd = (
  position: { x: number; y: number },
  e: PointerEvent
) => {
  onMove.value = false;
  console.log("x =>", position.x);
  if (
    Math.abs(position.x - halfWidth) < 200 &&
    Math.abs(position.y - halfHight) < 200
  ) {
    resetFirstPosition();
  } else {
    showNext.value = true;
  }

  resetNextPosition();
};

const onNextDraggableEnd = (
  position: { x: number; y: number },
  e: PointerEvent
) => {
  if (
    Math.abs(position.x - halfWidth) < 200 &&
    Math.abs(position.y - halfHight) < 200
  ) {
    resetNextPosition();
  } else {
    showFirst.value = true;
  }
  onMove.value = false;
  resetFirstPosition();
};

const {} = useDraggable(el, {
  initialValue: firstPosition,
  onStart: () => {
    showNext.value = false;
    console.log("onStart 1");
  },
  onMove: (position) => {
    onMove.value = true;

    firstStyle.value = {
      top: `${position.y}px`,
      left: `${position.x}px`,
    };
  },
  onEnd: onFirstDraggableEnd,
});

const {} = useDraggable(elNext, {
  initialValue: firstPosition,
  onStart: () => {
    showFirst.value = false;
    console.log("onStart 2");
  },
  onMove: (position) => {
    onMove.value = true;
    nextStyle.value = {
      top: `${position.y}px`,
      left: `${position.x}px`,
    };
  },
  onEnd: onNextDraggableEnd,
});

const resetFirstPosition = () => {
  firstStyle.value = {
    top: `${firstPosition.y}px`,
    left: `${firstPosition.x}px`,
  };
};

const resetNextPosition = () => {
  nextStyle.value = {
    top: `${firstPosition.y}px`,
    left: `${firstPosition.x}px`,
  };
};
</script>

<template>
  <div class="edgelessShape">
    <h1>Edgeless Shape Button Demo</h1>
    <!-- <h1>at {{ x }}, {{ y }}</h1> -->
    <section class="toolbar">
      <section class="shapeTypeButton">
        <!-- Rectangle -->

        <svg
          v-if="showFirst"
          class="shapeBase rectangleNext"
          ref="el"
          :style="firstStyle"
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

        <svg
          v-if="showNext"
          ref="elNext"
          :style="nextStyle"
          class="shapeBase rectangleNext"
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
          <circle
            cx="20"
            cy="20"
            r="19.5"
            stroke="black"
            stroke-opacity="0.1"
          />
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
<style scoped>
h1 {
  font: 2em sans-serif;
  color: rgb(184, 184, 184);
  text-align: center;
  user-select: none;
}

.edgelessShape {
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
.toolbar {
  width: 25%;
  height: 12rem;
  margin: 32px auto;

  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 6rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 12px rgba(66, 65, 73, 0.15);
}

.shapeTypeButton {
  width: 180px;
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
  z-index: 3;
  animation-name: enterFromBottom;
  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}

.circle {
  position: absolute;
  top: calc(50% - 4rem);
  left: calc(50% - 0.75rem);
  transform: scale(0.8) rotate(30deg);

  z-index: 2;
}

.triangle {
  position: absolute;
  top: calc(50% - 4.5rem);
  left: calc(50% - 7rem);
  transform: scale(0.8) rotate(-15deg);
  z-index: 1;
}

/*  */
.rectangleNext {
  position: absolute;

  z-index: 3;
  animation-name: enterFromBottom;
  animation-duration: 0.25s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}

@keyframes enterFromBottom {
  0% {
    top: calc(50% - 1rem);
    transform: scale(0.7) translateY(80%);
  }
  100% {
    top: calc(50% - 3rem);
    transform: scale(1) translateY(0%);
  }
}
</style>
