<template>
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <router-view />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
    name: 'teacherHome',
    components: {
        Navbar
    },
    data() {
        return {
            links: [
                { name: 'TeacherCourses', dir: 'Courses'},
                { name: 'TeacherMarks', dir: 'Marks'},
            ]
        }
    }
}
</script>
