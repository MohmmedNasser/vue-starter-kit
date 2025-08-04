<template>
  <component :is="props.as" :disabled="props.disabled" :href="props.href" :target="props.target" :class="buttonClasses">

    <svg class="size-5 absolute animate-spin" v-if="props.loading" xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
      </path>
    </svg>

    <component :is="props.leftIcon" :class="[
      'w-5 h-5 mr-2',
      props.loading && 'invisible'
    ]" />

    <span :class="[
      props.loading && 'invisible'
    ]">
      <slot />
    </span>

    <component :is="props.rightIcon" :class="[
      'w-5 h-5 ml-2',
      props.loading && 'invisible'
    ]" />
  </component>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority';
import { computed, type FunctionalComponent } from 'vue';


const props = defineProps({
  leftIcon: Object as () => FunctionalComponent<any>,
  rightIcon: Object as () => FunctionalComponent<any>,
  loading: Boolean,
  disabled: Boolean,
  as: {
    type: [String, Object],
    default: 'button',
  },
  href: {
    required: false,
    // If `as` is 'a', this prop is required
    // If `as` is 'button', this prop is not required
    // This is a workaround since Vue does not support conditional required props
    // directly in the type definition
    type: String,
  },
  target: {
    required: false,
    type: String,
  },
  intent: {
    type: String as () => 'primary' | 'secondary' | 'danger' | 'text',
    validator: (value: string) => ['primary', 'secondary', 'danger', 'text'].includes(value),
    default: 'primary',
  }
});

const buttonClasses = computed(() => {
  return cva('inline-flex items-center justify-center text-sm px-3 min-h-[32px] font-semibold py-2 rounded cursor-pointer', {
    variants: {
      intent: {
        primary: 'bg-blue-500 text-background hover:bg-blue-600',
        secondary: 'bg-gray-500 text-background hover:bg-gray-600',
        danger: 'bg-red-500 text-background hover:bg-red-600',
        text: 'bg-transparent text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700',
      },
      disabled: {
        true: 'opacity-50 !cursor-not-allowed',
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  })({
    intent: props.intent,
    disabled: props.disabled,
  })
});


// interface Props {
//   leftIcon?: FunctionalComponent<any>
//   rightIcon?: FunctionalComponent<any>,
//   loading?: boolean,
//   as: string,
// }

// const props = withDefaults(defineProps<Props>(), {
//   as: 'button',
// })

// const props = defineProps<{
//   leftIcon?: FunctionalComponent<any>,
//   rightIcon?: FunctionalComponent<any>,
//   loading?: boolean,
//   as: string,
// }>();


</script>

<style scoped></style>
