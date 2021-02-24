<template>
    <div id="modal" v-if="showModal">
        <div id="content">
            {{ item.date }}
            <div id="exit" @click="$emit('closemodal', $event)">
                <i class="fas fa-times"></i>
            </div>

            <input-component :disabled="true" :value="item.teacher" label="Teacher"/>
            <input-component :disabled="true" :value="item.subject" label="Subject"/>
            <input-component :disabled="true" :value="item.group" label="Group"/>
        </div>
    </div>
</template>

<script>
import Input from "@/components/Input.vue"
export default {
    name: 'Modal',
    components: {
        'input-component': Input
    },
    props: {
        showModal: {
            type: Boolean,
            default: false
        },
        item: {
            type: Object,
            default: null
        }
    }
}
</script>

<style scoped>
    #modal {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 12222;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    #content {
        position: fixed;
        border-radius: 7px;
        padding: 2rem;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        height: 300px;
        background-color: white;
        text-align: center;
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
</style>
