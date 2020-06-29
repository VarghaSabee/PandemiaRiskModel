<template>
  <v-flex xs12>
    <v-card class="settings-card">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12 class="headline">{{
            $t("settings.another.title")
          }}</v-flex>
          <v-flex xs12 class="px-2 py-0 my-0">
            <v-text-field
              v-model="a[0]"
              min="0"
              max="100"
              label="a1"
              step="1"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="a[1]"
              min="0"
              max="100"
              label="a2"
              step="1"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="a[2]"
              min="0"
              max="1"
              label="a3"
              step=".1"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="a[3]"
              min="0"
              max="100"
              label="a4"
              step="1"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="a[4]"
              min="0"
              max="100"
              label="a5"
              step="1"
              type="number"
            ></v-text-field>
            <v-text-field
              v-model="a[5]"
              min="0"
              max="100"
              label="a6"
              step="1"
              type="number"
            ></v-text-field>
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
  name: "another",
  head() {
    return {
      title: this.$t("settings.nav.another")
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
      a: [0, 0, 0, 0, 0, 0],
      rules: {
        float: v =>
          (v || "").match(/^[+]?[0-9]+/) ||
          "Please enter a valid number from 0 to 100"
      }
    };
  },

  mounted() {
    this.a = this.$store.state.settings.a.split("|").slice(0);
  },
  methods: {
    async save() {
      this.infoSnack.snackbar = true;
      this.loading = true;
      let a = this.a.slice(0).join("|");
      await this.$store.dispatch("settings/setSettings", { a });
      this.loading = false;
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
</style>
