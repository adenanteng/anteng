<script setup lang="ts">

const why = [
  {
    id: 1,
    icon: 'i-fluent-chat-multiple-heart-20-filled',
    title: 'Hatinya selembut sutra',
    desc: 'Hati-hati, sangat rentan menangis. ouch.',
  },
  {
    id: 2,
    icon: 'i-fluent-surface-earbuds-20-filled',
    title: 'Noise Free',
    desc: 'Kalo ketemu tuh bawaannya damai, nyaman, adem nan tenang.',
  },
  {
    id: 3,
    icon: 'i-fluent-hand-open-heart-20-filled',
    title: 'Mandiri tapi needy',
    desc: 'Aneh kan? iyalah, aku juga bingung kek mana coba.',
  },
  {
    id: 4,
    icon: 'i-fluent-rocket-20-filled',
    title: 'Reliable',
    desc: 'Bisa banget dimintain tolong dan disuruh-suruh. Haha. Unbreakable.',
  },
  {
    id: 5,
    icon: 'i-fluent-speaker-off-20-filled',
    title: 'Can\'t say anything carelessly',
    desc: 'Ingat perkataan apapun, kapanpun, dimanapun, tabik pun, ya pun.',
  },
  {
    id: 6,
    icon: 'i-fluent-animal-cat-20-filled',
    title: 'The groomer',
    desc: 'Senantiasa selalu merawat diri serta doyan vc pacarnya kalo lagi dandan.',
  },

]
</script>

<template>
  <div class="space-y-5" v-aos="['animate__fadeInUpBig']" >
    <h1 class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-3xl hover:animate-bounce">
      Chapter II: Yesterday
    </h1>

    <div class="px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition duration-500">
      Terima kasih banyak untuk ucapan selamat ulang tahunnya ya,
      <span class="font-bold">Kadonya manaaaaaaaa haaaaa!!!</span>
      dan terima kasih juga untuk email-email kamu yang banyak nan panjang lebar itu.
      Aku jadi gak tau harus balesnya kek gimana. Tuhan, tolongin Aden ya tuhan.
    </div>

    <div class="">
      <div class="relative overflow-hidden rounded-3xl pt-64 pb-10 shadow-lg hover:scale-105 transition duration-500">
        <img class="absolute inset-0 h-full w-full object-cover" src="/img/hero3.jpg" alt=""/>
        <div class="absolute inset-0 bg-primary-200 mix-blend-multiply"/>
        <div class="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-75"/>
        <div class="relative px-8">
          <!--                <div>-->
          <!--                  <img class="h-12" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt=""/>-->
          <!--                </div>-->
          <blockquote class="mt-8">
            <div class="relative font-medium text-white md:flex-grow">
              <svg class="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-primary-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
              </svg>
              <p class="relative">
                Kamu itu dari pertama aku kenal emang agak cuek, but at some moment kamutuh clingy dan manja sekali.
                Aku sukaa kamu yang banyak bacot dan bermanja manjahh.
              </p>
            </div>
            <footer class="mt-4">
              <p class="text-sm font-medium text-primary-100">Nurulina Hakim, My Beloved Girlfriend</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>

    <div class="px-5 py-3 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-300 dark:border-gray-600 hover:scale-105 transition duration-500">
      Aku sudah coba sekeras mungkin buat keliatan cuek, tapi ternyata hatiku lembut banget kayak marshmallow, hahaha.
      Seneng deh kalo kamu ngerasa aku peduli. Aku emang berusaha buat bikin kamu bahagia, dan akan terus berusaha untuk itu.
    </div>

    <h3 class="pt-5 text-xl font-semibold text-gray-900 dark:text-white sm:text-xl hover:animate-bounce">
      Cons and Pros of dating Kim
    </h3>

    <div class="grid md:grid-cols-2 gap-5">
      <template v-for="item in why">
        <div class="group bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm px-4 py-4 rounded-3xl border border-gray-300 dark:border-gray-600 hover:scale-105 shadow-lg transition duration-500">
          <div class="grid justify-start items-center gap-2">
            <UIcon :name="item.icon" class="text-6xl text-gray-900 dark:text-gray-100 group-hover:text-primary-600 transition duration-500" />
            <div>
              <h3 class="font-medium text-gray-900 dark:text-white">{{ item.title }}</h3>
              <p class="text-sm text-gray-600 dark:text-gray-300">{{ item.desc }}</p>
            </div>

          </div>
        </div>
      </template>

    </div>

    <div class="relative px-5 py-3 bg-green-600/35 backdrop-blur-sm rounded-3xl shadow-lg hover:scale-105 transition duration-500">
      <UIcon name="i-fluent-shield-error-20-filled" class="text-4xl absolute -top-4 -left-3 transform text-green-600 dark:text-green-600 animate-pulse" />
      Aku sih gapapa ya walaupun cuma keliatan gantengnya seminggu sekali, kalo ganteng tiap hari kasihan Mark gak kamu idolain lagi.
    </div>

  </div>

</template>