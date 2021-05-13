<template>
    <HeaderBlanc/>
        <div class="m-5">
        </div>
        <div class="flex flex-wrap justify-around mx-auto w-11/12 my-10">
            <div class="mx-auto justify-center flex w-11/12 md:w-max h-5/6 md:h-full">
                <iframe class="rounded-md "
                    width="640" height="360"
                    :src="video.src"
                    allowFullScreen
                ></iframe>
            </div>
            <div class="md:order-none order-first w-4/4 md:w-2/4 mx-auto md:mb-0 mb-5 flex flex-col content-center">
                <h2 class="text-3xl md:ml-10 ml-0 text-left mb-5 text-black font-bold">{{ video.title }}</h2>
                <p class="text-left md:ml-10 ml-0 text-md text-gray-900 font-medium">
                    {{ video.texte}}
                </p>
            </div>
        </div>
    <Footer/>
</template>

<script>
import HeaderBlanc from '../components/HeaderBlanc.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'
// @ is an alias to /src

export default {
    name: 'Home',
    components: {
        HeaderBlanc,
        Footer
    },
    data() {
        return {
            video : Object
        }
    },
    mounted() {
        this.fetchVideo();
    },    
    methods: {
        fetchVideo() {
            axios
                .get(`http://localhost:3000/videos/${this.$route.params.id}`)
                .then(response => {this.video = response.data; })
        },
    }
}
</script>
