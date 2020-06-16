<template>
    <div :class="headerbg" class="app-header header-shadow">
        <div class="logo-src"/>
        <div class="app-header__content">
            <div class="app-header-left">
                <!-- <SearchBox/> -->
            </div>
            <div class="app-header-right">
                <UserArea/>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic" v-bind:class="{ 'is-active' : isOpen }" @click="toggleMobile('closed-sidebar-open')">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <button type="button" class="btn btn-icon btn-icon-only btn-outline-link" @click.prevent="logOut">
                <font-awesome-icon icon="sign-out-alt" size="2x" color="#FFFFFF" />
            </button>
        </div>
    </div>
</template>

<script>

    import SearchBox from './Header/SearchBox';
    import UserArea from './Header/HeaderUserArea';

    import {library} from '@fortawesome/fontawesome-svg-core'
    import {
        faEllipsisV,
    } from '@fortawesome/free-solid-svg-icons'
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

    library.add(
        faEllipsisV,
    );
    export default {
        name: "Header",
        components: {
            UserArea,
            'font-awesome-icon': FontAwesomeIcon,
        },

        data() {
            return {
                isOpen: false,
                isOpenMobileMenu: false,
            }
        },
        props: {
            headerbg: String,

        },
        methods: {
          logOut() {
            this.$store.dispatch("auth/logout");
            this.$router.push("/login");
          },
            toggleMobile(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },

            toggleMobile2(className) {
                const el = document.body;
                this.isOpenMobileMenu = !this.isOpenMobileMenu;

                if (this.isOpenMobileMenu) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        }
    };
</script>
