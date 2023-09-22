<script lang="ts" setup>
</script>
<template>
  <div class="background">
    <section class="appWindow">
      <div class="trafficLight">
        <div class="trafficButtonBase" style="background-color: #F36A5D;"></div>
        <div class="trafficButtonBase" style="background-color: #F9BF4E;"></div>
        <div class="trafficButtonBase" style="background-color: #57C554;"></div>
      </div>
      <!-- left -->
      <section>
        <div class="infoImage">

        </div>
        <div class="inputItems">

        </div>
        <div class="startButton">
          Create New Workspace
        </div>
      </section>
      <!-- right -->
      <section>
      </section>

    </section>
  </div>
</template>
<style scoped>
.background {
  width: 100%;
  height: 100%;
  background-image: url("/WStW2U7iLPY-full.jpeg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.appWindow {
  width: 1440px;
  height: 880px;
  background-color: white;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
}

.trafficLight {
  display: flex;
  justify-content: last baseline;
  padding: 20px;
  gap: 6px;
}

.trafficButtonBase {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);

}
</style>