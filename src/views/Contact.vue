<template>
    <HeaderBlanc/>
       <main class="font-body">
                <div class="flex flex-wrap m-auto h-middle-screen sm:my-10 justify-center">
                    <div class="m-auto flex flex-wrap justify-center">
                        <h1 class="md:text-6xl text-4xl text-blue font-bold uppercase">
                           NOUS CONTACTER
                        </h1>
                    </div>
                    <div class="flex h-auto justify-center mx-auto">
                        <GMapMap
                            :center="center"
                            :zoom="15"
                            map-type-id="roadmap"
                            style="width: 500px; height: 300px"
                        >
                            <GMapCluster>
                            <GMapMarker
                                :key="index"
                                v-for="(m, index) in markers"
                                :position="m.position"
                                :clickable="true"
                                :draggable="true"
                                @click="center=m.position"
                            />
                            </GMapCluster>
                        </GMapMap>
                    </div>
                </div>
                <div class="flex flex-wrap mx-auto w-11/12 justify-around mb-10 md::mb-32">
                    <div class="justify-center rounded-3xl shadow-lg px-12 py-8">
                        <div class="flex justify-center mb-3">
                            <svg class="text-center initial" width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M62.3355 67.8111L66.6409 63.228C67.2208 62.6184 67.9545 62.201 68.7529 62.0267C69.5513 61.8524 70.3801 61.9285 71.1386 62.2459L76.386 64.4761C77.1525 64.8073 77.8098 65.3726 78.275 66.1009C78.7402 66.8291 78.9924 67.6876 79 68.5682V78.7985C78.9955 79.3975 78.8772 79.9894 78.6522 80.5385C78.4272 81.0876 78.1001 81.5825 77.6907 81.9935C77.2813 82.4045 76.7979 82.723 76.2698 82.9299C75.7417 83.1369 75.1797 83.2279 74.6176 83.1975C37.848 80.7627 30.4287 47.6166 29.0256 34.9311C28.9605 34.3081 29.02 33.6776 29.2002 33.0808C29.3805 32.4841 29.6773 31.9348 30.0713 31.469C30.4653 31.0032 30.9475 30.6315 31.4862 30.3783C32.0248 30.1251 32.6077 29.9962 33.1965 30.0001H42.4802C43.3087 30.0027 44.1174 30.2691 44.8025 30.765C45.4876 31.2608 46.0176 31.9636 46.3244 32.7827L48.4195 38.3684C48.7275 39.1727 48.8061 40.0557 48.6454 40.9072C48.4848 41.7587 48.092 42.541 47.5161 43.1562L43.2106 47.7394C43.2106 47.7394 45.6901 65.6014 62.3355 67.8111Z" fill="#4D00FF"/>
                                <circle cx="57" cy="57" r="55" stroke="#4D00FF" stroke-width="4"/>
                            </svg>
                        </div>
                        <h3 class="font-bold text-blue text-xl text-center min-w-min">
                            04 72 91 36 31
                        </h3>
                    </div>
                    <div class="justify-center rounded-3xl shadow-lg px-12 py-8">
                        <div class="flex justify-center mb-3">
                            <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="57" cy="57" r="55" stroke="#4D00FF" stroke-width="4"/>
                                <path d="M56.125 30C61.9929 30 67.6205 32.4804 71.7697 36.8954C75.919 41.3105 78.25 47.2986 78.25 53.5424C78.25 63.289 71.2683 73.5012 57.6 84.4091C57.1745 84.7487 56.6569 84.9323 56.125 84.9323C55.5931 84.9323 55.0755 84.7487 54.65 84.4091C40.9817 73.5012 34 63.289 34 53.5424C34 47.2986 36.331 41.3105 40.4803 36.8954C44.6295 32.4804 50.2571 30 56.125 30ZM56.125 45.6949C54.169 45.6949 52.2932 46.5217 50.9101 47.9934C49.527 49.4651 48.75 51.4611 48.75 53.5424C48.75 55.6237 49.527 57.6197 50.9101 59.0914C52.2932 60.5631 54.169 61.3899 56.125 61.3899C58.081 61.3899 59.9568 60.5631 61.3399 59.0914C62.723 57.6197 63.5 55.6237 63.5 53.5424C63.5 51.4611 62.723 49.4651 61.3399 47.9934C59.9568 46.5217 58.081 45.6949 56.125 45.6949Z" fill="#4D00FF"/>
                            </svg>
                        </div>
                        <h3 class="font-bold text-blue text-xl text-center min-w-min">
                            26 Rue de la Vilette <br> 69003 Lyon
                        </h3>
                    </div>
                    <div class="justify-center rounded-3xl shadow-lg px-12 py-8">
                        <div class="flex justify-center mb-3">
                            <svg width="114" height="114" viewBox="0 0 114 114" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="57" cy="57" r="55" stroke="#4D00FF" stroke-width="4"/>
                                <path d="M80.2 47.5878V69.9594C80.2 72.0406 79.4229 74.0367 78.0399 75.5084C76.6568 76.98 74.7809 77.8068 72.825 77.8068H40.375C38.419 77.8068 36.5432 76.98 35.1601 75.5084C33.777 74.0367 33 72.0406 33 69.9594V47.5878L55.8507 61.8953C56.0777 62.0378 56.3364 62.1129 56.6 62.1129C56.8635 62.1129 57.1223 62.0378 57.3493 61.8953L80.2 47.5878ZM72.825 37C74.6396 36.9997 76.3907 37.7113 77.7432 38.9987C79.0957 40.2861 79.9546 42.0589 80.1557 43.978L56.6 58.7218L33.0443 43.978C33.2453 42.0589 34.1043 40.2861 35.4567 38.9987C36.8092 37.7113 38.5603 36.9997 40.375 37H72.825Z" fill="#4D00FF"/>
                            </svg>
                        </div>
                        <h3 class="font-bold text-blue text-xl text-center min-w-min">
                           lesdeuxpaumes@gmail.com
                        </h3>
                    </div>
                </div>
            </main>
        <Footer/>
</template>

<script>
import Footer from '../components/Footer.vue'
import HeaderBlanc from '../components/HeaderBlanc.vue'

// @ is an alias to /src

export default {
    name: 'Contact',
    components: {
        HeaderBlanc,
        Footer,
    },
    data() {
        return {
        center: {lat: 45.761413724265445, lng: 4.861582655498719},
        markers: [
            {
            position: {
                lat: 45.761413724265445, lng: 4.861582655498719
            },
            }
        ]
        }
    },
}   
</script>
