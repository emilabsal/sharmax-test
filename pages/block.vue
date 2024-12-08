<template>
  <div class="container mx-auto px-[20px]">
    <div
      class="mt-[137px] max-sm:mt-0 max-w-[1048px] mx-auto flex-center gap-[27px] flex-col max-sm:items-start"
    >
      <h1 class="header max-sm:text-left">Sharmax Expert Pro 300</h1>
      <p class="text max-sm:text-left">
        A new level of quality in the world of enduro. The Sharmax Expertpro 300
        is one of the most powerful bikes from Sharmax Motors. Responsive and
        reliable, the ExpertPro 300 motorcycle will give you a feeling of
        superiority on any track.
      </p>
      <div class="block flex items-center justify-between gap-4 max-sm:hidden">
        <div
          v-for="item in data?.data"
          :key="item.value"
          class="flex-center flex-col max-w-[176px] gap-[12px]"
        >
          <span class="title">{{ item.value }}</span>
          <div class="bg-divider h-[2px] w-full"></div>
          <p class="text">{{ item.description }}</p>
        </div>
      </div>
    </div>
    <div
      class="relative top-[-80px] grid grid-cols-3 gap-[20px] z-[-1] overflow-hidden max-sm:hidden"
    >
      <div
        v-for="(item, index) in data?.data"
        :key="item.value"
        :class="[
          index === 3
            ? 'col-span-3 order-first w-full rounded-[24px] overflow-hidden'
            : 'w-full overflow-hidden rounded-[24px] object-cover'
        ]"
      >
        <img
          :class="[
            index === 3
              ? 'w-full rounded-[24px] overflow-hidden object-cover w-full max-h-[526px]'
              : 'w-full overflow-hidden rounded-[24px] object-cover w-full max-h-[344px]'
          ]"
          :src="item.img"
          :alt="item.value"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-[10px] sm:hidden mt-[20px]">
      <div
        v-for="(item, index) in data?.data"
        :key="item.value"
        class="flex-center flex-col gap-[10px] bg-block rounded-[12px] aspect-square w-full"
        :class="[
          index === 0 && 'order-1',
          index === 1 && 'order-4',
          index === 2 && 'order-5',
          index === 3 && 'order-8'
        ]"
      >
        <div class="max-w-[120px] flex-center flex-col gap-[10px]">
          <span class="title">{{ item.value }}</span>
          <div class="bg-divider h-[2px] w-full"></div>
          <p class="text">{{ item.description }}</p>
        </div>
      </div>
      <div
        v-for="(item, index) in data?.data"
        :key="item.value"
        :class="[
          index === 0 && 'order-2',
          index === 1 && 'order-3',
          index === 2 && 'order-6',
          index === 3 && 'order-7',
          'aspect-square'
        ]"
      >
        <img
          class="h-full w-full rounded-[12px] object-cover overflow-hidden"
          :src="item.img"
          :alt="item.value"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('data', () =>
  queryContent('/data').findOne()
)
</script>
