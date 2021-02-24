<template>
    <div id="card">
        <StudentModal @closemodal="closemodal" :showModal="showModal" :item="subject"/>
        <div class="img-div">
            <img :src="subject.img" />
        </div>
        <div class="content-div">
            <h2 class="subject-name">Subject name: <span>{{ subject.name }}</span></h2>
            <h3 class="subject-teacher">Teacher: <span>{{ subject.teacher }}</span></h3>
            <div class="date">
                <p>Start: {{subject.date.starts}}</p>
                <p>Duration: {{subject.date.duration}}</p>
            </div>
            <div class="button-div">
                <button @click="learnMore">Learn more...</button>
            </div>
        </div>
    </div>
</template>

<script>
import StudentModal from './StudentModal'
export default {
    components: {
        StudentModal
    },
    props: {
        subject: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            showModal: false
        }
    },
    methods: {
        learnMore() {
            this.showModal = true
        },

        closemodal() {
            this.showModal = false
        }
    }
}
</script>

<style scoped lang="scss">
    #card {
        font-family: Verdana, Geneva, sans-serif;
        /* width: 100%; */
        padding: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        // width: 300px;
        box-shadow: 0 2px 5px #0085B2;
        border-radius: 8px;

        &:hover {
            box-shadow: 0 2px 10px #0085B2;
        }
    }
    .img-div {
        width: 100%;
        height: 200px;
    }
    img {
        width: 100%;
        height: 100%;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .content-div {
        width: 100%;
        padding: 30px 5px 5px 20px;

        .subject-name {
            font-size: 16px;
            text-align: left;

            span {
                display: inline-block;
                font-size: 18px;
                margin-left: 8px;
                text-transform: uppercase;
            }
        }

        .subject-teacher {
            font-size: 16px;
            text-align: left;

            span {
                display: inline-block;
                font-size: 18px;
                margin-left: 8px;
            }
        }

        .date {
            text-align: left;
            margin-top: 18px;
            margin-bottom: 20px;

            p {
                padding: 0;
                margin: 3px 0;
            }
        }

        .button-div {
            padding: 10px;

            button {
                float: right;
                color: #0085B2;
                background-color: transparent;
                border: #0085B2 1px solid;
                border-radius: 3px;
                display: inline-block;
                padding: 3px 4px;
                transition: .6s ease all;

                &:hover {
                    color: white;
                    border: 1px solid transparent;
                    background-color: #0085B2;
                }
            }
        }
    }

</style>