<script setup lang="ts">
import type { Container } from 'tsparticles-engine'

useSeoMeta({
  title: 'Aden Anteng',
  ogTitle: 'Resume of Aden Anteng',
  description: 'Lorem ipsum dolor sit amet.',
  ogDescription: 'Lorem ipsum dolor sit amet.',
  ogImage: 'https://onlykim.vercel.app/img/hero1.jpg',
  twitterCard: 'summary_large_image',
})

// See tsParticles documentation for all available options
const options = {
  background: {
    // color: {
    //   value: '#0d47a1'
    // }
  },
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: 'push'
      // },
      onHover: {
        enable: true,
        mode: 'repulse'
      },
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      // value: ['#9333ea', '#dc2626', '#facc15']
      value: ['#9333ea']
    },
    // links: {
    //   // color: ['#9333ea', '#dc2626', '#facc15'],
    //   color: ['#9333ea'],
    //   distance: 150,
    //   enable: true,
    //   opacity: 0.5,
    //   width: 1
    // },
    move: {
      direction: 'none',
      enable: true,
      outModes: 'bounce',
      random: false,
      speed: 0.3,
      straight: false
    },
    number: {
      density: {
        enable: true,
      },
      value: 80
    },
    opacity: {
      value: 1
    },
    shape: {
      type: 'circle'
    },
    size: {
      value: { min: 1, max: 6 }
    }
  },
  detectRetina: true
}

const onLoad = (container: Container) => {
  // Do something with the container
  container.pause()
  setTimeout(() => container.play(), 0)
}

const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})

const { x, y } = useMouse()
const { width, height } = useWindowSize()

const dx = computed(() => Math.abs(x.value - width.value / 2))
const dy = computed(() => Math.abs(y.value - height.value / 2))
const distance = computed(() =>
    Math.sqrt(dx.value * dx.value + dy.value * dy.value)
)

const size = computed(() => Math.max(300 - distance.value / 3, 160))
const opacity = computed(() => Math.min(Math.max(size.value / 300, 0.7), 1))

// const logo = ref<HTMLElement>()
// const logoGradient = computed(() => {
//   let rect = logo.value?.getBoundingClientRect()
//   const xPos = x.value - (rect?.left ?? 0)
//   const yPos = y.value - (rect?.top ?? 0)
//
//   return `radial-gradient(circle at ${xPos}px ${yPos}px, black 30%, transparent 100%)`
// })

onMounted(() => {
  // play()
})
</script>

<template>
  <div class="relative isolate overflow-hidden bg-white dark:bg-gray-900 min-h-screen transition duration-500">
<!--    <div class="fixed inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">-->
<!--      <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 dark:from-primary-500 dark:to-primary-700 opacity-75 sm:left-[calc(50%-30rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>-->
<!--    </div>-->

    <div
        class="absolute bg-yellow-400 -z-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none blur-2xl"
        :style="{
        opacity,
        left: `${x}px`,
        top: `${y}px`,
        width: `${size}px`,
        height: `${size}px`
      }"
    />

    <div class="fixed inset-x-0 -top-20 -z-10 transform-gpu" aria-hidden="true">
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
        <circle cx="512" cy="512" r="512" fill="#9333ea" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
    </div>

    <div class="fixed inset-x-0 -bottom-32 -z-10 transform-gpu overflow-hidden blur-3xl " aria-hidden="true">
      <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[72.1875rem] -translate-x-1/2 bg-gradient-to-tr from-primary-200 to-primary-400 dark:from-primary-500 dark:to-primary-700 opacity-75 sm:left-[calc(50%+36rem)]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div>
    </div>

    <NuxtParticles
        id="tsparticles"
        :options="options"
        @load="onLoad"
    />

<!--    <div class="mx-auto max-w-7xl ">-->
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-5 lg:space-x-10 overflow-hidden py-28">
        <div class="lg:col-span-2 px-10 py-5 ">
          <div class="lg:fixed lg:top-0 lg:bottom-0 grid items-center" >
            <div class="lg:max-w-sm xl:max-w-lg">
              <ClientOnly>
                <button
                    @click="isDark = !isDark"
                    class="hover:scale-110 rounded-full p-3 transition duration-500"
                >
                  <UIcon
                      :name="isDark ? 'i-fluent-weather-moon-20-filled' : 'i-fluent-weather-sunny-20-filled'"
                      class="text-4xl text-primary-600 hover:text-white"
                  />
                </button>
              </ClientOnly>

<!--              <a-->
<!--                  ref="logo"-->
<!--                  href="https://learnvue.co"-->
<!--                  :style="{-->
<!--                    maskImage: logoGradient-->
<!--                  }"-->
<!--              >-->
<!--                <LazyLogo />-->
<!--              </a>-->

              <slot name="left" />
            </div>
          </div>
        </div>

        <div class="lg:col-span-3 px-10 py-7 ">
            <slot name="right" />
        </div>
      </div>

<!--    </div>-->
  </div>
</template>