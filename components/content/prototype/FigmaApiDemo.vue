<script lang="ts" setup>
import { Icon } from '@iconify/vue'
import {
  Label,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack
} from 'radix-vue'

import * as Figma from 'figma-api';

/// a figma url: https://www.figma.com/file/hVxJQtEqyv5xw1AbCzc50M/%F0%9F%97%92%EF%B8%8F-AFFiNE-2023?type=design&node-id=10033%3A167720&mode=design&t=fZKNgTd8Kvh7Y7He-1
/// file id: hVxJQtEqyv5xw1AbCzc50M
/// file name: %F0%9F%97%92%EF%B8%8F-AFFiNE-2023
/// node id: 10033%3A167720

const runtimeConfig = useRuntimeConfig();
const figmaToken: Ref<string> = ref("Input your figma token");

const drawUrl: Ref<string> = ref("Input your figma url");
const drawImageUrl: Ref<string> = ref("");


// const figmaPages: Ref<Figma.DOCUMENT[]> = ref([]);
const scaleValue = ref([0.5])

const isLoading: Ref<boolean> = ref(false);

const page: Ref<string> = ref("");
const allPages: Ref<string[]> = ref([]);

// query figma api
const queryFigmaAPI = async () => {
  console.log("querying figma api")
  isLoading.value = true;
  const api = new Figma.Api({ personalAccessToken: apiKey.value });

  api.getFile('hVxJQtEqyv5xw1AbCzc50M', { depth: 1 }).then((file) => {
    // access file data
    console.log(file)
    isLoading.value = false
    allPages.value = file.document.children.map((page) => page.name);
  });
}

// get Image
const drawLink = async () => {
  const api = new Figma.Api({ personalAccessToken: apiKey.value });
  try {
    if (!apiKey.value) {
      throw new Error('apiKey is required');
    }

    const imageResponse = await api.getImage(
      'hVxJQtEqyv5xw1AbCzc50M',
      {
        ids: decodeURIComponent(ids.value) || '',
        format: 'png',
        scale: scaleValue.value?.[0]
      }
    );

    if (!imageResponse.images) {
      throw new Error('No images in response');
    }
    Object.entries(imageResponse.images).forEach(([nodeId, image]) => {
      if (image !== null) {
        console.log(nodeId, image);
        drawImageUrl.value = image
      }
    });

  } catch (error) {
    console.log(error);
  }
}

// get figma token value
const apiKey = computed(() => {
  return runtimeConfig.public.NODE_ENV == "development" ? runtimeConfig.public.FIGMA_TOKEN : figmaToken.value;
});

// get figma node
const ids = computed(() => {
  const regex = /node-id=([^&]+)/;
  const match = drawUrl.value.match(regex);

  if (match && match[1]) {
    console.log(match[1]);
    return match[1];
  } else {
    console.log("No match found");
    return "";
  }
});

const fileId = computed(() => {
  const regex = /file\/(.*?)\//;
  const match = drawUrl.value.match(regex);
  return match ? match[1] : null;

})

</script>
<template>
  <div class="w-full h-full bg-yellow/2 m-auto">
    <!-- input -->
    <div class=" flex flex-wrap items-center gap-[15px] p-5">
      <Label class="text-[15px] font-semibold leading-[35px] text-gray-500" for="figmaToken"> Figma Token </Label>
      <input id="figmaToken"
        class=" 
      bg-gray1 
      shadow-yellow3 inline-flex h-[35px] w-[500px] appearance-none items-center justify-center rounded-[8px] px-[10px] text-[16px] text-gray5  outline-none focus:shadow-[0_0_0_2px_gray] selection:color-white selection:bg-yellow5"
        type="text" v-model="figmaToken">
      <!-- button -->
      <div
        class="h-[35px] w-[104px] bg-yellow5 select-none text-white flex items-center justify-center rounded-[8px] active:bg-yellow6 "
        @click="queryFigmaAPI">
        Get All Pages
      </div>

    </div>
    <div class="bg-gray1">
      <div v-if="isLoading">Loading</div>
      <div v-else-if="allPages.length == 0">
        EMPTY
      </div>
      <div v-else>
        <SelectRoot v-model="page">
          <SelectTrigger
            class="inline-flex w-[250px] items-center justify-between rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-grass11    hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-yellow9 outline-none"
            aria-label="Customise options">
            <SelectValue placeholder="Select a page..." />
            <Icon icon="radix-icons:chevron-down" class="h-3.5 w-3.5" />
          </SelectTrigger>

          <SelectPortal>
            <SelectContent
              class="w-[250px] bg-white rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              :side-offset="5" position="popper">

              <SelectScrollUpButton
                class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                <Icon icon="radix-icons:chevron-up" />
              </SelectScrollUpButton>
              <SelectLabel class="px-[25px] text-xs leading-[25px] text-mauve11">
                Page
              </SelectLabel>
              <SelectGroup>
                <SelectItem v-for="(option, index) in allPages" :key="index"
                  class="text-[13px] leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-yellow9 data-[highlighted]:text-yellow1"
                  :value="option">
                  <SelectItemIndicator class="absolute left-0 w-[25px] inline-flex items-center justify-center">
                    <Icon icon="radix-icons:check" />
                  </SelectItemIndicator>
                  <SelectItemText>
                    {{ option }}
                  </SelectItemText>
                </SelectItem>
              </SelectGroup>


            </SelectContent>

          </SelectPortal>

        </SelectRoot>
      </div>
    </div>
    <!-- figma preview -->
    <!-- https://www.figma.com/file/hVxJQtEqyv5xw1AbCzc50M/%F0%9F%97%92%EF%B8%8F-AFFiNE-2023?type=design&node-id=5729%3A121146&mode=design&t=fZKNgTd8Kvh7Y7He-1 -->



    <hr />

    <div class=" flex flex-wrap items-center gap-[15px] p-5">
      <Label class="text-[15px] font-semibold leading-[35px] text-gray-500" for="figmaToken"> Figma URL </Label>
      <input id="figmaToken"
        class=" 
      bg-gray1 
      shadow-yellow3 inline-flex h-[35px] w-[500px] appearance-none items-center justify-center rounded-[8px] px-[10px] text-[16px] text-gray5  outline-none focus:shadow-[0_0_0_2px_gray] selection:color-white selection:bg-yellow5"
        type="text" v-model="drawUrl">
      <!-- button -->
      <div
        class="h-[35px] w-[104px] bg-yellow5 select-none text-white flex items-center justify-center rounded-[8px] active:bg-yellow6 "
        @click="drawLink">
        Draw
      </div>

    </div>

    <SliderRoot v-model="scaleValue" class="relative flex items-center select-none touch-none w-[200px] h-5" :max="4"
      :min="0.001" :step="0.1">
      <SliderTrack class="bg-yellow1 relative grow rounded-full h-[3px]">
        <SliderRange class="absolute bg-yellow rounded-full h-full" />
      </SliderTrack>
      <SliderThumb
        class="block w-5 h-5 bg-yellow shadow-[0_2px_10px] shadow-blackA1 rounded-[10px] hover:bg-yellow5 focus:outline-none focus:shadow-[0_0_0_5px] focus:shadow-yellow"
        aria-label="Volume" />

    </SliderRoot>
    Scale: {{ scaleValue }}

    <img v-if="drawImageUrl" :src="drawImageUrl" class="w-[800px], h-[800px]" />


  </div>
</template>
<style scoped></style>