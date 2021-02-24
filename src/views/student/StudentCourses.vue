<template>
    <div id="student-courses">
        <div class="container">
            <div class="row row-cols-sm-1 row-cols-md-3">
                <div class="col text-center pb-4" v-for="subject in subjects" :key="subject.name">
                    <vue-card :subject="subject" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueCard from "@/components/VueCard"
export default {
    name: 'studentCourses',
    components: {
        'vue-card': VueCard
    },
    data() {
        return {
            subjects: [
                {
                    name: 'React',
                    img: 'https://reactjs.org/logo-og.png',
                    date: {
                        starts: '12.15.2020',
                        duration: '80 min'
                    },
                    teacher: 'Aliyev Bekzod',
                    group: '714-19-group'
                },
                {
                    name: 'Vue',
                    img: 'https://miro.medium.com/max/2560/1*Ht8T-vqbqy5iG7FzNQGjFA.png',
                    date: {
                        starts: '15.12.2020',
                        duration: '80 min'
                    },
                    teacher: 'Jumaev Rustam',
                    group: '714-19-group'
                },
                {
                    name: 'Angular',
                    img: 'https://uploads.toptal.io/blog/image/125413/toptal-blog-image-1518523133236-d2bc894552c77f954f1e5ce48da6604d.png',
                    date: {
                        starts: '16.12.2020',
                        duration: '80 min'
                    },
                    teacher: 'Berdiev Alisher',
                    group: '714-19-group'
                },
                {
                    name: 'Vuetify',
                    img: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg',
                    date: {
                        starts: '19.12.2020',
                        duration: '80 min'
                    },
                    teacher: 'Tim Berns Li',
                    group: '714-19-group'
                }
            ]
            
        }
    }
}
</script>

<style scoped>
    #student-courses {
        padding-top: 40px;
        /* background-color: red; */
    }
</style>