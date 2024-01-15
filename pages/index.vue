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
  // {
  //   id: 2,
  //   subtitle: 'Javascript',
  //   title: 'Gink Technology',
  //   img: '/img/vendor/ginktech-square.png',
  //   desc: '2d ago',
  // },
  // {
  //   id: 3,
  //   subtitle: 'Javascript',
  //   title: 'Medify',
  //   img: '/img/vendor/medify-square.png',
  //   desc: '2d ago',
  // },
  // {
  //   id: 4,
  //   subtitle: 'Javascript',
  //   title: 'KiriminAja',
  //   img: '/img/vendor/kiriminaja-square.png',
  //   desc: '2d ago',
  // },

]
const experience = [
  {
    id: 1,
    subtitle: 'Full-Stack Web Developer',
    title: 'Waykapay',
    img: '/img/vendor/waykapay-square.png',
    desc: 'Financial Services',
  },
  {
    id: 2,
    subtitle: 'Full-Stack Web Developer',
    title: 'Gink Technology',
    img: '/img/vendor/ginktech-square.png',
    desc: 'Information Technology',
  },
  {
    id: 3,
    subtitle: 'Onsite Programmer',
    title: 'Medify',
    img: '/img/vendor/medify-square.png',
    desc: 'Healthcare',
  },
  {
    id: 4,
    subtitle: 'Front-End Web Developer',
    title: 'KiriminAja',
    img: '/img/vendor/kiriminaja-square.png',
    desc: 'Expedition',
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
  {
    id: 13,
    title: 'Insomnia',
    icon: 'i-simple-icons-insomnia',
  },
]
</script>

<template>
  <hero>

    <template #left>

      <div class="">
<!--        <h3 class="text-lg font-medium text-primary-700 dark:text-primary-200">I'am</h3>-->
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white sm:text-6xl cursor-default">
          Aden Anteng Anugrah
        </h1>
      </div>

      <div class="mt-6 cursor-default">
        <div
            v-aos="['animate__bounceIn']"
            class="relative px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700 hover:scale-105 transition duration-500"
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
        <div class="grid gap-20 my-0 lg:my-28" v-aos="['animate__fadeInUpBig']" >

<!--          <ListGrid-->
<!--              title="Featured works"-->
<!--              :list="project"-->
<!--          />-->

          <ListStack
              title="Working experience"
              :list="experience"
          />

          <ListGrid
              title="Tools & languages"
              class="grid grid-flow-row-dense lg:grid-cols-4 grid-rows-3"
              :list="skill"
          />

          <div class="relative ">
            <div class="bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700 hover:scale-105 transition duration-500">
              <div class="px-5 py-3">
                <h2 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Get in touch</h2>
                <p class="mt-3 ">Feel free to contact me anytime.</p>
                <dl class="mt-8 text-base">
<!--                  <div>-->
<!--                    <dd>-->
<!--                      <p>Lintas Sumatera Street,</p>-->
<!--                      <p>Springfield, OR 12345</p>-->
<!--                    </dd>-->
<!--                  </div>-->
                  <div class="mt-3">
                    <a class="flex items-center" href="https://github.com/adenanteng" target="_blank">
                      <UIcon name="i-simple-icons-github" class="text-2xl text-gray-900 dark:text-white transition duration-500" />
                      <span class="ml-3">adenanteng</span>
                    </a>
                  </div>
                  <div class="mt-3">
                    <a class="flex items-center" href="https://linkedin.com/in/adenanteng/" target="_blank">
                      <UIcon name="i-simple-icons-linkedin" class="text-2xl text-gray-900 dark:text-white transition duration-500" />
                      <span class="ml-3">adenanteng</span>
                    </a>
                  </div>
                  <div class="mt-3">
                    <a class="flex items-center" href="mailto:aden.ant@live.com" target="_blank">
                      <UIcon name="i-simple-icons-gmail" class="text-2xl text-gray-900 dark:text-white transition duration-500" />
                      <span class="ml-3">aden.ant@live.com</span>
                    </a>
                  </div>
                  <div class="mt-3">
                    <a class="flex items-center" href="https://wa.me/6285156875180" target="_blank">
                      <UIcon name="i-simple-icons-whatsapp" class="text-2xl text-gray-900 dark:text-white transition duration-500" />
                      <span class="ml-3">+62 851 5687 5180</span>
                    </a>
                  </div>
                </dl>
<!--                <p class="mt-6 text-base">-->
<!--                  Looking for careers?-->
<!--                  {{ ' ' }}-->
<!--                  <a href="#" class="font-medium text-gray-700 underline">View all job openings</a>.-->
<!--                </p>-->
              </div>

            </div>
          </div>

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