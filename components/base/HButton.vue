<script lang="ts" setup>
import { Icon } from '@iconify/vue'
const props = defineProps({
  icon: {
    type: String,
    default: "",
  },
  rightIcon: {
    type: String,
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  style: {
    type: HButtonStyle,
    default: "button",
  },
  size: {
    type: HButtonSize,
    default: "medium",
  },
});


</script>
<template>
  <div>
    <Icon v-if="props.icon" :icon="props.icon" class="h-3.5 w-3.5" >
    </Icon>
    <Button>
      {{ props.label }}
    </Button>
    <Icon v-if="props.rightIcon" :icon="props.rightIcon" class="h-3.5 w-3.5" >
    </Icon>
  </div>
</template>