<template>
    <div>
        <Navbar :home="'Home'" :links="links"/>
        <router-view />
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
