<script lang="ts" setup></script>
<template>
  <div>
    #ABC <br/>
    <ContentSlot :use="$slots.description" unwrap="p" />
  </div>
</template>
