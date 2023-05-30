<script lang="ts" setup>
const showInstall: Ref<Boolean> = ref(false);
</script>

<template>
  <div class="updateButtonViewLayout">
    <aside class="sideBar">
      <div class="buttonGroup">
        <button
          class="baseButton updateButton"
          @mouseover="showInstall = true"
          @mouseleave="showInstall = false"
          aria-label="Update button"
        >
          <div class="particles" aria-hidden="true"></div>
          <span class="halo" aria-hidden="true"></span>

          <div v-if="showInstall" class="installLabel">
            <img class="icon" src="../../assets/rotate-ccw.svg" alt="Restart" />
            <span class="label2">Restart to install update</span>
          </div>

          <div v-else class="updateAvailable">
            <span class="label">Update available </span>
            <span class="versionInfo">Canary-v0.5.18 </span>
          </div>
        </button>

        <button class="baseButton addPageButton" aria-label="Add page button">
          <img class="icon" src="../../assets/Plus.svg" alt="add" />
          <span>Add page</span>
        </button>
      </div>
    </aside>
  </div>
</template>

<style>
:root {
  --svg-animation: url("../../assets/dotAnimation.svg");
  --svg-noise: url("data:image/svg+xml,%3Csvg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='10' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
button {
  padding: 0px;
  margin: 0px;
}

.updateButtonViewLayout {
  margin: 0px;
  padding: 0px;
  background: #efefef;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.sideBar {
  width: 230px;
  height: 800px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  background-color: #efefef;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.1));
  overflow: hidden;
}

/* noise */
.sideBar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: var(--svg-noise);
  opacity: 0.25;
}

.buttonGroup {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.baseButton {
  width: 100%;
  height: 50px;
  border: 1px solid #e5e5e5;
  color: rgba(0, 0, 0, 0.5);
  margin: 10px 0;
  border-radius: 8px;
  transition: opacity 0.3s ease;
  align-items: center;
  cursor: pointer;
}

.baseButton:active {
  transform: translateX(-50%) translateY(calc(-80 * 1%)) scale(1.2);
  transform: translateY(calc(1.1 * 1px));
}

.versionInfo {
  font-size: 10px;
  color: #999;
  border-radius: 4px;
  background-color: white;
  padding: 2px 4px;
}

.label {
  padding-left: 8px;
}

.updateButton {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding-right: 8px;
}

/* circle */
.updateButton::before {
  content: "";
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background-color: #5438ff;
  border-radius: 50%;
  z-index: 999;
  opacity: 1;
  transition: 0.3s ease;
}

.updateButton:hover::before {
  width: 0px;
  height: 0px;
  top: 2px;
  right: 2px;
  opacity: 0;
  transition: 0.3s ease-in-out;
}

.addPageButton {
  display: flex;
  justify-content: flex-start;
  padding-left: 8px;
}

.icon {
  margin-right: 12px;
  width: 18px;
  height: 18px;
}

/* halo hover */
.halo {
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.halo::before {
  content: "";
  display: block;
  width: 60%;
  height: 40%;
  position: absolute;
  top: 80%;
  left: 50%;
  background: linear-gradient(
    180deg,
    rgba(50, 26, 206, 0.1) 10%,
    rgba(50, 26, 206, 0.35) 30%,
    rgba(84, 56, 255, 1) 50%
  );
  filter: blur(10px) saturate(1.2);
  transform: translateX(-50%) translateY(calc(0 * 1%)) scale(0);
  transition: 0.3s ease;
  /* safari 兼容 */
  will-change: filter;
}

.halo:hover::before {
  transform: translateX(-50%) translateY(calc(-70 * 1%)) scale(1);
}

/* dot animation */
.particles {
  background-image: var(--svg-animation), var(--svg-animation);
  background-repeat: no-repeat, repeat;
  background-position: center, center top 100%;
  background-size: 100%, 130%;
  -webkit-mask-image: linear-gradient(
    to top,
    transparent,
    black,
    black,
    transparent
  );
  width: 100%;
  height: 100%;
  position: absolute;
}

.particles::before {
  content: "";

  display: block;
  position: absolute;

  width: 100%;
  height: 100%;

  background-image: var(--svg-animation), var(--svg-animation),
    var(--svg-animation);
  background-repeat: no-repeat, repeat, repeat;
  background-position: center, center top 100%, center center;
  background-size: 100% 120%, 150%, 120%;
  filter: blur(1px);

  /* safari 兼容 */
  will-change: filter;
}

.installLabel {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 8px;
}

.updateAvailable {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.label2 {
  padding: 0;
}
</style>
