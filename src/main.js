import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { mapkey } from './googlemapkey'
import VueGoogleMaps from '@fawmi/vue-google-maps'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(VueGoogleMaps, {
    load: {
        key: mapkey,
        language: 'ja',
    },
    autobindAllEvents: true,
})
  .mount('#app')
