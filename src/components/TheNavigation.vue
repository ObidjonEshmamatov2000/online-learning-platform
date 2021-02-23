<template>
    <div class="theNavbar">
        <div class="container-fluid p-0 mb-6">
            <nav class="navbar p-0 mb-6">
                <div class="container-fluid">
                    <span class="navbar-head ml-4 white">Online Learning Platform</span>
                    <div class="navbar-links-div">
                        <ul class="navbar-links">
                            <li class="navbar-link">
                                <router-link :to="{name: 'Home'}">Home</router-link>
                            </li>
                            
                            <template v-if="authenticated">
                                <li>
                                    {{ user.data.fullname }}
                                </li>
                                <li class="navbar-link">
                                    <a href="#" @click.prevent="redir">Dashboard</a>
                                </li>
                                <li class="navbar-link">
                                    <a href="javascript:void(0)" @click.prevent="signOut">Sign out</a>
                                </li>
                            </template>
                            <template v-else>
                                <li class="navbar-link">
                                    <router-link :to="{name: 'Login'}">Login</router-link>
                                </li>
                            </template>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
    name: 'navigation',
    computed: {
        ...mapGetters({
            authenticated: 'auth/authenticated',
            user: 'auth/user'
        }),
    },

    methods: {
        ...mapActions({
            signOutAction: 'auth/signOut'
        }),
        ...mapMutations({
            SET_TOKEN: 'auth/SET_TOKEN',
            SET_USER: 'auth/SET_USER'
        }),

        signOut() {
            // this.signOutAction().then(() => {
            //     this.$router.replace({
            //         name: 'Home'
            //     })
            // })
            alert('star');
            axios.defaults.headers.common["Authorization"] = null;
            localStorage.removeItem("token");
            this.SET_TOKEN(null);
            this.SET_USER(null);
            this.$router.replace({
            name: "Login",
        });
        },
        
        redir() {
            if (this.user.data.fullname === 'String') {
                this.$router.replace({
                    name: 'StudentHome'
                })
            } else if (this.user.data.fullname === 'PROJECT OWNER') {
                this.$router.replace({
                    name: 'ManagerHome'
                })
            }
        }
    }
}
</script>

<style scoped lang="scss">
.theNavbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    margin-bottom: 70px;
}
    .white {
        color: white;
        font-size: 22px;
        display: inline-block;
    }
    a {
        color: #fff;
        text-decoration: none;
        display: inline-block;
        padding: 20px;
        transition: .4s all;

        &:hover {
            background-color: #006094;
            color: #fff;
        }
    }
    .navbar {
        box-sizing: border-box;
        // max-width: 1400px;
        margin: 0 auto;
        background-color: #0085B2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 1px 2px black;
    }
    ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
        display: flex;
        align-items: center;     
        
        li {
            display: inline-block;
            margin-right: 15px;

            a{
                text-decoration: none;
            }
        }
        
    }
</style>