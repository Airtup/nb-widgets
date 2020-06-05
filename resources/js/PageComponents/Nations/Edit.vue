<template>
  <div class="card main-card">
    <div class="card-header p-3 h-auto d-block">
      <div class="d-block">Edit Nation: {{nation.name}}</div>
    </div>
    <div class="card-body">
      <div class="container-fluid">
        <div class="bd-example">
          <div>
            <div class="row">
              <button class="col-md-2 mb-1 p-3 btn btn-success" @click="updateNation">
                <font-awesome-icon icon="sync" size="2x" />
                <br />Update Nation
              </button>
              <button class="col-md-2 mb-1 offset-md-1 p-3 btn btn-success" @click="refreshCache">
                <font-awesome-icon icon="redo" size="2x" />
                <br />Refresh Cache
              </button>
              <button class="col-md-2 mb-1 offset-md-1 p-3 btn btn-success" @click="syncMembers">
                <font-awesome-icon icon="user-cog" size="2x" />
                <br />Sync Members
              </button>
              <button class="col-md-2 mb-1 offset-md-1 p-3 btn btn-success" @click="syncPictures">
                <font-awesome-icon icon="portrait" size="2x" />
                <br />Sync Pictures
              </button>
              <!-- <button class="btn btn-primary text-right" @click="createNation()">Connect Nation</button> -->
            </div>
            <div class="row mt-5" v-if="menu==0">
              <div class="form-group col-md-6">
                <label for="nation_name">Nation Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="nation_name"
                  aria-describedby="nation_help"
                  :value="nation.name"
                  disabled
                />
                <small id="nation_help" class="form-text text-muted">Choose a name for the nation</small>
              </div>
              <div class="form-group col-md-6">
                <label for="nation_slug">Nation Slug</label>
                <input
                  type="text"
                  class="form-control"
                  id="nation_slug"
                  placeholder="Slug"
                  :value="nation.slug"
                  disabled
                />
              </div>
              <div class="form-group col-md-6">
                <label for="nation_token">API Token</label>
                <input
                  type="text"
                  class="form-control"
                  id="nation_token"
                  placeholder
                  v-model="nation.access_token"
                  disabled
                />
              </div>
              <div class="form-group col-md-6">
                <label for="nation_token">Theme</label>
                <select id="nation_theme" v-model="nation.theme" class="form-control">
                  <option value="0">Light</option>
                  <option value="1">Dark</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="nation_token">Membership Sync?</label>
                <select v-model="nation.membership_sync" class="form-control">
                  <option :value="hq.id" v-for="hq in hq_nations" :key="hq.id">{{hq.name}}</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="nation_token">Profile Picture Cache Sync?</label>
                <select v-model="nation.picture_sync" class="form-control">
                  <option
                    :value="picture_sync.id"
                    v-for="picture_sync in hq_pictures"
                    :key="picture_sync.id"
                  >{{picture_sync.name}}</option>
                </select>
              </div>
              <div class="form-group col-md-4">
                <label for="nation_token">Members Count</label>
                <input type="number" disabled v-model="nation.people_count" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="nation_token">Directory Tag</label>
                <input type="string" v-model="nation.tag" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="nation_token">Directory Tag Count</label>
                <input type="number" disabled v-model="nation.people_count" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="nation_hq">HQ Nation</label>
                <input type="checkbox" v-model="nation.hq" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="nation_last_refresh">Last Refresh</label>
                <input type="text" disabled v-model="nation.updated_at" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="nation_last_refresh">Logo</label>
                <input type="file" @change="updateImage" ref="file" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="nation_token">PDF Back Color</label>
                <input type="color" v-model="nation.report_color" class="form-control" />
              </div>
              <div class="form-group col-md-12">
                <label for="nation_token">About Document</label>
                <textarea v-model="nation.intro" class="form-control"></textarea>
              </div>
              <div class="form-group col-md-12">
                <label for="nation_token">Disclaimer</label>
                <textarea v-model="nation.disclaimer" class="form-control"></textarea>
              </div>

              <div class="main-card mb-3 card col-md-12">
                <div class="card-body">
                  <h5 class="card-title">Select Profile Fields to Display :</h5>
                  <div class="scroll-area-md">
                    <VuePerfectScrollbar class="scrollbar-container text-left">
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for>First Name</label>
                          <input type="checkbox" class="form-control" v-model="options.first_name" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Last Name</label>
                          <input type="checkbox" class="form-control" v-model="options.last_name" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>City</label>
                          <input type="checkbox" class="form-control" v-model="options.city" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Country</label>
                          <input type="checkbox" class="form-control" v-model="options.country" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Adress</label>
                          <input type="checkbox" class="form-control" v-model="options.address" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Email</label>
                          <input type="checkbox" class="form-control" v-model="options.email" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Phone</label>
                          <input type="checkbox" class="form-control" v-model="options.phone" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Assist Email</label>
                          <input
                            type="checkbox"
                            class="form-control"
                            v-model="options.assist_email"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Assist Name</label>
                          <input type="checkbox" class="form-control" v-model="options.assist_name" />
                        </div>
                        <div class="form-group col-md-6">
                          <label for>Assist Phone</label>
                          <input
                            type="checkbox"
                            class="form-control"
                            v-model="options.assist_phone"
                          />
                        </div>
                      </div>
                    </VuePerfectScrollbar>
                  </div>
                </div>
              </div>
              <div class="main-card mb-3 card col-md-12" style="max-height:150px">
                <div class="card-body">
                  <h5 class="card-title">INSTALLATION INSTRUCTIONS</h5>
                  <div class="scroll-area-md">
                    <VuePerfectScrollbar class="scrollbar-container text-left" v-once>
                      <p>
                        Tag the people in the NationBuilder database with the tag "{{nation.tag}}" in order for the app to display them in the listings.
                        Then Add the HTML code below where you want the listing to display. Add the Script Snippet before the &lt;/body> tag.
                      </p>
                    </VuePerfectScrollbar>
                  </div>
                </div>
              </div>
              <div class="main-card mb-3 card col-md-12" style="max-height:150px">
                <div class="card-body">
                  <h5 class="card-title">Add Bootstrap (Header)</h5>
                  <div class="scroll-area-md">
                    <VuePerfectScrollbar class="scrollbar-container text-left" v-once>
                      <pre v-highlightjs="bootstrapSource">
                          <code class="html"></code>
                      </pre>
                    </VuePerfectScrollbar>
                  </div>
                </div>
              </div>
              <div class="main-card mb-3 card col-md-12" style="max-height:150px">
                <div class="card-body">
                  <h5 class="card-title">Add HTML</h5>
                  <div class="scroll-area-md">
                    <VuePerfectScrollbar class="scrollbar-container text-left" v-once>
                      <pre v-highlightjs="htmlSource">
                          <code class="html"></code>
                      </pre>
                    </VuePerfectScrollbar>
                  </div>
                </div>
              </div>
              <div class="main-card mb-3 card col-md-12">
                <div class="card-body">
                  <h5 class="card-title">Add Script Snippet</h5>
                  <div class="scroll-area-md">
                    <VuePerfectScrollbar>
                      <pre v-highlightjs="sourcecode">
                        <code class="javascript">
                        </code>
                      </pre>
                    </VuePerfectScrollbar>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="syncStatus == 1">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Synchronizing</h5>
                </div>
                <div class="modal-body">
                  <div>
                    <div class="spinner-grow text-primary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-secondary" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-success" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-danger" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-warning" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-info" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-light" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                    <div class="spinner-grow text-dark" role="status">
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                  <div v-if="syncPicture!=1">Members synchronized: {{syncCount}}</div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" @click="reload">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueNotifications from "vue-notifications";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import swal from "sweetalert";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSync,
  faRedo,
  faUserCog,
  faPortrait
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSync, faRedo, faUserCog, faPortrait);

export default {
  data() {
    return {
      id: this.$attrs.id,
      image: "",
      nation: {
        id: 1,
        theme: 0,
        tag: "",
        nation_id: 1,
        show_options: "{}",
        intro: null,
        disclaimer: null,
        report_color: null,
        hq: 1,
        membership_sync: undefined,
        sync_picture: 0,
        picture_sync: null,
        created_at: null,
        updated_at: "",
        name: "",
        slug: "",
        access_token: "",
        logo: "",
        people_count: 3,
        status: 1
      },
      options: {},
      menu: 0,
      syncStatus: 0,
      syncCount: 0,
      syncPicture: 0,
      hq_nations: [],
      hq_pictures: [],
      htmlSource: `<div class="directory-listing"></div>`,
      bootstrapSource: `<script src=\"https:\/\/ajax.googleapis.com\/ajax\/libs\/jquery\/3.4.1\/jquery.min.js\"><\/script>\r\n<script src=\"https:\/\/maxcdn.bootstrapcdn.com\/bootstrap\/3.4.0\/js\/bootstrap.min.js\"><\/script>\r\n<link href=\"https:\/\/fonts.googleapis.com\/css?family=PT+Serif:400,700|Roboto+Slab:300,400,700\" rel=\"stylesheet\">`
    };
  },
  created() {
    axios
      .get(BASE_URL + "/api/nation/details/" + this.id)
      .then(response => {
        if ((response.status = 200)) {
          this.nation = response.data.data[0][0];
          (this.hq_nations = response.data.data[1]),
            (this.hq_pictures = response.data.data[2]);
          this.options = JSON.parse(this.nation.show_options);
          this.options.first_name = this.options.first_name == 1;
          this.options.last_name = this.options.last_name == 1;
          this.options.phone = this.options.phone == 1;
          this.options.email = this.options.email == 1;
          this.options.address = this.options.address == 1;
          this.options.assist_email = this.options.assist_email == 1;
          this.options.assist_name = this.options.assist_name == 1;
          this.options.assist_phone = this.options.assist_phone == 1;
          this.options.city = this.options.city == 1;
          this.options.country = this.options.country == 1;
          return this.options;
        }
      })
      .catch(error => swal("Error!", error, "error"));
  },
  components: {
    "font-awesome-icon": FontAwesomeIcon,
    VuePerfectScrollbar
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    sourcecode() {
      return `<script type=\"text\/javascript\">\r\n  var dominolink = {\r\n    container: \'.directory-listing\',\r\n    nationSlug : \'${
        this.nation.slug
      }\',\r\n    showSearchForm: \'true\',\r\n    theme: \'${
        this.nation.theme == 0 ? "light" : "dark"
      }\'\r\n  };\r\n<\/script>\r\n<script type=\"text\/javascript\" src=\"\/${
        this.nation.slug
      }.min.js\" charset=\"utf-8\"><\/script>\r\n`;
    }
  },
  methods: {
    updateNation: function() {
      this.nation.show_options = JSON.stringify(this.options);
      console.log(this.nation);
      axios
        .put(BASE_URL + "/api/nation/details/" + this.nation.id, {
          nation: this.nation,
          user_id: this.currentUser.user.id
        })
        .then(response => {
          if (response.status == 200) {
            swal("Success", "Nation Updated Successfully", "success");
            window.location.reload();
          }
        })
        .catch(error => {
          swal("Error", error, "error");
        });
    },
    updateImage() {
      this.image = this.$refs.file.files[0];

      const fd = new FormData();
      fd.append("logo", this.image);
      fd.append("nation_slug", this.nation.slug);
      axios
        .post(BASE_URL + "/api/update/image", fd, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          if (response.data.status == "200") {
            axios
              .get(BASE_URL + "/api/nation/details/" + this.id)
              .then(response => {
                if ((response.status = 200)) {
                  this.nation = response.data.data[0][0];
                  (this.hq_nations = response.data.data[1]),
                    (this.hq_pictures = response.data.data[2]);
                }
              })
              .catch(error => swal("Error!", error, "error"));
          }
        });
    },
    reload() {
      window.location.reload();
    },
    refreshCache: function() {
      this.syncStatus = 1;
      this.syncPicture = 1;
      axios
        .post(BASE_URL + "/api/nation/clear/cache", {
          nation_id: this.id,
          user_id: this.currentUser.user.id
        })
        .then(response => {
          if (response.status == 200) {
            this.syncStatus = 0;
            this.syncPicture = 0;
            swal("Success", "Cache Refresed successfully", "success");
            axios
              .get(BASE_URL + "/api/nation/details/" + this.id)
              .then(response => {
                if ((response.status = 200)) {
                  this.nation = response.data.data[0][0];
                }
              })
              .catch(error => swal("Error!", error, "error"));
          }
        })
        .catch(error => swal("Error", error, "error"));
    },
    syncMembers: function() {
      if (this.nation.membership_sync) {
        if (this.syncStatus == 1) {
          return;
        }
        this.syncStatus = 1;
        this.syncCount = 0;
        this.updateSyncMembers("/api/v1/people?limit=50");
      } else swal("Error", "Select a membership to sync", "warning");
    },
    updateSyncMembers: function(url) {
      axios
        .post(BASE_URL + "/api/nation/update/members", {
          nation_id: this.nation.id,
          next_url: url
        })
        .then(response => {
          if (response.status == 200) {
            var jsonData = JSON.parse(response.data.data);
            this.findMatchPersonAndUpdate(
              jsonData["results"],
              0,
              jsonData["next"]
            );
          } else {
            this.updateSyncMembers(url);
            return;
          }
        })
        .catch(error => {
          this.updateSyncMembers(url);
        });
    },
    findMatchPersonAndUpdate: function(results, index, next_url) {
      axios
        .post(BASE_URL + "/api/nation/update/match/person", {
          nation_id: this.nation.id,
          nation_hq_id: this.nation.membership_sync,
          person_info: results[index]
        })
        .then(response => {
          if (response == "fail") {
            this.findMatchPersonAndUpdate(results, index, next_url);
            return;
          }
          this.syncCount = this.syncCount + 1;
          if (results.length - 1 == index) {
            if (next_url == null) {
              syncStatus = 0;
              axios.post(BASE_URL + "/api/nation/sync/member/log", {
                nation_id: this.nation.id,
                user_id: this.currentUser.user.id
              });
            } else {
              this.updateSyncMembers(next_url);
            }
          } else {
            this.findMatchPersonAndUpdate(results, index + 1, next_url);
          }
        })
        .catch(error =>
          this.findMatchPersonAndUpdate(results, index, next_url)
        );
    },
    syncPictures: function() {
      this.syncStatus = 1;
      this.syncPicture = 1;
      axios
        .post(BASE_URL + "/api/nation/sync/imagen", {
          nation_id: this.id,
          user_id: this.currentUser.user.id
        })
        .then(response => {
          if (response.status == 200) {
            this.syncStatus = 0;
            this.syncPicture = 0;
            swal("Success", "Image Sync successfully", "success");
          }
        })
        .catch(error => swal("Error", error, "error"));
    }
  }
};
</script>
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>