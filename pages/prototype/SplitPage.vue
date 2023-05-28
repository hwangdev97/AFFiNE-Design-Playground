<script lang="ts" setup></script>
<template>
  <div class="background">
    <div class="splitPage">
      <!-- sidebar -->
      <section class="sidebar"></section>
      <section class="pageLayout">
        <!-- page1 -->
        <section class="page1">
          <span class="gooey"></span>
        </section>

        <!-- page3 -->
        <section class="page2">
          <span class="gooey pageTwoGooey"></span>
          <span class="gooey pageTwoGooey2"></span>
          <span class="gooey pageTwoGooey3"></span>
        </section>
      </section>
    </div>
  </div>
</template>
<style>


.background {
  width: 100%;
  height: 100%;
  background-image: url("../../public/WStW2U7iLPY-full.jpeg");
  background-size: cover;
}
.splitPage {
  width: 80%;
  height: 80%;
  position: absolute;
  display: flex;
  top: 10%;
  left: 10%;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.65);
  border-radius: 12px;
  justify-content: space-between;
  backdrop-filter: blur(80px);
}

.sidebar {
  width: 20%;
  height: 100%;
  background-image: url("../../public/Sidebar.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.pageLayout {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  filter: contrast(20);
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(80px);
  border-radius: 0 12px 12px 0px;
}

.page1 {
  width: 50%;
  background-color: var(--page-color);
  margin: 18px;
  filter: blur(6px);
}

.page2 {
  width: 50%;
  margin: 18px;
  background-color: var(--page-color);
  filter: blur(6px);
  animation-name: split; /* 使用 move 序列 */
  animation-duration: 1.5s; 
  animation-timing-function: ease-in-out; /* 缓动函数为 ease-in-out */
  animation-iteration-count: 1;
}
.pageTwoGooey {
  background-color: var(--page-color);
  width: 30px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: calc(0% + 30px);
  left: 10px;
  z-index: 10000;
  animation-name: move; /* 使用 move 序列 */
  animation-duration: 2s; /* 持续时间为 2 秒 */
  animation-timing-function: ease-in-out; /* 缓动函数为 ease-in-out */
  animation-iteration-count: 1;
}

.pageTwoGooey2 {
  background-color: var(--page-color);
  width: 40px;
  height: 300px;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 10px;
  z-index: 10000;
  animation-name: move; /* 使用 move 序列 */
  animation-duration: 2s; /* 持续时间为 2 秒 */
  animation-timing-function: ease-in-out; /* 缓动函数为 ease-in-out */
  animation-iteration-count: 1;
}

.pageTwoGooey3 {
  background-color: var(--page-color);
  width: 40px;
  height: 400px;
  border-radius: 50%;
  position: absolute;
  bottom: calc(0% + 10px);
  left: 10px;
  z-index: 10000;
  animation-name: move; /* 使用 move 序列 */
  animation-duration: 2s; /* 持续时间为 2 秒 */
  animation-timing-function: ease-in-out; /* 缓动函数为 ease-in-out */
  animation-iteration-count: 1;
}

.gooey {
  filter: blur(10px);
}

@keyframes move {
  /* 初始状态 */
  0% {
    transform: translateX(-50px); /* X 轴位移为 0 */
  }
  /* 结束状态 */
  100% {
    transform: translateX(10px);
  }
}

@keyframes split {
  from {
    margin-left: -20px;
  }
  to {
    margin-left: 20px;
  }
}
</style>
