<template>
    <div>
        <Header/>
            <main class="font-body">
                <IllustrationHome/>
                <p v-bind:style="{ fontSize: fontSize + 'rem' }"> 
                    test akegkazjhejahzkjhazkejhza aze,az e,azbeaz
                </p>
                <div>
                    <div v-if="videosActivites.length > 0 && videosAnimes.length > 0 && videosMusique.length > 0">
                        <BlocVideos :categorie="videosActivites"/>
                        <BlocVideos :categorie="videosAnimes"/>
                        <BlocVideos :categorie="videosMusique"/>
                    </div>
                </div>
            </main>
        <Footer/>
        <Options/>
    </div>
</template>

<script>
import BlocVideos from '../components/BlocVideos.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import IllustrationHome from '../components/IllustrationHome.vue'
import Options from '../components/Options.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Header,
        BlocVideos,
        Footer,
        IllustrationHome,
        Options
    },
    data() {
        return {
            videosAnimes: [],
            videosActivites: [],
            videosMusique: [],
             fontSize: 1.25
        }   
    },
    mounted() {
        this.fetchVideosAnimes();
        this.fetchVideosActivites();
        this.fetchVideosMusique();
    },
    methods: {
        fetchVideosAnimes() {
            axios
                .get('http://localhost:3000/videos/categories/1')
                .then(response => {
                    this.videosAnimes = response.data
                })
        },
        fetchVideosActivites() {
            axios
                .get('http://localhost:3000/videos/categories/2')
                .then(response => {
                    this.videosActivites = response.data
                })
        },
        fetchVideosMusique() {
            axios
                .get('http://localhost:3000/videos/categories/3')
                .then(response => {
                    this.videosMusique = response.data
                })
        },
  }
}
</script>