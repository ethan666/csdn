<template>
  <div v-if="shareState.isShowCourse" @click="clickHandler" class="course">
    <img src="../assets/user-manual.gif" alt="动图">
  </div>
</template>

<script>
import store from '../store'

export default {
    data(){
        return {
            shareState: store.state
        }
    },
    methods:{
        clickHandler(){
            store.showCourse(false)
        }
    }
}
</script>

<style scoped>
.course{
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>

