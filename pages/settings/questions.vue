<template>
  <v-flex xs12>
    <v-card class="settings-card">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <h1>
              {{ $t("calcTypeTitle") }}
            </h1>
            <v-radio-group v-model="calcType">
              <v-radio
                v-for="item in $t('calcType')"
                :key="item.name"
                :label="item.name"
                :value="item.value"
              ></v-radio>
            </v-radio-group>
            <h1>{{ $t("modeTitle") }}</h1>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex xs12 v-for="(mode, i) in $t('modes')" :key="mode.name">
                  <v-text-field
                    class="mx-2"
                    v-model="modes[i]"
                    :label="mode.name"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
            <h1>{{ $t("tableTitle") }}</h1>
            <v-flex xs12>
              <v-layout row wrap>
                <v-flex
                  xs12
                  v-for="(table, i) in $t('tables')"
                  :key="table.title"
                >
                  <v-text-field
                    class="mx-2"
                    v-model="intervals[i]"
                    :label="table.title"
                    min="0"
                    max="10"
                    step="1"
                    type="number"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-flex>
            <v-btn @click="save" color="primary" :loading="loading">{{
              $t("btn.save")
            }}</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
    <v-snackbar
      v-model="infoSnack.snackbar"
      :color="infoSnack.color"
      :multi-line="infoSnack.mode === 'multi-line'"
      :timeout="infoSnack.timeout"
      :vertical="infoSnack.mode === 'vertical'"
      :top="'top'"
    >
      {{ infoSnack.text }}
      <v-btn dark flat @click="infoSnack.snackbar = false">{{
        $t("btn.close")
      }}</v-btn>
    </v-snackbar>
  </v-flex>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "questions",
  head() {
    return {
      title: this.$t("settings.nav.questions")
    };
  },
  data() {
    return {
      loading: false,
      infoSnack: {
        text: "Changes saved!",
        color: "success",
        snackbar: false,
        mode: "",
        timeout: 3000
      },
      calcType: 0,
      modes: ["", "", ""],
      intervals: [0, 0, 0]
    };
  },

  mounted() {
    this.calcType = this.$store.state.settings.type;
    this.modes = this.$store.state.settings.k.split("|");
    this.intervals = this.$store.state.settings.intervals.split("|");
  },
  methods: {
    save() {
      const type = parseInt(this.calcType);
      const intervals = this.intervals
        .map(x => {
          return parseInt(x);
        })
        .join("|");
      const k = this.modes.join("|");
      this.$store.dispatch("settings/setIntervals", { intervals });
      this.$store.dispatch("settings/setType", { type });
      this.$store.dispatch("settings/setK", { k });

      this.loading = false;
      this.infoSnack.snackbar = true;
    },
    openModal(title, i, j) {
      this.modal.title = title.substr(0, 20) + "..";
      this.modal.active = true;
      this.modal.i = i;
      this.modal.j = j;
    },
    arrayValue(row, column) {
      let i = row;
      let j = column;
      return this.questions[i][j];
    }
  }
};
</script>

<style>
.settings-card {
  min-height: 550px;
}
.a-input {
  min-height: 96px;
}
.q-value {
  color: azure;
  font-weight: bolder;
  padding: 2px;
  background-color: rgb(0, 0, 117);
}
.q-value:hover {
  cursor: pointer;
}
</style>
