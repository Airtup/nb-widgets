<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-card title="Nations List" class="main-card mb-4">
      <b-row>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Filter" class="mb-0">
            <b-input-group>
              <b-form-input v-model="filter" placeholder="Type to Search" />
              <b-input-group-append>
                <b-btn :disabled="!filter" @click="filter = ''">Clear</b-btn>
              </b-input-group-append>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Sort" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortBy" :options="sortOptions">
                <option slot="first" :value="null">-- none --</option>
              </b-form-select>
              <b-form-select :disabled="!sortBy" v-model="sortDesc" slot="append">
                <option :value="false">Asc</option>
                <option :value="true">Desc</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col md="6" class="my-1">
          <b-form-group horizontal label="Sort direction" class="mb-0">
            <b-input-group>
              <b-form-select v-model="sortDirection" slot="append">
                <option value="asc">Asc</option>
                <option value="desc">Desc</option>
                <option value="last">Last</option>
              </b-form-select>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- Main table element -->
      <b-table
        show-empty
        responsive
        :items="items"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <template v-slot:cell(actions)="row">
          <b-button size="sm" @click="row.toggleDetails" class="mr-2">
            <font-awesome-icon icon="eye" />
            {{ row.detailsShowing ? 'Hide' : 'Show'}} Details
          </b-button>
          <a :href="'/#/nations/edit/' + row.item.id" class="mr-2 btn btn-success">
            <font-awesome-icon icon="edit" />Edit
          </a>
        </template>
        <template slot="row-details" slot-scope="row">
          <b-card class="no-shadow">
            <ul class="list-group">
              <li
                class="list-group-item"
                v-for="(value, key) in row.item"
                :key="key"
              >{{ key }}: {{ value}}</li>
            </ul>
          </b-card>
        </template>
      </b-table>

      <b-row>
        <b-col md="6" class="my-1">
          <b-pagination
            :total-rows="totalRows"
            :per-page="perPage"
            v-model="currentPage"
            class="my-0"
          />
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import PageTitle from "../PageTitle";
import swal from "sweetalert";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEdit, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faEdit, faEye);

const items = [];
export default {
  components: {
    PageTitle,
    "font-awesome-icon": FontAwesomeIcon
  },
  data: () => ({
    heading: "Dynamic Tables",
    subheading:
      "Basic example of a Vue table with sort, search and filter functionality.",
    icon: "fa fa-hashtag",

    items: items,
    fields: [
      { key: "id", label: "ID" },
      { key: "slug", label: "Nation Slug" },
      {
        key: "name",
        label: "Nation Name",
        sortable: true,
        sortDirection: "desc"
      },
      { key: "access_token", label: "Nation API Token" },
      { key: "people_count", label: "Listing Count" },
      { key: "updated_at", label: "Last Refresh" },
      { key: "actions", label: "Actions" }
    ],
    currentPage: 1,
    perPage: 20,
    totalRows: items.length,
    sortBy: null,
    sortDesc: false,
    sortDirection: "asc",
    filter: null,
    modalInfo: { title: "", content: "" }
  }),
  created() {
    axios
      .get(BASE_URL + "/api/nations")
      .then(response => {
        if (response.status == 200) {
          this.items = response.data.data;
        }
      })
      .catch(error => {
        swal("Error", error, "error");
      });
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  methods: {
    info(item, index, button) {
      this.modalInfo.title = `Row index: ${index}`;
      this.modalInfo.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", "modalInfo", button);
    },
    resetModal() {
      this.modalInfo.title = "";
      this.modalInfo.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
