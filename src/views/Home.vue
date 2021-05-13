<template>
    <div>
        <Header/>
            <main class="font-body">
                <IllustrationHome/>
                <div>
                    <div v-if="videosActivites.length > 0 && videosAnimes.length > 0 && videosMusique.length > 0">
                        <BlocVideos :categorie="videosActivites"/>
                        <BlocVideos :categorie="videosAnimes"/>
                        <BlocVideos :categorie="videosMusique"/>
                    </div>
                </div>
            </main>
        <Footer/>
    </div>
</template>

<script>
import BlocVideos from '../components/BlocVideos.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import IllustrationHome from '../components/IllustrationHome.vue'
import axios from 'axios'

export default {
    name: 'Home',
    components: {
        Header,
        BlocVideos,
        Footer,
        IllustrationHome,
    },
    data() {
        return {
            videosAnimes: [],
            videosActivites: [],
            videosMusique: [],
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
                .get('https://lesdeuxpaumes-api.herokuapp.com/videos/categories/1')
                .then(response => {
                    this.videosAnimes = response.data
                })
        },
        fetchVideosActivites() {
            axios
                .get('https://lesdeuxpaumes-api.herokuapp.com/videos/categories/2')
                .then(response => {
                    this.videosActivites = response.data
                })
        },
        fetchVideosMusique() {
            axios
                .get('https://lesdeuxpaumes-api.herokuapp.com/videos/categories/3')
                .then(response => {
                    this.videosMusique = response.data
                })
        },
  }
}
</script>