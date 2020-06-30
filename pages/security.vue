<template>
  <div>
    <v-card class="ma-4">
      <v-card-actions>
        <span class="title">
          {{ $t("tables[0].title") }}
        </span>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="saveChanges">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>

    <v-data-table
      :headers="headers"
      :items="data"
      class="elevation-1 ma-4"
      hide-actions
    >
      <template v-slot:items="props">
        <td style="max-width:400px">
          <p>
            SS<sub>{{ props.index + 1 }}</sub> - {{ props.item.name }}
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
</template>
<script>
export default {
  data: () => ({
    pagination: {
      page: 0,
      rowsPerPage: 10
    },
    levels: [{ name: "", value: 0, char: "" }],
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
    ]
  }),
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

      tables[0].data = JSON.parse(JSON.stringify(data));
      this.$store.dispatch("tables/setTables", { tables });
      alert("Changes saved!")
    }
  },
  created() {
    this.levels = this.$t("levels");
    this.data = JSON.parse(JSON.stringify(this.$t("tables[0].rows")));
  }
};
</script>
<style scoped></style>
