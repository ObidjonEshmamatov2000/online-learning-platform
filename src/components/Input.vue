<template>
    <div id="input">
        <label>{{ label }}</label>
        <input type="text" :disabled="disabled" :value="value">
    </div>
</template>

<script>
export default {
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: String,
            default: ''
        },
        label: {
            type: String,
            default: 'Label'
        }
    }
}
</script>


<style scoped>
    input {
        background-color: transparent;
        border: 1px solid #0085B2;
        font-size: 18px;
        text-align: center;
    }
    input:focus {
        outline: none;
    }
    label {
        display: block;
        font-size: 12px;
        padding: 0;
        margin: 10px 0 5px 0;
    }
</style>