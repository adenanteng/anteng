<script setup lang="ts">
import Hero from "~/layouts/hero.vue";

const ktp = '1871035903000003'
const taylor = [
  {
    id: 1,
    name: 'Taylor Swift',
    // desc: '12GB',
    answer: true
  },
  {
    id: 2,
    name: 'Paramore',
    // desc: '16GB',
    answer: false
  },
  {
    id: 3,
    name: 'Tulus',
    // desc: '32GB',
    answer: false
  },
]
const janda = [
  {
    id: 1,
    name: 'Indigo',
    // desc: '12GB',
    answer: false
  },
  {
    id: 2,
    name: 'Hijau Miskin',
    // desc: '16GB',
    answer: false
  },
  {
    id: 3,
    name: 'Janda',
    // desc: '32GB',
    answer: true
  },
]
const language = [
  {
    id: 1,
    name: 'Physical Attack',
    // desc: '12GB',
    answer: false
  },
  {
    id: 2,
    name: 'Quality Time',
    // desc: '16GB',
    answer: false
  },
  {
    id: 3,
    name: 'Word of Affirmation',
    // desc: '32GB',
    answer: true
  },
]
const ludo = [
  {
    id: 1,
    name: 'Mobile Legends',
    // desc: '12GB',
    answer: false
  },
  {
    id: 2,
    name: 'Ludo',
    // desc: '16GB',
    answer: true
  },
  {
    id: 3,
    name: 'PUBG Mobile',
    // desc: '32GB',
    answer: true
  },
]
const fastFood = [
  {
    id: 1,
    img: '/img/KFC.png',
    name: 'KFC',
    desc: 'It\'s Finger Lickin Good',
    answer: false
  },
  {
    id: 2,
    img: '/img/MCD.png',
    name: 'McDonalds',
    desc: 'I\'m Lovin it',
    answer: false
  },
  {
    id: 3,
    img: '/img/RICHEESE.png',
    name: 'Richeese Factory',
    desc: 'Life is GREAT. CHEESE makes it BETTER',
    answer: true
  },
]
const mineral = [
  {
    id: 1,
    img: '/img/LEMINERALE.png',
    name: 'Le Minerale',
    desc: 'Kayak ada manis-manisnya',
    answer: true
  },
  {
    id: 2,
    img: '/img/AQUA.svg',
    name: 'Aqua',
    desc: 'Kemurnian Untuk Masa Depan',
    answer: false
  },
]

const formKtp = ref()
const formTaylor = ref()
const formJanda = ref()
const formLanguage = ref()
const formLudo = ref()
const formFastFood = ref()
const formMineral = ref()

const finish = () => {
  // console.log(formTaylor.value.answer)
  if (formKtp.value==ktp &&
      formTaylor.value.answer &&
      formJanda.value.answer &&
      formLanguage.value.answer &&
      formLudo.value.answer &&
      formFastFood.value.answer &&
      formMineral.value.answer
      )
  {
    console.log('Yeayyyy')
    isTrue.value=true
  } else {
    console.log('Try Again')
    formKtp.value=null
    formTaylor.value=null
    formJanda.value=null
    formLanguage.value=null
    formLudo.value=null
    formFastFood.value=null
    formMineral.value=null
    isFalse.value=true
  }
};

const isTrue = ref(false)
const isFalse = ref(false)

</script>

<template>
  <hero>

    <template #left>
      <h1 class="mt-10 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
        Yang kamu banget!
      </h1>
      <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Ayo kamu pasti bisa, semangat.
      </p>


    </template>

    <template #right>
      <div class="grid gap-8 w-full">
        <div class="">
          <!--          <InputLabel value="NIK" />-->
          <UInput
              v-model="formKtp"
              type="tel"
              size="xl"
              color="primary"
              class="shadow-lg rounded-full bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm transition duration-500 hover:scale-105"
              :ui="{ rounded: 'rounded-full' }"
              placeholder="Masukkan NIK"
              autofocus
          />
        </div>

        <div class="">
          <!--          <InputLabel value="Musisi Favorit" />-->
          <InputRadio
              v-model="formTaylor"
              :options="taylor"
          />
        </div>

        <div class="">
          <InputRadio
              v-model="formJanda"
              :options="janda"
          />
        </div>

        <div class="">
          <InputRadioGrid
              v-model="formMineral"
              :options="mineral"
          />
        </div>

        <div class="">
          <InputRadio
              v-model="formLanguage"
              :options="language"
          />
        </div>

        <div class="">
          <InputRadio
              v-model="formLudo"
              :options="ludo"
          />
        </div>

        <div class="">
          <InputRadioGrid
              v-model="formFastFood"
              :options="fastFood"
          />
        </div>

        <div class="flex justify-end">
          <UButton
              @click="finish()"
              color="primary"
              variant="solid"
              size="xl"
              class="group transition duration-500 hover:scale-105"
              :ui="{ rounded: 'rounded-full' }"
              label="Selesai"
              :disabled="formKtp==null ||
                        formTaylor==null ||
                        formJanda==null ||
                        formLanguage==null ||
                        formLudo==null ||
                        formFastFood==null ||
                        formMineral==null"
          >
            <template #trailing>
              <UIcon name="i-heroicons-chevron-right-20-solid" class="group-hover:ml-10"/>
            </template>
          </UButton>
        </div>
      </div>


    </template>
  </hero>

  <UModal
      v-model="isTrue"
      :ui="{ rounded: 'rounded-3xl' }"
  >
    <div class="p-4 grid justify-center gap-2">
      <UIcon name="i-heroicons-check-circle" class="text-primary text-4xl animate-pulse" />
      <div class="">
        <h3 class="font-medium">Yeayyyyy jawaban kamu benar</h3>
        <p class="text-gray-500 dark:text-gray-200">Kamu berhak mendapat doorprize.</p>
      </div>
      <div class="">
        <UButton
            to="/letter"
            color="primary"
            variant="solid"
            size="xl"
            class="group transition duration-500 hover:scale-105"
            :ui="{ rounded: 'rounded-full' }"
            label="Gasss"
        >
          <template #trailing>
            <UIcon name="i-fluent-arrow-right-20-regular" class="group-hover:ml-10"/>
          </template>
        </UButton>
      </div>

    </div>
  </UModal>

  <UModal
      v-model="isFalse"
      :ui="{ rounded: 'rounded-3xl' }"
  >
    <div class="p-4 grid justify-center gap-2">
      <UIcon name="i-heroicons-exclamation-triangle" class="text-primary text-4xl animate-pulse" />
      <div class="">
        <h3 class="font-medium">Yhaaaaa jawaban kamu salah</h3>
        <p class="text-gray-500 dark:text-gray-200">Yuk coba lagi yuk bisa yuk.</p>
      </div>
    </div>
  </UModal>
</template>