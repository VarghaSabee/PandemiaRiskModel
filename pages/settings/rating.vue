<template>
  <v-flex xs12>
    <v-card style="min-height:550px">
      <v-container fluid>
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout
              row
              wrap
              my2
              pa-0
              v-for="(item, i) in $t('range')"
              :key="item.name"
            >
              <v-flex xs12 class="ma-2">
                {{ item.char }} - {{ item.name }}
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  class="mx-2"
                  v-model="items[i].values[0]"
                  min="0"
                  max="1"
                  label="From"
                  step="0.1"
                  type="number"
                ></v-text-field>
              </v-flex>
              <v-flex xs6>
                <v-text-field
                  class="mx-2"
                  v-model="items[i].values[1]"
                  min="0"
                  max="1"
                  label="To"
                  step="0.1"
                  type="number"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-btn @click="saveData" color="primary">{{
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
        $t("btn.save")
      }}</v-btn>
    </v-snackbar>
  </v-flex>
</template>

<script>
export default {
  name: "rating",
  head() {
    return {
      title: this.$t("settings.nav.rate")
    };
  },
  data() {
    return {
      items: [
        {
          values: [0, 0.2]
        },
        {
          values: [0.2, 0.4]
        },
        {
          values: [0.4, 0.6]
        },
        {
          values: [0.6, 0.8]
        },
        {
          values: [0.8, 1]
        }
      ],
      rules: {
        float: v =>
          (v || "").match(/^[+]?([0-9]*[.])?[0-9]+/) ||
          "Please enter a valid float number from 0 to 1"
      },

      infoSnack: {
        text: "Changes saved!",
        color: "success",
        snackbar: false,
        mode: "",
        timeout: 3000
      }
    };
  },
  // watch: {
  //   "$i18n.locale": {
  //     handler(value) {
  //       const translate = this.$t("range");
  //       for (let index = 0; index < this.items.length; index++) {
  //         this.items[index].name = translate[index].name;
  //       }
  //     }
  //   }
  // },

  methods: {
    async saveData() {
      const risk = JSON.parse(
        JSON.stringify(
          this.items.map(x => {
            return {
              values: x.values.map(y => {
                return parseFloat(y);
              })
            };
          })
        )
      );
      await this.$store.dispatch("rating/setRisk", { risk });
      this.infoSnack.snackbar = true;
    }
  },

  mounted() {
    this.items = JSON.parse(JSON.stringify(this.$store.state.rating.risk));
  }
};
</script>

<style></style>
