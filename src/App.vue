<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import { RouteName } from './types/routes'
</script>

<template>
  <div class="max-w-3xl mx-auto pt-14">
    <section class="text-center flex flex-col items-center px-4">
      <figure class="w-16 h-16">
        <img src="https://aniyomi.org/img/logo-128px.png" alt="Aniyomi Logo" />
      </figure>
      <h1 class="text-xl sm:text-3xl font-bold mt-5">
        Aniyomi Local Source JSON Generator
      </h1>
      <p class="sm:text-lg text-gray-700">
        A tool that helps you to easily create the JSON file with metadata.
      </p>
    </section>
    <TabGroup :selectedIndex="$route.name === RouteName.ANIME ? 0 : 1">
      <TabList class="flex justify-center gap-2 pt-5">
        <RouterLink :to="{ name: RouteName.ANIME }">
        <Tab as="template" v-slot="{ selected }">
          <button
            :class="[
              'grow sm:grow-0 sm:w-36 ml-6 justify-center',
                { 'shadow button-primary': selected, button: !selected }
            ]"
          >
            Anime
          </button>
        </Tab>
        </RouterLink>
        <RouterLink :to="{ name: RouteName.MANGA }">
        <Tab as="template" v-slot="{ selected }">
          <button
            :class="[
              'grow sm:grow-0 sm:w-36 mr-6 justify-center',
                { 'shadow button-primary': selected, button: !selected }
            ]"
          >
            Manga
          </button>
        </Tab>
        </RouterLink>
      </TabList>
      <TabPanels>
        <TabPanel><RouterView class="mt-6" /></TabPanel>
        <TabPanel><RouterView class="mt-6" /></TabPanel>
      </TabPanels>
    </TabGroup>

    <footer class="my-10 px-4">
      <div class="text-sm text-gray-600 text-center [&_a]:text-primary-600 [&_a]:underline">
        <p>
          Created by <a href="https://github.com/alessandrojean" target="_blank">Alessandro Jean</a> and edited by <a href="https://github.com/12ohit" target="_blank">Rohit Mane</a>.<br class="sm:hidden" />
          Source code available on <a href="https://github.com/12ohit/aniyomi-local" target="_blank">GitHub</a>.
        </p>
      </div>
    </footer>
  </div>
</template>
