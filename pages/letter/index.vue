<script setup lang="ts">
import Hero from "~/layouts/hero.vue";

// const { $anime } = useNuxtApp()

const tab = ref(1)

onMounted(() => {
  // $anime({ targets: '.title', translateY: 250, duration: 800 })
})

const activity = [
  {
    id: 1,
    title: 'Chapter I',
    icon: 'i-fluent-home-20-filled',
    desc: '2d ago',
  },
  {
    id: 2,
    title: 'Chapter II',
    icon: 'i-fluent-animal-turtle-20-filled',
    desc: '2d ago',
  },
  {
    id: 3,
    title: 'Chapter III',
    icon: 'i-fluent-access-time-20-filled',
    desc: '2d ago',
  },
  {
    id: 4,
    title: 'Chapter IV',
    icon: 'i-fluent-rocket-20-filled',
    desc: '2d ago',
  },

]

const changeTab = (value: number) => {
  tab.value = value
  window.scrollTo(0, 0)
}

const upTab = () => {
  tab.value--
  window.scrollTo(0, 0)
}

const downTab = () => {
  tab.value++
  window.scrollTo(0, 0)
}


</script>

<template>
  <hero>

    <template #left>

      <!--      <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">-->
      <!--        The Story of Us-->
      <!--      </h1>-->

      <div class="mt-6 ">
        <iframe
            class="rounded-3xl shadow-lg transition duration-500"
            src="https://open.spotify.com/embed/track/7vBlnGdfOLzVEqiOQQxeU8?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowfullscreen="allowfullscreen"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        ></iframe>

        <!--        allowfullscreen="allowfullscreen"-->
        <!--        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"-->
      </div>

      <div class="mt-6">
        <div
            v-if="tab==1"
            v-aos="['animate__bounceIn']"
            class="relative px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition duration-500"
        >
          <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
          <p>
            Ini lagunya di play duluuuuuu, aku tau lirik lagu ini enggak relate untuk kita. But, this is Taylor Swift 🥵
          </p>
        </div>

        <div
            v-if="tab==2"
            v-aos="['animate__bounceIn']"
            class="relative px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition duration-500"
        >
          <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
          <p>
            Darkmodenya jangan lupa di idupin, ini kan temanya rasi bintang ⭐️⭐️⭐️
          </p>
        </div>

        <div
            v-if="tab==3"
            v-aos="['animate__bounceIn']"
            class="relative px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition duration-500"
        >
          <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
          <p>
            Ehh ternyata kalo mood kamu lagi ga bagus ngeselin juga ya, huh menyebalkan sekali 😤
          </p>
        </div>

        <div
            v-if="tab==4"
            v-aos="['animate__bounceIn']"
            class="relative px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition duration-500"
        >
          <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
          <p>
            Aku tau tulisan ini udah telat, expired-nya udah kelamaan. Tapi, semoga kamu gak kecewa bacanya.
          </p>
        </div>
      </div>

<!--      <div class="mt-6 hidden lg:block">-->
<!--        <div class="flow-root">-->
<!--          <ul role="list" class="-mb-8">-->
<!--            <li v-for="(activityItem, activityItemIdx) in activity" :key="activityItem.id">-->
<!--              <div class="relative pb-8">-->
<!--                <span v-if="activityItemIdx !== activity.length - 1"-->
<!--                      class="absolute top-5 left-6 -ml-px h-full w-0.5 bg-gray-500" aria-hidden="true"/>-->
<!--                <div class="relative flex items-center space-x-3">-->
<!--                  <div>-->
<!--                    <div class="relative px-1">-->
<!--                      <div-->
<!--                          class="flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-gray-900 border border-gray-500">-->
<!--                        <UIcon :name="activityItem.icon" class="text-2xl"-->
<!--                               :class="tab==activityItem.id ? 'text-primary-700 dark:text-white' : 'text-gray-600 dark:text-gray-400' "/>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                  <div class="min-w-0 flex-1 py-1.5">-->
<!--                    <div class="">-->
<!--                      <button-->
<!--                          @click="changeTab(activityItem.id)"-->
<!--                          class="font-medium transition duration-1000"-->
<!--                          :class="tab==activityItem.id ? 'text-primary-700 dark:text-white font-semibold text-lg' : 'text-gray-900 dark:text-white hover:text-primary-700 text-lg' "-->
<!--                      >-->
<!--                        {{ activityItem.title }}-->
<!--                      </button>-->

<!--                      {{ ' ' }}-->
<!--                      &lt;!&ndash;                        <span class="whitespace-nowrap text-gray-500">{{ activityItem.desc }}</span>&ndash;&gt;-->
<!--                    </div>-->
<!--                  </div>-->

<!--                </div>-->
<!--              </div>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </div>-->

    </template>

    <template #right>
<!--      <ClientOnly>-->
        <div class="grid gap-20">

          <div class="w-full flex justify-center">
            <button class="font-medium animate-pulse" @click="upTab" v-if="tab!=1">
              <UIcon name="i-fluent-chevron-up-20-filled"/>
              <p class="-mt-2">Sebelumnya</p>
            </button>
          </div>

          <Chapter1 v-if="tab==1"/>
          <Chapter2 v-if="tab==2"/>
          <Chapter3 v-if="tab==3"/>
          <Chapter4 v-if="tab==4"/>


          <!--        <div class="max-w-3xl flex-none sm:max-w-5xl">-->
          <!--          <img src="/img/hero1.jpg" alt="" class="w-[65rem] rounded-3xl shadow-2xl"/>-->
          <!--        </div>-->

          <div class="w-full flex justify-center">
            <button class="font-medium animate-pulse" @click="downTab" v-if="tab!=4">
              <p class="">Selanjutnya</p>
              <UIcon name="i-fluent-chevron-down-20-filled"/>
            </button>
          </div>
        </div>

<!--      </ClientOnly>-->
    </template>
  </hero>

</template>