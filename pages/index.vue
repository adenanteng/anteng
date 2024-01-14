<script setup lang="ts">
import Hero from "~/layouts/hero.vue";

// const { $anime } = useNuxtApp()

const tab = ref(1)

onMounted(() => {
  // $anime({ targets: '.title', translateY: 250, duration: 800 })
})

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

const project = [
  {
    id: 1,
    subtitle: 'Javascript',
    title: 'Waykapay',
    img: '/img/vendor/waykapay-square.png',
    desc: 'Full-Stack Web Developer',
  },
  {
    id: 2,
    subtitle: 'Javascript',
    title: 'Gink Technology',
    img: '/img/vendor/ginktech-square.png',
    desc: '2d ago',
  },
  {
    id: 3,
    subtitle: 'Javascript',
    title: 'Medify',
    img: '/img/vendor/medify-square.png',
    desc: '2d ago',
  },
  {
    id: 4,
    subtitle: 'Javascript',
    title: 'KiriminAja',
    img: '/img/vendor/kiriminaja-square.png',
    desc: '2d ago',
  },

]
const experience = [
  {
    id: 1,
    subtitle: 'Full-Stack Web Developer',
    title: 'Waykapay',
    img: '/img/vendor/waykapay-square.png',
    desc: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    subtitle: 'Full-Stack Web Developer',
    title: 'Gink Technology',
    img: '/img/vendor/ginktech-square.png',
    desc: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    subtitle: 'Onsite Programmer',
    title: 'Medify',
    img: '/img/vendor/medify-square.png',
    desc: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    subtitle: 'Front-End Web Developer',
    title: 'KiriminAja',
    img: '/img/vendor/kiriminaja-square.png',
    desc: 'Lorem ipsum dolor sit amet',
  },

]
const skill = [
  {
    id: 1,
    title: 'Tailwind CSS',
    icon: 'i-simple-icons-tailwindcss',
    span: true
  },
  {
    id: 2,
    title: 'Javascript',
    icon: 'i-simple-icons-javascript',
  },
  {
    id: 3,
    title: 'Typescript',
    icon: 'i-simple-icons-typescript',
  },
  {
    id: 4,
    title: 'Alpine Js',
    icon: 'i-simple-icons-alpinedotjs',
  },
  {
    id: 5,
    title: 'Vue Js',
    icon: 'i-simple-icons-vuedotjs',
  },
  {
    id: 6,
    title: 'Nuxt Js',
    icon: 'i-simple-icons-nuxtdotjs',
    span: true
  },
  {
    id: 7,
    title: 'Inertia Js',
    icon: 'i-simple-icons-inertia',
  },
  {
    id: 8,
    title: 'Pusher',
    icon: 'i-simple-icons-pusher',
  },
  {
    id: 9,
    title: 'Redis',
    icon: 'i-simple-icons-redis',
  },
  {
    id: 10,
    title: 'Laravel',
    icon: 'i-simple-icons-laravel',
    span: true
  },
  {
    id: 11,
    title: 'Docker',
    icon: 'i-simple-icons-docker',
  },
  {
    id: 12,
    title: 'Git',
    icon: 'i-simple-icons-git',
  },
]
</script>

<template>
  <hero>

    <template #left>

      <div class="">
<!--        <h3 class="text-lg font-medium text-primary-700 dark:text-primary-200">I'am</h3>-->
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl hover:animate-bounce cursor-pointer">
          Aden Anteng Anugrah
        </h1>
      </div>

      <div class="mt-6 cursor-pointer">
        <div
            v-aos="['animate__bounceIn']"
            class="relative px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition duration-500"
        >
          <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600 dark:text-gray-300" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
          </svg>
          <p>
            A full-stack web developer, dedicated to building and improving beautiful websites and web
            apps that stand out, with advanced designs, optimized functionality and complete user experience.
          </p>
        </div>

      </div>

    </template>

    <template #right>
<!--      <ClientOnly>-->
        <div class="grid gap-20 mt-0 lg:mt-40">

          <ListGrid
              title="Featured Works"
              :list="project"
          />

          <ListStack
              title="Working Experience"
              class="grid divide-y divide-gray-300 dark:divide-gray-700"
              :list="experience"
          />

          <ListGrid
            title="Tools & Languages"
            class="grid grid-flow-row-dense lg:grid-cols-4 grid-rows-3"
            :list="skill"
          />

<!--          <div class="w-full flex justify-center">-->
<!--            <button class="font-medium animate-pulse" @click="upTab" v-if="tab!=1">-->
<!--              <UIcon name="i-fluent-chevron-up-20-filled"/>-->
<!--              <p class="-mt-2">Sebelumnya</p>-->
<!--            </button>-->
<!--          </div>-->

<!--          <Chapter1 v-if="tab==1"/>-->
<!--          <Chapter2 v-if="tab==2"/>-->
<!--          <Chapter3 v-if="tab==3"/>-->
<!--          <Chapter4 v-if="tab==4"/>-->


          <!--        <div class="max-w-3xl flex-none sm:max-w-5xl">-->
          <!--          <img src="/img/hero1.jpg" alt="" class="w-[65rem] rounded-3xl shadow-2xl"/>-->
          <!--        </div>-->

<!--          <div class="w-full flex justify-center">-->
<!--            <button class="font-medium animate-pulse" @click="downTab" v-if="tab!=4">-->
<!--              <p class="">Selanjutnya</p>-->
<!--              <UIcon name="i-fluent-chevron-down-20-filled"/>-->
<!--            </button>-->
<!--          </div>-->
        </div>

<!--      </ClientOnly>-->
    </template>
  </hero>

</template>