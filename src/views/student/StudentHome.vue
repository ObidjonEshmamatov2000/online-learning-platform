<template>
    <div class="main-home floating">
        <div class="fixed-nav">
            <Navbar :home="'Home'" :links="links"/>
        </div>
        <div class="router-view pt-6 pl-1">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'studentHome',
    components: {
        Navbar
    },
    data() {
        return {
            links: [
                { name: 'StudentCourses', dir: 'Courses'},
                { name: 'StudentGroups', dir: 'My Groups'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .main-home {
        position: relative;
    }
    .floating:after {
        content: "";
        display: table;
        clear: both;
    }
    .fixed-nav {
        position: fixed;
        left: 0;
        top: 65px;
        bottom: 0;
        width: 260px;
        box-sizing: border-box;
        background-color: #0085B2;
        box-shadow: 0px -0.5px 0.5px #006094;
    }
    .router-view {
        width: calc(100% - 260px);
        float: right;
        padding-top: 70px;
    }
</style>
