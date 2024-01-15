<script setup lang="ts">

const props = defineProps({
  title: String,
  icon: String,
  img: String,
  class: {
    type: String,
    default: 'grid md:grid-cols-2'
  },
  list: Object
})

</script>

<template>
  <div class="grid gap-5 cursor-default">
    <h1 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
      {{ props.title }}
    </h1>

    <div class="group/a gap-5" :class="props.class">
      <div class="group/b" :class="item.span ? 'col-span-2' : '' " v-for="item in list">
        <div class="flex gap-5 items-center px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700 group-hover/b:scale-105 group-hover/a:opacity-50 group-hover/b:opacity-100 transition duration-500">
          <div class="" v-if="item.img">
            <img :src="item.img" class="w-12 h-12 object-contain" alt="">
          </div>
          <div class="">
            <UIcon v-if="item.icon" :name="item.icon" class="text-5xl text-gray-900 dark:text-white group-hover/b:text-yellow-600 group-hover/b:dark:text-yellow-400 transition duration-500" />
            <div class="">
              <h4 class="text-sm text-gray-900 dark:text-white font-medium">{{ item.subtitle }}</h4>
              <h1 class="text-lg text-gray-900 dark:text-white font-semibold">{{ item.title }}</h1>
              <p class="text-sm text-gray-700 dark:text-gray-400">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>