import { RouteRecordRaw } from 'vue-router'
import AnimeLocalForm from '../components/AnimeLocalForm.vue'
import MangaLocalForm from '../components/MangaLocalForm.vue'
import { RouteName, RoutePath } from '../types/routes'

const routes: RouteRecordRaw[] = [
  { path: RoutePath.HOME, redirect: { name: RouteName.ANIME } },
  { path: RoutePath.ANIME, name: RouteName.ANIME, component: AnimeLocalForm },
  { path: RoutePath.MANGA, name: RouteName.MANGA, component: MangaLocalForm },
  
  // default redirect to home page
  { path: '/:pathMatch(.*)*', redirect: RoutePath.HOME }
]

export default routes
