<template>
    <div id="login">
        <form class="card" @submit.prevent="submit">
            <h2 class="form-header mb-4">Please Sign in</h2>
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input type="text" class="form-control" placeholder="username" required id="username" v-model="form.username">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" placeholder="..." required id="password" v-model="form.password">
            </div>
            <div>
                <button type="submit" class="btn btn-block">Sign In</button>
            </div>
        </form> 
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            form: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        submit() {
            alert(this.form.username)
        }
    }
}
</script>

<style scoped lang="scss">
#login {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-color: rgba($color: black, $alpha: .05);
}
.card {
    min-width: 350px;
    max-width: 420px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 45px 25px;
    background-color: white;
    border-radius: 6px;
}
.form-header {
    font-family: Verdana, Geneva, sans-serif;
    font-size: 24px;
}
    .btn {
        background-color: #0085B2;
        color: white;

        &:hover {
            color: white;
            background-color: #0097b2;
        }
    }
</style>