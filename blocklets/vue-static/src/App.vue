<script setup lang="ts">
import axios, { AxiosResponse } from 'axios';
import { useToast } from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

import { ref } from 'vue';

const $toast = useToast();
// eslint-disable-next-line
interface IUserInfo {
  username: string;
  email: string;
}

const userInfo = ref<IUserInfo>({
  username: '',
  email: '',
});
// 获取用户数据
function getUSerInfo() {
  axios
    .get('https://bbqayfjrnbrseipmqf3bm6aehfarhxhi4aszj3o6m5u.did.abtnet.io/user')
    .then((res: AxiosResponse<IUserInfo>) => {
      userInfo.value = res.data;
    });
}

// 保存/修改用户数据
function updateUserInfo() {
  axios
    .post('https://bbqayfjrnbrseipmqf3bm6aehfarhxhi4aszj3o6m5u.did.abtnet.io/user/update', userInfo.value)
    .then((res) => {
      let instance = $toast.success('保存成功', {
        position: 'top',
      });
      getUSerInfo();
    });
}

getUSerInfo();
</script>

<template>
  <div
    class="grid h-full w-full justify-items-center overflow-hidden place-items-start justify-items-center p-6 py-8 sm:p-8 lg:p-12">
    <form class="w-full max-w-sm space-y-8">
      <fieldset class="[&amp;>*+[data-slot=control]]:mt-6 [&amp;>[data-slot=text]]:mt-1" data-headlessui-state="">
        <div data-slot="control" class="space-y-8">
          <div
            class="[&amp;>[data-slot=label]+[data-slot=control]]:mt-3 [&amp;>[data-slot=label]+[data-slot=description]]:mt-1 [&amp;>[data-slot=description]+[data-slot=control]]:mt-3 [&amp;>[data-slot=control]+[data-slot=description]]:mt-3 [&amp;>[data-slot=control]+[data-slot=error]]:mt-3 [&amp;>[data-slot=label]]:font-medium"
            data-headlessui-state="">
            <label
              data-slot="label"
              class="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
              id="headlessui-label-:R5l66kvajta:"
              for="headlessui-control-:R566kvajta:"
              data-headlessui-state=""
              >用户名</label
            ><span
              data-slot="control"
              class="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10"
              ><input
                v-model="userInfo.username"
                class="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                id="headlessui-control-:R566kvajta:"
                data-headlessui-state=""
                name="username"
                aria-labelledby="headlessui-label-:R5l66kvajta:" />
            </span>
            <div
              hidden=""
              style="
                position: fixed;
                top: 1px;
                left: 1px;
                width: 1px;
                height: 0;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
                display: none;
              "></div>
          </div>
          <div
            class="[&amp;>[data-slot=label]+[data-slot=control]]:mt-3 [&amp;>[data-slot=label]+[data-slot=description]]:mt-1 [&amp;>[data-slot=description]+[data-slot=control]]:mt-3 [&amp;>[data-slot=control]+[data-slot=description]]:mt-3 [&amp;>[data-slot=control]+[data-slot=error]]:mt-3 [&amp;>[data-slot=label]]:font-medium"
            data-headlessui-state="">
            <label
              data-slot="label"
              class="select-none text-base/6 text-zinc-950 data-[disabled]:opacity-50 sm:text-sm/6 dark:text-white"
              id="headlessui-label-:R5p66kvajta:"
              for="headlessui-control-:R966kvajta:"
              data-headlessui-state="">
              邮箱
            </label>
            <span
              data-slot="control"
              class="relative block w-full before:absolute before:inset-px before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-white before:shadow dark:before:hidden after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:ring-inset after:ring-transparent sm:after:focus-within:ring-2 sm:after:focus-within:ring-blue-500 has-[[data-disabled]]:opacity-50 before:has-[[data-disabled]]:bg-zinc-950/5 before:has-[[data-disabled]]:shadow-none before:has-[[data-invalid]]:shadow-red-500/10">
              <input
                v-model="userInfo.email"
                class="relative block w-full appearance-none rounded-lg px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing[3])-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] text-base/6 text-zinc-950 placeholder:text-zinc-500 sm:text-sm/6 dark:text-white border border-zinc-950/10 data-[hover]:border-zinc-950/20 dark:border-white/10 dark:data-[hover]:border-white/20 bg-transparent dark:bg-white/5 focus:outline-none data-[invalid]:border-red-500 data-[invalid]:data-[hover]:border-red-500 data-[invalid]:dark:border-red-500 data-[invalid]:data-[hover]:dark:border-red-500 data-[disabled]:border-zinc-950/20 dark:data-[hover]:data-[disabled]:border-white/15 data-[disabled]:dark:border-white/15 data-[disabled]:dark:bg-white/[2.5%] dark:[color-scheme:dark]"
                id="headlessui-control-:R966kvajta:"
                data-headlessui-state=""
                name="email"
                aria-labelledby="headlessui-label-:R5p66kvajta:" />
            </span>
            <div
              hidden=""
              style="
                position: fixed;
                top: 1px;
                left: 1px;
                width: 1px;
                height: 0;
                padding: 0;
                margin: -1px;
                overflow: hidden;
                clip: rect(0, 0, 0, 0);
                white-space: nowrap;
                border-width: 0;
                display: none;
              "></div>
          </div>
        </div>
      </fieldset>
      <div class="flex flex-wrap justify-between gap-2">
        <div class="flex items-center gap-2" data-headlessui-state="">
          <div
            hidden=""
            style="
              position: fixed;
              top: 1px;
              left: 1px;
              width: 1px;
              height: 0;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border-width: 0;
              display: none;
            ">
            <input
              hidden=""
              type="hidden"
              style="
                position: fixed;
                top: 1px;
                left: 1px;
                width: 1px;
                height: 0px;
                padding: 0px;
                margin: -1px;
                overflow: hidden;
                clip: rect(0px, 0px, 0px, 0px);
                white-space: nowrap;
                border-width: 0px;
                display: none;
              " /><input
              hidden=""
              type="checkbox"
              value="on"
              name="remember_me"
              style="
                position: fixed;
                top: 1px;
                left: 1px;
                width: 1px;
                height: 0px;
                padding: 0px;
                margin: -1px;
                overflow: hidden;
                clip: rect(0px, 0px, 0px, 0px);
                white-space: nowrap;
                border-width: 0px;
                display: none;
              " />
          </div>
        </div>
      </div>
      <button
        class="w-full relative isolate inline-flex items-center justify-center gap-x-2 rounded-lg border text-base/6 font-semibold px-[calc(theme(spacing[3.5])-1px)] py-[calc(theme(spacing[2.5])-1px)] sm:px-[calc(theme(spacing.3)-1px)] sm:py-[calc(theme(spacing[1.5])-1px)] sm:text-sm/6 focus:outline-none data-[focus]:outline data-[focus]:outline-2 data-[focus]:outline-offset-2 data-[focus]:outline-blue-500 data-[disabled]:opacity-50 [&amp;>[data-slot=icon]]:-mx-0.5 [&amp;>[data-slot=icon]]:my-0.5 [&amp;>[data-slot=icon]]:size-5 [&amp;>[data-slot=icon]]:shrink-0 [&amp;>[data-slot=icon]]:text-[--btn-icon] [&amp;>[data-slot=icon]]:sm:my-1 [&amp;>[data-slot=icon]]:sm:size-4 forced-colors:[--btn-icon:ButtonText] forced-colors:data-[hover]:[--btn-icon:ButtonText] border-transparent bg-[--btn-border] dark:bg-[--btn-bg] before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg] before:shadow dark:before:hidden dark:border-white/5 after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)] after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay] dark:after:-inset-px dark:after:rounded-lg before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none text-white [--btn-bg:theme(colors.zinc.900)] [--btn-border:theme(colors.zinc.950/90%)] [--btn-hover-overlay:theme(colors.white/10%)] dark:text-white dark:[--btn-bg:theme(colors.zinc.600)] dark:[--btn-hover-overlay:theme(colors.white/5%)] [--btn-icon:theme(colors.zinc.400)] data-[active]:[--btn-icon:theme(colors.zinc.300)] data-[hover]:[--btn-icon:theme(colors.zinc.300)] cursor-default"
        type="button"
        data-headlessui-state=""
        @click="updateUserInfo">
        <span
          class="absolute left-1/2 top-1/2 size-[max(100%,2.75rem)] -translate-x-1/2 -translate-y-1/2 [@media(pointer:fine)]:hidden"
          aria-hidden="true"></span
        >保存
      </button>
    </form>
  </div>
</template>

<style scoped></style>
