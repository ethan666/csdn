<template>
  <div >
    <img v-if="isShow" @click="clickHandler" src="../assets/user-manual.gif" alt="动图">
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: true
        }
    },
    methods:{
        clickHandler(){
            this.isShow = false
        }
    }
}
</script>
