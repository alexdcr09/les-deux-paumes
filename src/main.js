import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'

const app = createApp(App);
app.use(router)

app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCCHHFIMiHfJV45AqxqV8D5eg36z-bxEso',
    },
}).mount('#app')
