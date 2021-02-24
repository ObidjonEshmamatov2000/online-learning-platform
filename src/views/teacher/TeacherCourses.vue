<template>
    <div id="appp">
        <modal-component @closemodal="closemodal" :showModal="showModal" :item="item"/>
        <div>
            <h2 class="display-6 text-center my-4">Timetable of Lessons</h2>
            <div class="container mb-4">
                <div class="row">
                    <div class="col">
                        <FullCalendar :options="calendarOptions" />
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import Modal from '@/components/Modal'

export default {
    components: {
        FullCalendar, // make the <FullCalendar> tag available
        "modal-component": Modal
    },
    data() {
        return {
            showModal: false,
            calendarOptions: {
                plugins: [ dayGridPlugin, interactionPlugin ],
                initialView: 'dayGridMonth',
                dateClick: this.handleDateClick,
                events: [
                { title: 'event 1', date: '2019-04-01' },
                { title: 'event 2', date: '2019-04-02' }
                ]
            },
            item: {}
        }
    },
    methods: {
        handleDateClick: function(arg) {
            // console.log(arg);
            this.showModal = true
            this.item = {
                teacher: "Halilov Ilohm",
                group: "432",
                subject: "Math",
                date: arg.dateStr
            }
        },
        closemodal() {
            this.showModal = false
        }
    }
    }
</script>

<style scoped>

</style>