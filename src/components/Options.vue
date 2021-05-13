<template>
    <div class="z-50 fixed top-1/4 right-0 bg-white rounded-l-2xl">
        <div @click="fontSize++" class="w-8 m-3">
            <img 
            src="../assets/up.png" alt="agrandissement texte">
        </div>
        <button @click="fontSize + 0.25">A+</button>
        <div class="w-8 m-3">
            <img src="../assets/down.png" alt="diminution texte">
        </div>
    </div>
    <div :style="{ fontSize: fontSize + 'rem' }">
    Main content of website
    </div>
</template>

<script>

export default {
    name: 'Options',

    data () {
        return {
            fontSize: 1.25
        }
    }
}
</script>
