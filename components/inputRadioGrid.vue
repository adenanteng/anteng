<script setup lang="ts">
import { ref } from 'vue'

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue'

defineEmits(['update:modelValue'])

defineProps({
  title: String,
  options: Object,
  modelValue: Object,
})

</script>

<template>
  <RadioGroup
      :modelValue="modelValue"
      @update:modelValue="value => $emit('update:modelValue', value)"
  >
        <div class="grid grid-cols-2 gap-5">
          <RadioGroupOption
              as="template"
              v-for="(plan, index) in options"
              :key="plan.name"
              :value="plan"
              v-slot="{ active, checked }"
          >
            <div
                :class="[
                  active ? '' : '' , checked ? 'bg-primary text-white border border-primary' : 'border border-gray-200 dark:border-gray-700',
                ]"
                class="relative flex cursor-pointer px-5 py-4 rounded-3xl backdrop-blur-sm shadow-lg transition duration-500 hover:scale-105"
            >
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center">
                  <div class="text-sm">
                    <img :src="plan.img" class="h-16" alt="">
                    <RadioGroupLabel
                        as="p"
                        :class="checked ? 'text-white' : 'text-gray-900 dark:text-white'"
                        class="font-medium mt-3"
                    >
                      {{ plan.name }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                        as="span"
                        :class="checked ? 'text-primary-100' : 'text-gray-500 dark:text-gray-300'"
                        class="inline"
                    >
                      {{ plan.desc }}
                    </RadioGroupDescription>
                  </div>
                </div>
                <div v-show="checked" class="shrink-0 text-white">
                  <UIcon name="i-heroicons-check-circle" class="text-2xl" />
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
  </RadioGroup>
</template>