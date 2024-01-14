<script setup lang="ts">

import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption
} from "@headlessui/vue";

// defineProps(['modelValue'])
defineEmits(['update:modelValue'])

defineProps({
  title: String,
  options: Object,
  modelValue: Object,
})

</script>

<template>
<!--    :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"-->
    <RadioGroup
        :modelValue="modelValue"
        @update:modelValue="value => $emit('update:modelValue', value)"
    >
      <div class="rounded-3xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm shadow-lg border border-gray-200 dark:border-gray-700 transition duration-500 hover:scale-105">
        <RadioGroupOption
            as="template"
            v-for="(plan, index) in options"
            :key="plan.name"
            :value="plan"
            v-slot="{ active, checked }"
        >
          <div
              :class="[
                    active ? '' : '', checked ? 'bg-primary text-white ' : ' ',
                    index == 0 ? 'rounded-t-3xl' : '',
                    index == options.length - 1 ? 'rounded-b-3xl' : '' ]"
              class="relative flex cursor-pointer px-5 py-3 focus:outline-none">
            <div class="flex w-full items-center justify-between">
              <div class="flex items-center">
                <div class="text-sm">
                  <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900 dark:text-white'"
                      class="font-medium"
                  >
                    {{ plan.name }}
                  </RadioGroupLabel>
                  <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-gray-200' : 'text-gray-500 dark:text-gray-200'"
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