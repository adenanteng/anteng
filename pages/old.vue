<script setup lang="ts">
import Hero from "~/layouts/hero.vue";

</script>

<template>
  <hero>

    <template #left>
      <div class="">
        <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          Selamat Datang, Nurulina Hakim!
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Yuk verifikasi dulu dirimu.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <UButton
              to="/inquiry"
              color="primary"
              variant="solid"
              size="xl"
              class="group transition duration-500 hover:scale-105"
              :ui="{ rounded: 'rounded-full' }"
              label="Mulai"
          >
            <template #trailing>
              <UIcon name="i-fluent-arrow-right-20-regular" class="group-hover:ml-10"/>
            </template>
          </UButton>
        </div>
      </div>

    </template>

    <template #right>
      <div class="fixed">
        <div class="max-w-3xl flex-none sm:max-w-5xl ">
          <div class="">
            <Swiper
                :modules="[SwiperAutoplay, SwiperEffectCreative]"
                :slides-per-view="1"
                :loop="true"
                :effect="'creative'"
                :autoplay="{
              delay: 5000,
              disableOnInteraction: true,
            }"
                :creative-effect="{
              prev: {
                shadow: false,
                translate: ['-0%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }"
            >
              <SwiperSlide v-for="slide in 3" :key="slide" class="rounded-3xl">
                <div class="">
                  <img :src="'/img/hero'+slide+'.jpg'" alt="" class="w-[65rem] rounded-3xl shadow-2xl"/>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

    </template>
  </hero>
</template>