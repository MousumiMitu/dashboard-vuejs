import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  BiSearch,
  BiSpeedometer2,
  MdKeyboardarrowleft,
  MdKeyboardarrowright,
  BiAppIndicator,
  CoBank,
  BiStarFill,
  BiStarHalf,
  BiCalendarCheckFill,
  FaUserFriends
} from 'oh-vue-icons/icons'

addIcons(
  BiSearch,
  BiSpeedometer2,
  MdKeyboardarrowleft,
  MdKeyboardarrowright,
  BiAppIndicator,
  CoBank,
  BiStarFill,
  BiStarHalf,
  BiCalendarCheckFill,
  FaUserFriends
)

const app = createApp(App)
app.component('v-icon', OhVueIcon)
app.mount('#app')
