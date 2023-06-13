<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: "Core Code Info",
  },
  isOpen: Boolean,
});
</script>
<template>
  <div
    class="dialogLayout"
    v-show="isOpen"
    @click="$emit('update:isOpen', false)"
  >
    <transition name="dialog-fade dialog-slide">
      <div class="dialogContent" @click.stop>
        <div class="dialogTitleBar">
          <h2>{{ title }}</h2>

          <button @click="$emit('update:isOpen', false)">
            <i-fa6-solid-xmark />
          </button>
        </div>

        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<style>
.dialogLayout {
  z-index: 1000;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.15) 100%
  );
  backdrop-filter: blur(1px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.dialogContent {
  position: absolute;
  max-width: 800px;
  right: 1vw;
  background-color: rgb(255, 255, 255);
  width: 45vw;
  height: 80vh;
  border-radius: 10px;
  border: 2px solid rgb(221, 221, 221);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 30px, rgba(0, 0, 0, 0.1) -3px 0px 20px;

  animation: dialogAppear 800ms cubic-bezier(0.36, -0.01, 0, 1.38);
}

.dialogTitleBar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
}

.dialogTitleBar h2 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  padding: 0;
  color: rgb(64, 64, 64);
  user-select: none;
}

.dialogTitleBar button {
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;
  color: rgb(121, 121, 121);
}

.dialogTitleBar button:hover {
  background-color: #f0f0f0;
  border-radius: 0.25rem;
}

@keyframes dialogAppear {
  0% {
    right: -46vw;
    transform: scale(0.95);
  }
  100% {
    right: 1vw;
    transform: scale(1);
  }
}

/* 定义对话框出场动画 */
.dialog-fade-enter-active,
.dialog-fade-leave-active,
.dialog-slide-enter-active {
  transition: all 0.5s;
}

.dialog-fade-enter-from,
.dialog-slide-enter-from {
  opacity: 0;
}

.dialog-fade-leave-to,
.dialog-slide-leave-to {
  opacity: 0;
}

/* 定义对话框从右侧滑入的进场动画 */
.dialog-slide-enter-from {
  transform: translateX(100%);
}

.dialog-slide-leave-to {
  transform: translateX(100%);
}

/* 定义对话框从右侧滑出的出场动画 */
.dialog-slide-enter-active {
  animation: dialog-slide-enter 0.5s forwards;
}

.dialog-slide-leave-active {
  animation: dialog-slide-leave 0.5s forwards;
}

@keyframes dialog-slide-enter {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes dialog-slide-leave {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
</style>
