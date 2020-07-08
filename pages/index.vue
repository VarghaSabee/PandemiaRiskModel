<template>
  <v-container fluid fill-height class="pa-0 ma-0">
    <v-flex xs12>
      <v-layout row wrap justify-center style="position:relative;">
        <div class="app-title">
          <a href="#startpoint" class="clear-link"
            ><span>{{ $t("app.title") }}</span></a
          >
        </div>
        <v-flex xs12><v-img src="/bg.jpeg" class="img-c"></v-img></v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs12>
          <v-stepper v-model="e13" vertical>
            <v-stepper-step step="1" complete>
              <span id="startpoint">Smart Security</span>
            </v-stepper-step>

            <v-stepper-content step="1">
              <div>
                <v-data-table
                  :headers="headers"
                  :items="data3"
                  class="elevation-1 ma-4"
                  hide-actions
                >
                  <template v-slot:items="props">
                    <td style="max-width:400px">
                      <p>
                        SS<sub>{{ props.index + 1 }}</sub> -
                        {{ props.item.name }}
                      </p>
                    </td>
                    <td>
                      <v-select
                        solo
                        dense
                        v-model="props.item.index"
                        item-text="name"
                        item-value="value"
                        :items="levels3"
                        style="max-width:300px"
                      ></v-select>
                    </td>
                    <td>
                      <v-text-field
                        v-model="props.item.v"
                        solo
                        type="number"
                        min="0"
                        max="10"
                        step="1"
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        v-model="props.item.value"
                        solo
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                      ></v-text-field>
                    </td>
                  </template>
                  <template v-slot:no-data>
                    No data ..
                  </template>
                </v-data-table>
              </div>
              <v-btn color="primary" @click="saveChanges3">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step step="2" complete> Smart Healthcare</v-stepper-step>

            <v-stepper-content step="2">
              <div>
                <v-data-table
                  :headers="headers"
                  :items="data2"
                  class="elevation-1 ma-4"
                  hide-actions
                >
                  <template v-slot:items="props">
                    <td style="max-width:400px">
                      <p>
                        SH<sub>{{ props.index + 1 }}</sub> -
                        {{ props.item.name }}
                      </p>
                    </td>
                    <td>
                      <v-select
                        solo
                        dense
                        v-model="props.item.index"
                        item-text="name"
                        item-value="value"
                        :items="levels2"
                        style="max-width:300px"
                      ></v-select>
                    </td>
                    <td>
                      <v-text-field
                        v-model="props.item.v"
                        solo
                        type="number"
                        min="0"
                        max="10"
                        step="1"
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        v-model="props.item.value"
                        solo
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                      ></v-text-field>
                    </td>
                  </template>
                  <template v-slot:no-data>
                    No data ..
                  </template>
                </v-data-table>
              </div>
              <v-btn text @click="e13 = e13 - 1">Back</v-btn>
              <v-btn color="primary" @click="saveChanges2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step step="3">
              Smart Environment
            </v-stepper-step>

            <v-stepper-content step="3">
              <div>
                <v-data-table
                  :headers="headers"
                  :items="data"
                  class="elevation-1 ma-4"
                  hide-actions
                >
                  <template v-slot:items="props">
                    <td style="max-width:400px">
                      <p>
                        SE<sub>{{ props.index + 1 }}</sub> -
                        {{ props.item.name }}
                      </p>
                    </td>
                    <td>
                      <v-select
                        solo
                        dense
                        v-model="props.item.index"
                        item-text="name"
                        item-value="value"
                        :items="levels"
                        style="max-width:300px"
                      ></v-select>
                    </td>
                    <td>
                      <v-text-field
                        v-model="props.item.v"
                        solo
                        type="number"
                        min="0"
                        max="10"
                        step="1"
                      ></v-text-field>
                    </td>
                    <td>
                      <v-text-field
                        v-model="props.item.value"
                        solo
                        type="number"
                        min="0"
                        max="1"
                        step="0.1"
                      ></v-text-field>
                    </td>
                  </template>
                  <template v-slot:no-data>
                    No data ..
                  </template>
                </v-data-table>
              </div>
              <v-btn text @click="e13 = e13 - 1">Back</v-btn>
              <v-btn color="primary" @click="saveChanges">Save</v-btn>
            </v-stepper-content>
          </v-stepper>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "Index",
  head() {
    return {
      title: this.$t("app.title")
    };
  },
  data() {
    return {
      e13: 1,
      pagination: {
        page: 0,
        rowsPerPage: 10
      },
      levels: [{ name: "", value: 0, char: "" }],
      levels2: [{ name: "", value: 0, char: "" }],
      levels3: [{ name: "", value: 0, char: "" }],
      headers: [
        {
          text: "Criterion",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Level", value: "name", sortable: false },
        { text: "V", value: "name", sortable: false },
        { text: "Value", value: "name", sortable: false }
      ],
      data: [
        {
          name: "",
          index: 1,
          value: 0
        }
      ],
      data2: [
        {
          name: "",
          index: 1,
          value: 0
        }
      ],
      data3: [
        {
          name: "",
          index: 1,
          value: 0
        }
      ]
    };
  },
  methods: {
    saveChanges() {
      const storedTableData = JSON.parse(
        JSON.stringify(this.$store.state.tables.tables)
      );
      let tables = storedTableData;

      let data = this.data.map(x => {
        return {
          v: x.v,
          T: x.index,
          q: x.value
        };
      });

      tables[2].data = JSON.parse(JSON.stringify(data));
      this.$store.dispatch("tables/setTables", { tables });
      alert("Changes saved!");
    },
    saveChanges2() {
      const storedTableData = JSON.parse(
        JSON.stringify(this.$store.state.tables.tables)
      );
      let tables = storedTableData;

      let data = this.data.map(x => {
        return {
          v: x.v,
          T: x.index,
          q: x.value
        };
      });

      tables[1].data = JSON.parse(JSON.stringify(data));
      this.$store.dispatch("tables/setTables", { tables });
      // alert("Changes saved!");
      this.e13 = 3;
    },
    saveChanges3() {
      const storedTableData = JSON.parse(
        JSON.stringify(this.$store.state.tables.tables)
      );
      let tables = storedTableData;

      let data = this.data.map(x => {
        return {
          v: x.v,
          T: x.index,
          q: x.value
        };
      });

      tables[0].data = JSON.parse(JSON.stringify(data));
      this.$store.dispatch("tables/setTables", { tables });
      // alert("Changes saved!");
      this.e13 = 2;
    }
  },
  created() {
    this.levels = this.$t("levels");
    this.data = JSON.parse(JSON.stringify(this.$t("tables[2].rows")));
    //
    this.levels2 = this.$t("levels");
    this.data2 = JSON.parse(JSON.stringify(this.$t("tables[1].rows")));
    //
    this.levels3 = this.$t("levels");
    this.data3 = JSON.parse(JSON.stringify(this.$t("tables[0].rows")));
  }
};
</script>

<style>
body,
html,
#root {
  scroll-behavior: smooth;
}
.img-c {
  max-height: calc(100vh - 64px);
  max-width: 100%;
  height: 100%;
  width: 100%;
}
.app-title {
  z-index: 101;
  position: absolute;
  bottom: 15%;
  left: 0px;
  color: white;
  width: 100%;
  text-align: center;
  font-size: 2.1rem;
}
.app-title span {
  padding: 12px;
  border: 1px solid white;
  background-color: #1976d2;
}
.clear-link {
  text-decoration: none;
  color: white;
  text-shadow: none;
}
</style>
