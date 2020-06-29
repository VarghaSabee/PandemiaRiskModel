<template>
  <v-container fluid fill-height>
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <v-card color="green darken-2" class="pa-2">
          <v-card-title class="headline" style="color:azure;">{{
            $t("app.title")
          }}</v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-stepper v-model="e6" vertical>
          <v-stepper-step :complete="e6 > 1" step="1">
            {{ $t("stepper[0].title") }}
            <small>{{ $t("stepper[0].description") }}</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-flex xs12>
              <v-text-field
                type="number"
                min="1"
                max="10"
                v-model="comandC"
                :rules="[rules.required, rules.comandCountRule]"
                :label="$t('stepper[0].label')"
              ></v-text-field>
            </v-flex>
            <v-btn color="primary" @click="continueUpdate">{{
              $t("btn.continue")
            }}</v-btn>
            <v-btn color="yellow darken-3" @click="loadExample">{{
              $t("btn.example")
            }}</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2">
            {{ $t("stepper[1].title") }}
            <small>{{ $t("stepper[1].description") }}</small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-tabs dark color="primary" show-arrows>
              <v-tabs-slider color="yellow"></v-tabs-slider>

              <v-tab
                v-for="i in parseInt(comandCount)"
                :key="i"
                :href="'#tab-' + i"
                >{{
                  !(typeof Comandes[i - 1] == "undefined") &&
                  Comandes[i - 1].name
                    ? Comandes[i - 1].name
                    : `Comand ${i}`
                }}</v-tab
              >

              <v-tabs-items>
                <v-tab-item
                  v-for="i in parseInt(comandCount)"
                  :key="i"
                  :value="'tab-' + i"
                >
                  <v-card flat>
                    <v-card-text>
                      <v-text-field
                        :label="$t('commandname')"
                        v-model="Comandes[i - 1].name"
                      ></v-text-field>
                      <questions v-model="Comandes[i - 1].answeres"></questions>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-tabs>

            <v-btn color="primary" @click="stepTwo">{{
              $t("btn.continue")
            }}</v-btn>
            <v-btn flat @click="e6 += -1">{{ $t("btn.back") }}</v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3">
            {{ $t("stepper[2].title") }}
            <small>{{ $t("stepper[2].description") }}</small>
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card flat>
              <v-layout row wrap>
                <v-flex xs12>
                  <div class="title ma-3">{{ $t("tables[0].title") }}</div>

                  <div class="data-t" style="overflow-x:auto;">
                    <table>
                      <thead>
                        <tr>
                          <th v-for="comand in Comandes" :key="comand.name">
                            {{ comand.name }}
                          </th>
                        </tr>
                        <tr>
                          <td v-for="comand in Comandes" :key="comand.name">
                            d | L
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in Comandes[0].answeres.length" :key="i">
                          <td v-for="j in Comandes.length" :key="j">
                            {{ Comandes[j - 1].answeres[i - 1].d }} |
                            {{
                              Comandes[j - 1].answeres[i - 1].value.toFixed(1)
                            }}
                            ({{
                              getLinguistic(
                                Comandes[j - 1].answeres[i - 1].index
                              )
                            }})
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="title ma-3">{{ $t("tables[1].title") }}</div>
                  <div class="data-t" style="overflow-x:auto;">
                    <table>
                      <thead>
                        <tr>
                          <th v-for="comand in Comandes" :key="comand.name">
                            {{ comand.name }}
                          </th>
                        </tr>
                        <tr>
                          <td v-for="comand in Comandes" :key="comand.name">
                            &micro;(O)
                          </td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="i in Comandes[0].answeres.length" :key="i">
                          <td v-for="j in Comandes.length" :key="j">
                            {{
                              Comandes[j - 1].answeres[i - 1].MyuValue.toFixed(
                                3
                              )
                            }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
            <v-btn color="primary" @click="thirdStep">{{
              $t("btn.continue")
            }}</v-btn>
            <v-btn flat @click="e6 += -1">{{ $t("btn.back") }}</v-btn>
          </v-stepper-content>

          <v-stepper-step step="4">
            {{ $t("stepper[3].title") }}
            <small>{{ $t("stepper[3].description") }}</small>
          </v-stepper-step>
          <v-stepper-content step="4">
            <v-card flat>
              <v-layout class="pa-0 ma-0" row wrap>
                <v-flex xs12 v-for="comand in Comandes" :key="comand.name">
                  <div class="headline">
                    {{ comand.name }}
                    <small class="z-value"
                      >Z = {{ comand.Zvalue.toFixed(3) }}</small
                    >
                  </div>
                  <div
                    class="subtitle"
                    v-html="$t('rating_scale')[comand.scaleIndex].rate"
                  ></div>
                </v-flex>
              </v-layout>
            </v-card>
            <v-btn color="primary" @click="reloadPage">{{
              $t("btn.finish")
            }}</v-btn>
            <v-btn flat @click="e6 += -1">{{ $t("btn.back") }}</v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Questions from "./../components/global/questions.vue";

export default {
  name: "Index",
  head() {
    return {
      title: this.$t("app.title")
    };
  },
  components: {
    Questions
  },
  asyncData({ redirect }) {
    redirect("/security");
  },
  data() {
    return {
      e6: 1,
      comandCount: 1,
      comandC: 1,
      Examples: [
        {
          name: "Example1",
          Zvalue: 0,
          scaleIndex: 0,
          answeres: [
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.6, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.5, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 }
          ]
        },
        {
          name: "Example2",
          Zvalue: 0,
          scaleIndex: 0,
          answeres: [
            { d: 0.7, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.6, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.5, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.6, index: 0, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 }
          ]
        },
        {
          name: "Example3",
          Zvalue: 0,
          scaleIndex: 0,
          answeres: [
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.6, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.5, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 0, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 }
          ]
        }
      ],
      Comandes: [
        {
          name: "",
          Zvalue: 0,
          scaleIndex: 0,
          answeres: [
            { d: 0.8, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.6, index: 0, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.5, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 4, value: 0, Ovalue: 0, MyuValue: 0 }
          ]
        }
      ],
      alpha: [],
      alphas: [],
      beta: [],
      questionValues: [],
      a: [],

      rules: {
        required: value => !!value || "Required.",
        comandCountRule: value => {
          const pattern = /^\d+$/;
          return pattern.test(value) || "Invalid number.";
        }
      }
    };
  },
  methods: {
    reloadPage() {
      window.location.reload();
    },
    fakeSort() {},
    continueUpdate() {
      this.comandC = parseInt(this.comandC);
      if (this.comandC > 10) this.comandC = 10;

      let comands = [];
      for (let i = 0; i < this.comandC; i++) {
        comands.push({
          name: "Comand " + (i + 1),
          Zvalue: 0,
          scaleIndex: 0,
          answeres: [
            { d: 0.8, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.6, index: 0, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.5, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.7, index: 3, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 2, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.9, index: 1, value: 0, Ovalue: 0, MyuValue: 0 },
            { d: 0.8, index: 3, value: 0, Ovalue: 0, MyuValue: 0 }
          ]
        });
      }
      this.Comandes = comands.slice(0);
      this.comandCount = this.comandC;
      this.e6 = 2;
    },
    getZ(value) {
      if (value <= 1 && value >= 0.87) return 0;

      if (value <= 0.87 && value >= 0.67) return 1;

      if (value <= 0.67 && value >= 0.37) return 2;

      if (value <= 0.37 && value >= 0.21) return 3;

      if (value <= 0.21 && value >= 0) return 4;
    },
    SortZ(array) {
      array.sort(function(a, b) {
        return b.Zvalue - a.Zvalue;
      });
    },
    getO(item) {
      item.value = parseFloat(item.value);
      if (item.value >= this.a[0] && item.value <= this.a[1])
        return this.a[1] * item.d;

      if (item.value >= this.a[1] && item.value <= this.a[2])
        return this.a[2] * item.d;

      if (item.value >= this.a[2] && item.value <= this.a[3])
        return this.a[3] * item.d;

      if (item.value >= this.a[3] && item.value <= this.a[4])
        return this.a[4] * item.d;
    },

    getMyuO(value) {
      if (value <= this.a[0]) return 0;

      if (value > this.a[0] && value <= (this.a[0] + this.a[4]) / 2) {
        return 2 * Math.pow((value - this.a[0]) / this.a[4] - this.a[0], 2);
      }

      if (value < this.a[4] && value > (this.a[0] + this.a[4]) / 2) {
        return 1 - 2 * Math.pow((this.a[4] - value) / this.a[4] - this.a[0], 2);
      }

      return 1;
    },

    stepTwo() {
      for (let i = 0; i < this.Comandes.length; i++) {
        for (let j = 0; j < this.Comandes[i].answeres.length; j++) {
          //parse from string
          this.Comandes[i].answeres[j].d = parseFloat(
            this.Comandes[i].answeres[j].d
          );
          // replace answere index with values
          this.Comandes[i].answeres[j].value = parseFloat(
            this.questionValues[j][this.Comandes[i].answeres[j].index]
          );
          // Calculate Oij
          this.Comandes[i].answeres[j].Ovalue = this.getO(
            this.Comandes[i].answeres[j]
          );
          // Calcuate Myu
          this.Comandes[i].answeres[j].MyuValue = this.getMyuO(
            this.Comandes[i].answeres[j].Ovalue
          );
        }
      }
      this.e6 = 3;
      // console.log();
    },

    thirdStep() {
      for (let i = 0; i < this.Comandes.length; i++) {
        this.Comandes[i].Zvalue = this.calculateZ(this.Comandes[i]);
        this.Comandes[i].scaleIndex = this.getZ(this.Comandes[i].Zvalue);
      }
      this.SortZ(this.Comandes);
      this.e6 = 4;
    },

    calculateZ(comand) {
      let first = 1 / (this.alpha[0] + this.alpha[1] + this.alpha[2]);

      // inners must be added (+)
      let innerFirst =
        this.alpha[0] *
        ((1 / (this.alphas[0] + this.alphas[1])) *
          (comand.answeres[0].MyuValue * this.alphas[0] +
            comand.answeres[1].MyuValue * this.alphas[1]));

      let innserSecondFirst =
        (1 / (this.alphas[2] + this.alphas[3])) *
        (comand.answeres[2].MyuValue * this.alphas[2] +
          comand.answeres[3].MyuValue * this.alphas[3]) *
        this.beta[0];
      let innserSecondSecond =
        (1 / (this.alphas[4] + this.alphas[5] + this.alphas[6])) *
        (comand.answeres[4].MyuValue * this.alphas[4] +
          comand.answeres[5].MyuValue * this.alphas[5] +
          comand.answeres[6].MyuValue * this.alphas[6]) *
        this.beta[1];

      let innserSecond =
        this.alpha[1] *
        ((1 / (this.beta[0] + this.beta[1])) *
          (innserSecondFirst + innserSecondSecond));

      let innerThird =
        this.alpha[2] *
        ((1 /
          (this.alphas[7] +
            this.alphas[8] +
            this.alphas[9] +
            this.alphas[10])) *
          (comand.answeres[7].MyuValue * this.alphas[7] +
            comand.answeres[8].MyuValue * this.alphas[8] +
            comand.answeres[9].MyuValue * this.alphas[9] +
            comand.answeres[10].MyuValue * this.alphas[10]));

      let result = first * (innerFirst + innserSecond + innerThird);
      return result;
    },

    loadExample() {
      this.comandCount = this.Examples.length;
      this.Comandes = this.Examples.slice(0);
      this.e6 = 2;
    },

    arrToDb(array) {
      let result = [];
      for (let i = 0; i < array.length; i++) {
        result.push(parseFloat(array[i]));
      }
      return result;
    },
    getLinguistic(item) {
      switch (item) {
        case 0:
          return "H";
        case 1:
          return "HC";
        case 2:
          return "C";
        default:
          return "B";
      }
    }
  },
  computed: {},
  mounted() {}
};
</script>

<style>
.z-value {
  color: azure;
  background-color: rgb(0, 0, 168);
  padding: 2px;
}
.data-t table {
  border-collapse: collapse;
  width: 100%;
}

.data-t th,
.data-t td {
  text-align: left;
  padding: 8px;
}

.data-t tr:nth-child(even) {
  background-color: #f2f2f2;
  color: black;
}
</style>
