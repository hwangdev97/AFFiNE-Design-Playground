<script lang="ts" setup></script>
<template>
  <div class="edgelessToolbarBg">
    <div class="toolbar">
      <div class="selectGroup">
        <BaseButton
          style="margin-right: 9px"
          :icon-bg-ref="`/images/select.svg`"
        />
        <BaseButton :icon-bg-ref="`/images/hand.svg`" />
        <hr class="smallHr" />
        <!-- base -->
        <div class="baseButtonWithSubMenu">
          <div class="baseButton"></div>
          <div class="upArrowButton"></div>
        </div>

        <hr class="largeHr" />
        <div class="edgelessToolGroup">
          <!-- pen & eraser -->
          <div class="penEraserGroup">
            <div class="penGroup">
              <div class="penItem"></div>
              <div class="upArrowButton topCloser"></div>
            </div>

            <div class="eraser"></div>
          </div>

          <div class="edgelessNotes baseHover"></div>
          <div class="shapeTools">
            <div class="shapeTypeButton">
              <svg
                class="shapeBase rectangle"
                width="45"
                height="34"
                viewBox="0 0 45 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="45" height="33.75" rx="1.5" fill="#FFF188" />
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
                <circle cx="20" cy="20" r="20" fill="#FFF188" />
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
                  fill="#FFF188"
                />
                <path
                  d="M24.866 1.5L46.5167 39C46.9016 39.6667 46.4204 40.5 45.6506 40.5H2.34936C1.57956 40.5 1.09844 39.6667 1.48334 39L23.134 1.5C23.5189 0.833333 24.4811 0.833333 24.866 1.5Z"
                  stroke="black"
                  stroke-opacity="0.1"
                />
              </svg>
            </div>
            <div class="upArrowButton top"></div>
          </div>

          <div class="imageNotes baseHover"></div>
          <div class="connectorNotes baseHover"></div>
          <div class="lassoTool baseHover"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.edgelessToolbarBg {
  width: 100%;
  height: 100%;
  background-color: rgb(246, 246, 246);
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-image: radial-gradient(rgb(209, 209, 209) 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;

  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
}

.toolbar {
  height: 64px;
  margin: auto;
  background-color: white;
  border-radius: 32px;
  border: 1px solid #e1e1e1;
  display: flex;
  align-items: center;
  padding: 0px 20px;
}
.selectGroup {
  display: flex;
  align-items: center;
}

.smallHr {
  width: 1px;
  height: 24px;
  border: 0;
  background: #e3e2e4;
  margin: 9px;
}

.largeHr {
  width: 1px;
  height: 64px;
  border: 0;
  background: #e3e2e4;
  margin: 9px;
}

.baseButtonWithSubMenu {
  display: flex;
  align-items: center;
  padding: 0px 4px;
  border-radius: 8px;
}

.baseButtonWithSubMenu:hover,
.upArrowButton:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.baseButtonWithSubMenu:active,
.upArrowButton:active {
  background-color: rgba(0, 0, 0, 0.08);
}

.edgelessToolGroup {
  display: flex;
  align-items: center;
  gap: 18px;
}
.baseButton {
  width: 24px;
  height: 24px;
  background-image: url("/images/page.svg");
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4px;
}

.upArrowButton {
  width: 16px;
  height: 16px;
  border-radius: 4px;
  background-image: url("/images/arrow-down-small.svg");
  background-size: 16px 16px;
  background-position: center;
  background-repeat: no-repeat;
}

.penEraserGroup {
  display: flex;
  align-items: center;
  gap: 10px;
}

.penGroup {
  display: flex;
  align-items: top;
  border-radius: 8px;
}

.topCloser {
  margin-top: 8px;
  margin-left: -8px;
}
.top {
  margin-top: 8px;
}
.penItem {
  width: 40px;
  height: 56px;
  background-image: url("/images/pen.svg");
  background-position: top;
  background-repeat: no-repeat;
  margin-top: 8px;
  transition: all 0.2s ease-in-out;
}
.eraser {
  width: 22px;
  height: 56px;
  background-image: url("/images/eraser.svg");
  background-position: top;
  background-repeat: no-repeat;
  margin-top: 8px;
  transition: all 0.2s ease-in-out;
}

.penItem:hover,
.eraser:hover {
  margin-top: 2px;
  height: 62px;
}

.edgelessNotes {
  width: 50px;
  height: 36px;
  background-image: url("/images/edgeless-tool-bar-notes.svg");
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 8px;
  transition: all 0.2s ease-in-out;
}

.baseHover:hover {
  cursor: pointer;
  transform: scale(1.1);
}
.baseHover:hover::after {
  content: "";
  position: absolute; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;  
  height: 100%; 
  background: rgba(0, 0, 0, 0.04);
  border-radius: 10px;
}

.shapeTools {
  height: 64px;
  display: flex;
  align-items: top;
}

.shapeTypeButton {
  width: 58px;
  height: 48px;
  position: relative;
}

.shapeBase {
  width: 45px;
  height: 45px;
  display: block;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.shapeBase:hover {
  transform: scale(1.1);
}

.rectangle {
  position: absolute;
  top: 10px;
  z-index: 3;
}

.circle {
  position: absolute;
  top: 0;
  left: -10px;
  transform: scale(0.8) rotate(30deg);
  z-index: 2;
}

.triangle {
  position: absolute;
  top: 0;
  left: 18px;
  transform: scale(0.8) rotate(-15deg);
  z-index: 1;
}

.imageNotes {
  width: 50px;
  height: 36px;
  background-image: url("/images/edgeless-tool-bar-image-select.svg");
  background-position: center;
  background-repeat: no-repeat;
  margin-left: -8px;
  transition: all 0.2s ease-in-out;
}

.imageNotes {
  width: 60px;
  height: 48px;
  left: -10px;
  background-image: url("/images/edgeless-tool-bar-image-select.svg");
  background-position: center;
  background-repeat: no-repeat;

  transition: all 0.2s ease-in-out;
}

.connectorNotes {
  width: 60px;
  height: 48px;
  background-image: url("/images/connector.svg");
  background-position: center;

  background-repeat: no-repeat;

  transition: all 0.2s ease-in-out;
}

.lassoTool {
  width: 50px;
  height: 36px;
  background-image: url("/images/lasso-tool.svg");
  background-position: center;
  background-repeat: no-repeat;

  transition: all 0.2s ease-in-out;
}
</style>
