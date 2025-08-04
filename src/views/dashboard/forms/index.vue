<template>
  <form @submit.prevent="onSubmit">
    <div class="space-y-12">
      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base/7 font-semibold text-gray-900">Profile</h2>
        <p class="mt-1 text-sm/6 text-gray-600">This information will be displayed publicly so be careful what you
          share.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-4">
            <label for="username" class="block text-sm/6 font-medium text-gray-900">Username</label>
            <div class="mt-2">
              <div
                class="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <div class="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">workcation.com/</div>
                <input type="text" name="username" id="username"
                  class="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  placeholder="janesmith" v-model="username" />
              </div>
              <p v-if="errors.username" class="text-red-500 text-sm mt-1">{{ errors.username }}</p>
            </div>
          </div>

          <div class="col-span-full">
            <label for="about" class="block text-sm/6 font-medium text-gray-900">About</label>
            <div class="mt-2">
              <textarea name="about" id="about" rows="3" v-model="about"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p class="mt-3 text-sm/6 text-gray-600">Write a few sentences about yourself.</p>
            <p v-if="errors.about" class="text-red-500 text-sm mt-1">{{ errors.about }}</p>

          </div>

          <!-- <div class="col-span-full">
            <label for="photo" class="block text-sm/6 font-medium text-gray-900">Photo</label>
            <div class="mt-2 flex items-center gap-x-3">
              <CircleUser class="size-12 text-gray-300" aria-hidden="true" />
              <button type="button"
                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">Change</button>
            </div>
          </div> -->

          <div class="col-span-full">

            <div class="flex items-center gap-x-3">
              <img v-if="previewUrl" :src="previewUrl" alt="Preview" class="h-12 w-12 rounded-full object-cover" />

              <div v-else class="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                <svg class="h-6 w-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>

              <button type="button" @click="triggerFileInput"
                class="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">Change</button>
            </div>

            <input type="file" ref="fileInput" class="hidden" @change="onFileChange" />
            <p v-if="errors.file" class="text-red-500 text-sm mt-2">{{ errors.file }}</p>

          </div>


        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base/7 font-semibold text-gray-900">Personal Information</h2>
        <p class="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

        <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div class="sm:col-span-3">
            <label for="first-name" class="block text-sm/6 font-medium text-gray-900">First name</label>
            <div class="mt-2">
              <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="firstName"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
          </div>

          <div class="sm:col-span-3">
            <label for="last-name" class="block text-sm/6 font-medium text-gray-900">Last name</label>
            <div class="mt-2">
              <input type="text" name="last-name" id="last-name" autocomplete="family-name" v-model="lastName"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>

          </div>

          <div class="sm:col-span-4">
            <label for="email" class="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" v-model="email"
                class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
            <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>

          </div>

          <div class="sm:col-span-3">
            <label for="country" class="block text-sm/6 font-medium text-gray-900">Country</label>
            <div class="mt-2 grid grid-cols-1">
              <select id="country" name="country" autocomplete="country-name" v-model="country"
                class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
              <ChevronsDown
                class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                aria-hidden="true" />
            </div>
            <p v-if="errors.country" class="text-red-500 text-sm mt-1">{{ errors.country }}</p>

          </div>

        </div>
      </div>

      <div class="border-b border-gray-900/10 pb-12">
        <h2 class="text-base/7 font-semibold text-gray-900">Notifications</h2>
        <p class="mt-1 text-sm/6 text-gray-600">We'll always let you know about important changes, but you pick what
          else you want to hear about.</p>

        <div class="mt-10 space-y-10">
          <fieldset>
            <legend class="text-sm/6 font-semibold text-gray-900">By email</legend>
            <div class="mt-6 space-y-6">
              <div class="flex gap-3">
                <div class="flex h-6 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input id="comments" name="notifications" value="comments" :checked="comments"
                      @change="(e) => { if (e.target) comments = (e.target as HTMLInputElement).checked }"
                      aria-describedby="comments-description" type="checkbox"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div class="text-sm/6">
                  <label for="comments" class="font-medium text-gray-900">Comments</label>
                  <p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a
                    posting.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="flex h-6 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input id="candidates" name="notifications" value="candidates" :checked="candidates"
                      @change="(e) => { if (e.target) candidates = (e.target as HTMLInputElement).checked }"
                      aria-describedby="candidates-description" type="checkbox"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div class="text-sm/6">
                  <label for="candidates" class="font-medium text-gray-900">Candidates</label>
                  <p id="candidates-description" class="text-gray-500">Get notified when a candidate applies for a job.
                  </p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="flex h-6 shrink-0 items-center">
                  <div class="group grid size-4 grid-cols-1">
                    <input id="offers" name="notifications" value="offers" :checked="offers"
                      @change="(e) => { if (e.target) offers = (e.target as HTMLInputElement).checked }"
                      aria-describedby="offers-description" type="checkbox"
                      class="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 indeterminate:border-indigo-600 indeterminate:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto" />
                    <svg
                      class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white group-has-disabled:stroke-gray-950/25"
                      viewBox="0 0 14 14" fill="none">
                      <path class="opacity-0 group-has-checked:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                      <path class="opacity-0 group-has-indeterminate:opacity-100" d="M3 7H11" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
                <div class="text-sm/6">
                  <label for="offers" class="font-medium text-gray-900">Offers</label>
                  <p id="offers-description" class="text-gray-500">Get notified when a candidate accepts or rejects an
                    offer.</p>
                </div>
              </div>
            </div>


            <div v-if="checkboxError" class="text-red-500 text-sm mt-1">
              <p class="text-red-500 text-sm">{{ checkboxError }}</p>
            </div>
            <!-- <p v-if="errors.notifications" class="text-red-500 text-sm mt-1">{{ errors.notifications }}</p> -->

          </fieldset>

          <fieldset>
            <legend class="text-sm/6 font-semibold text-gray-900">Push notifications</legend>
            <p class="mt-1 text-sm/6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
            <div class="mt-6 space-y-6">
              <div class="flex items-center gap-x-3">
                <input id="push-everything" name="push-notifications" type="radio" value="everything"
                  v-model="pushNotifications"
                  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="push-everything" class="block text-sm/6 font-medium text-gray-900">Everything</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="push-email" name="push-notifications" type="radio" value="same_as_email"
                  v-model="pushNotifications"
                  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="push-email" class="block text-sm/6 font-medium text-gray-900">Same as email</label>
              </div>
              <div class="flex items-center gap-x-3">
                <input id="push-nothing" name="push-notifications" type="radio" value="no_push"
                  v-model="pushNotifications"
                  class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden" />
                <label for="push-nothing" class="block text-sm/6 font-medium text-gray-900">No push
                  notifications</label>
              </div>
            </div>
            <p v-if="errors.pushNotifications" class="text-red-500 text-sm mt-1">{{ errors.pushNotifications }}</p>

          </fieldset>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center justify-end gap-x-6">
      <customButton type="submit" class="w-[100px] h-11">Save</customButton>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ChevronsDown } from 'lucide-vue-next';
import { useForm } from 'vee-validate';
import z from 'zod';
import { toTypedSchema } from '@vee-validate/zod';
import { computed, ref } from 'vue';
import { profileSchema } from '../../../lib/validations';
import customButton from '@/components/custom/Button.vue';


const fileInput = ref<HTMLInputElement | null>(null);
const previewUrl = ref<string | null>(null);

const { handleSubmit, errors, defineField, setFieldValue } = useForm({
  validationSchema: toTypedSchema(profileSchema),
  initialValues: {
    comments: true,
    candidates: false,
    offers: false,
  }
});

const [username] = defineField("username");
const [about] = defineField("about");
const [file] = defineField("file");
const [firstName] = defineField("firstName");
const [lastName] = defineField("lastName");
const [email] = defineField("email");
const [country] = defineField("country");
const [comments] = defineField('comments');
const [candidates] = defineField('candidates');
const [offers] = defineField('offers');
const [pushNotifications] = defineField("pushNotifications");

const checkboxError = computed(() => {
  if (!comments.value && !candidates.value && !offers.value) {
    return "At least one notification type must be selected";
  }
  return null;
});

function triggerFileInput() {
  fileInput.value?.click();
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    const file = target.files[0];
    setFieldValue("file", file);
    previewUrl.value = URL.createObjectURL(file);
  }
}

const onSubmit = handleSubmit(values => {
  console.log("Form submitted:", values);
  alert("Form submitted successfully!");
});

</script>
