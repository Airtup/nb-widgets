<template>
  <div class="d-flex">
    <div class="header-btn-lg pr-0">
      <div class="widget-content p-0">
        <div class="widget-content-wrapper">
          <div class="widget-content-left">
            <b-dropdown
              toggle-class="p-0 mr-2"
              menu-class="dropdown-menu-lg"
              variant="link"
              no-caret
              right
            >
              <div slot="button-content">
                <font-awesome-icon icon="user" size="2x" />
              </div>
              <div class="dropdown-menu-header">
                <div class="dropdown-menu-header-inner bg-info">
                  <div class="menu-header-image opacity-2 dd-header-bg-6"></div>
                  <div class="menu-header-content text-left">
                    <div class="widget-content p-0">
                      <div class="widget-content-wrapper">
                        <div class="widget-content-left mr-3">
                          <font-awesome-icon icon="user" size="2x" />
                        </div>
                        <div class="widget-content-left">
                          <div class="widget-heading">{{currentUser.user.name}}</div>
                        </div>
                        <div class="widget-content-right mr-2">
                          <button
                            @click.prevent="logOut"
                            class="btn-pill btn-shadow btn-shine btn btn-focus"
                          >Logout</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="scroll-area-xs" style="height: 150px;">
                <VuePerfectScrollbar class="scrollbar-container" v-once>
                  <ul class="nav flex-column">
                    <li class="nav-item-header nav-item">Activity</li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">Recover Password</a>
                    </li>
                    <li class="nav-item-header nav-item">My Account</li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        Settings
                        <div class="ml-auto badge badge-success">New</div>
                      </a>
                    </li>
                  </ul>
                </VuePerfectScrollbar>
              </div>
            </b-dropdown>
          </div>
          <div class="widget-content-left ml-3 header-user-info">
            <div class="widget-heading">{{currentUser.user.name}}</div>
            <div class="widget-subheading">{{currentUser.user.email}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import VueCircle from "vue2-circle-progress";
import Trend from "vuetrend";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleDown,
  faCalendarAlt,
  faTrashAlt,
  faCheck,
  faFileAlt,
  faCloudDownloadAlt,
  faFileExcel,
  faFilePdf,
  faFileArchive,
  faEllipsisH,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUser,
  faAngleDown,
  faCalendarAlt,
  faTrashAlt,
  faCheck,
  faFileAlt,
  faCloudDownloadAlt,
  faFileExcel,
  faFilePdf,
  faFileArchive,
  faEllipsisH
);

export default {
  components: {
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon,
    VueCircle,
    trend: Trend
  },
  data: () => ({
    fill1: { gradient: ["#00b09b", "#96c93d"] },
    fill2: { gradient: ["#ff0844", "#ffb199"] },
    fill3: { gradient: ["#f6d365", "#fda085"] },
    showDrawerSection: false
  }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  }
};
</script>
