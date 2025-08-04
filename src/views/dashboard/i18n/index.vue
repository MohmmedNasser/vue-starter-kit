<template>
  <div>
    <!-- <select v-model="locale">
      <option :value="lang" v-for="lang, index in availableLocales" :key="`locale-${lang}`">{{ lang }}</option>
    </select> -->

    <div class="flex justify-center items-center">
      <Select v-model="locale">
        <SelectTrigger class="w-[180px]">
          <SelectValue placeholder="Select a Languages" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem :value="lang" v-for="lang, index in availableLocales" :key="`locale-${lang}`">
              {{ lang }}
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <div class="mt-5">
      <h1 class="text-4xl my-8">Lang : {{ locale }}</h1>
      <h5> {{ t('greet') }}</h5>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
const { locale, availableLocales } = useI18n({ useScope: 'global' });
const { t } = useI18n({ useScope: 'global' });


</script>

<style scoped></style>
