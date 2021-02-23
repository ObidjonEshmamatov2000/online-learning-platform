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
    name: 'ManagerHome',
    components: {
        Navbar
    },
    data() {
        return {
            links: [
                { name: 'ManagerEvents', dir: 'Events'},
                { name: 'ManagerCourses', dir: 'Courses'},
                { name: 'ManagerStudents', dir: 'Add Student'},
                { name: 'ManagerTeachers', dir: 'Add Teacher'},
                { name: 'ManagerStudentGroups', dir: 'Create Group'},
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
