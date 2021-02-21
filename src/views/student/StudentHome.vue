<template>
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <router-view />
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
