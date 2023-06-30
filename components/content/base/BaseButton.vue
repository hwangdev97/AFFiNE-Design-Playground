<script lang="ts" setup>
const props = defineProps({
  iconBgRef: {
    type: String,
    default: "",
  },
});
</script>
<template>
  <div class="icon" :style="{ backgroundImage: `url(${props.iconBgRef})` }">
  </div>
</template>

<style scoped>
.icon {
  width: 24px;
  height: 24px;
  background-size: 24px 24px;
  background-position: center;
  background-repeat: no-repeat;
  padding: 4px;
  border-radius: 8px;
}

.icon:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.04);
}

.icon:active {
  background-color: rgba(0, 0, 0, 0.08);
}
</style>
