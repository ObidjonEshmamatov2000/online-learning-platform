<template>
    <div id="modal" v-if="showModal">
        <div id="content">
            <div class="date">
                <span>Time: {{ item.date.starts}}</span>
                <span>Duration: {{ item.date.duration}}</span>
            </div>
            <div id="exit" @click="$emit('closemodal', $event)">
                <i class="fas fa-times"></i>
            </div>
            <div class="info">
                <h2 class="subject-name">Subject: {{ item.name }}</h2>
                <h2 class="subject-teacher">Teacher: {{ item.teacher }}</h2>
                <p class="group">Group: {{ item.group }}</p>
                <p class="grade">Grade: 5</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            default: null
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
    #modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1222;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    #content {
        position: fixed;
        border-radius: 7px;
        padding: 40px 20px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        z-index: 9003;
        /* height: 250px; */
        background-color: white;
    }
    #exit {
        width: 30px;
        height: 30px;
        border-radius: 5px;
        display: flex;
        position: absolute;
        top: -15px;
        right: -15px;
        cursor: pointer;
        background-color: white;
        align-items: center;
        justify-content: center;
        box-shadow: 0 2px 5px #0085B2;
    }
    .date {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: space-between;

        span:nth-child(1) {
            font-size: 20px;
        }
    }

    .subject-name {
            font-size: 22px;
    }

    .info {
        padding: 20px 0;
        text-align: left;

        .subject-teacher {
            font-size: 20px;
        }
    }
</style>