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
                  placeholder="Enter name"
                  v-model="nation.name"
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
                  v-model="nation.slug"
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
                <select id="nation_theme" v-model="nation.membership_sync" class="form-control">
                  <option value="0">Light</option>
                  <option value="1">Dark</option>
                </select>
              </div>
              <div class="form-group col-md-6">
                <label for="nation_token">Profile Picture Cache Sync?</label>
                <select id="nation_theme" v-model="nation.picture_sync" class="form-control">
                  <option value="0">Light</option>
                  <option value="1">Dark</option>
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
                <label for="nation_token">HQ Nation</label>
                <input type="radio" v-model="nation.hq" class="form-control" />
              </div>
              <div class="form-group col-md-4">
                <label for="nation_token">Last Refresh</label>
                <input type="text" disabled v-model="nation.updated_at" class="form-control" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import VueNotifications from "vue-notifications";
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
      nation: {},
      menu: 0
    };
  },
  created() {
    axios
      .get(BASE_URL + `/api/nation/details/${this.id}`)
      .then(response => {
        if ((response.status = 200)) {
          this.nation = response.data.data[0];
        }
      })
      .catch(error => swal("Error!", error, "error"));
  },
  components: {
    "font-awesome-icon": FontAwesomeIcon
  },
  methods: {
    updateNation: function() {
      axios
        .put(BASE_URL + "/api/nation/details/" + this.nation.id, { nation: this.nation })
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
    refreshCache: function() {
      axios
        .post(BASE_URL + "/api/nation/clear/cache", {
          nation_id: this.id
        })
        .then(response => {
          if (response.status == 200) {
            swal("Success", "Cache Refresed successfully", "success");
          }
        })
        .catch(error => swal("Error", error, "error"));
    },
    syncMembers: function() {},
    syncPictures: function() {}
  }
};
</script>
<style scoped>
</style>