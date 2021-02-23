<template>
  <div id="app">
    <TheNavigation />
    <router-view/>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation";
export default {
  name: 'app',
  components: {
    TheNavigation
  },
  created() {
    // if (!localStorage.getItem('token') === null) {
    //   this.$router.push({ name: 'Login' });
    // }
    // if(localStorage.getItem('token')) {
    //   this.$router.push({ name: 'ManagerHome' })
    // }

  }
}
</script>

<style lang="scss">

</style>
