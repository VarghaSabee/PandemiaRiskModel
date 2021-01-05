<template>
  <div>
    <v-card class="doughnut-chart pa-4">
      <v-btn @click="stepOne" color="primary" :disabled="done">
        Calculate
      </v-btn>
      <v-btn outline color="#FF3232" v-show="done" @click="restart">
        Restart
      </v-btn>
    </v-card>
    <v-card v-show="done" class="doughnut-chart pa-4">
      <p class="pa-4">{{ $t("fazTitle") }}</p>
      <v-data-table
        :headers="headers"
        :items="done ? data : []"
        class="elevation-1 ma-4"
        hide-actions
      >
        <template v-slot:items="props">
          <td style="max-width:500px">
            <b> {{ props.item.name }}</b>
          </td>
          <td>
            <b>{{ props.item.sRegime.char }}</b> -
            {{ props.item.sRegime.value.toFixed(2) }}
          </td>
          <td>
            <b>{{ props.item.eRegime.char }}</b> -
            {{ props.item.eRegime.value.toFixed(2) }}
          </td>
          <td>
            <b>{{ props.item.dRegime.char }}</b> -
            {{ props.item.dRegime.value.toFixed(2) }}
          </td>
          <td>
            <b>{{ props.item.smtRegime.char }}</b> -
            {{ props.item.smtRegime.value.toFixed(2) }}
          </td>
          <td>
            <b>{{ props.item.all.char }}</b> -
            {{ props.item.all.value.toFixed(2) }}
          </td>
        </template>
        <template v-slot:no-data>
          No data ..
        </template>
      </v-data-table>
      <h2 class="my-4 ml-4">{{ $t("resultTitle") }}</h2>
      <p class="ml-4" v-for="(item, i) in $t('modes')" :key="item.name">
        <b>{{ item.char }}</b> = { {{ item.name }} } --
        <b>{{ results[i].result ? $t("result")[1] : $t("result")[0] }}</b>
      </p>
    </v-card>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

export default {
  mounted() {
    setTimeout(() => {
      this.stepOne();
      this.fazStep();
    }, 500);
  },

  data() {
    return {
      headers: [
        {
          text: "Regime",
          sortable: false,
          value: "name"
        },
        {
          text: "Smart Security",
          sortable: false,

          value: "name"
        },
        { text: "Smart Healthcare", value: "name", sortable: false },
        { text: "Smart Environment", value: "name", sortable: false },
        {
          text: "Smart Mobility and Transport",
          value: "name",
          sortable: false
        },
        {
          text: "Overall assessment of subsystems municipality",
          value: "name",
          sortable: false
        }
      ],
      data: [
        {
          name: "S",
          sRegime: {
            char: "",
            value: 0
          },
          eRegime: {
            char: "",
            value: 0
          },
          dRegime: {
            char: "",
            value: 0
          },
          smtRegime: {
            char: "",
            value: 0
          },
          all: {
            char: "",
            value: 0
          }
        },
        {
          name: "E",
          sRegime: {
            char: "",
            value: 0
          },
          eRegime: {
            char: "",
            value: 0
          },
          dRegime: {
            char: "",
            value: 0
          },
          smtRegime: {
            char: "",
            value: 0
          },
          all: {
            char: "",
            value: 0
          }
        },
        {
          name: "D",
          sRegime: {
            char: "",
            value: 0
          },
          eRegime: {
            char: "",
            value: 0
          },
          dRegime: {
            char: "",
            value: 0
          },
          smtRegime: {
            char: "",
            value: 0
          },
          all: {
            char: "",
            value: 0
          }
        }
      ],
      done: false,
      types: [
        {
          name: "",
          value: 0
        }
      ],
      selectedType: 0,
      results: [
        { regime: 0, calcType: 0, riskType: 4, result: false },
        { regime: 0, calcType: 0, riskType: 3, result: false },
        { regime: 0, calcType: 0, riskType: 2, result: false }
      ],
      risk: [
        { char: "S", value: 0, calcType: 0, riskType: 0 },
        { char: "E", value: 0, calcType: 0, riskType: 0 },
        { char: "E", value: 0, calcType: 0, riskType: 0 },
        { char: "D", value: 0, calcType: 0, riskType: 0 }
      ],
      tables: [
        {
          table: "SS",
          Oij: [],
          MnyuOij: [],
          Wij: [],
          modes: [],
          M: 0,
          Rg: 0,
          alpha: 0
        },
        {
          table: "SH",
          Oij: [],
          MnyuOij: [],
          Wij: [],
          modes: [],
          M: 0,
          Rg: 0,
          alpha: 0
        },
        {
          table: "SE",
          Oij: [],
          MnyuOij: [],
          Wij: [],
          modes: [],
          M: 0,
          Rg: 0,
          alpha: 0
        },
        {
          table: "SMT",
          Oij: [],
          MnyuOij: [],
          Wij: [],
          modes: [],
          M: 0,
          Rg: 0,
          alpha: 0
        }
      ]
    };
  },
  methods: {
    restart() {
      location.reload();
    },
    getOijRange(type, arrayA, q) {
      switch (type) {
        case 0:
          return arrayA[1] * q;
        case 1:
          return arrayA[2] * q;
        case 2:
          return arrayA[3] * q;
        case 3:
          return arrayA[4] * q;
        case 4:
          return arrayA[5] * q;
      }
    },
    getMnyuOij(Oij, arrayA) {
      if (Oij <= arrayA[0]) {
        return 0;
      }
      if (Oij <= (arrayA[0] + arrayA[5]) / 2) {
        return 2 * Math.pow((Oij - arrayA[0]) / (arrayA[5] - arrayA[0]), 2);
      }

      if (Oij < arrayA[5]) {
        return 1 - 2 * Math.pow((arrayA[5] - Oij) / (arrayA[5] - arrayA[0]), 2);
      }
      return 1;
    },
    //
    getRiskType(value, intervals) {
      if (value >= intervals[0].values[0] && value <= intervals[0].values[1]) {
        return 0;
      }
      if (value >= intervals[1].values[0] && value <= intervals[1].values[1]) {
        return 1;
      }
      if (value >= intervals[2].values[0] && value <= intervals[2].values[1]) {
        return 2;
      }
      if (value >= intervals[3].values[0] && value <= intervals[3].values[1]) {
        return 3;
      }
      if (value >= intervals[4].values[0] && value <= intervals[4].values[1]) {
        return 4;
      }
      return 0;
    },
    //
    calcM1(table) {
      let result = 0;
      for (let index = 0; index < table.Oij.length; index++) {
        result += table.Wij[index] / table.MnyuOij[index];
      }
      return 1 / result;
    },
    calcM2(table) {
      let result = 0;
      for (let index = 0; index < table.Oij.length; index++) {
        result *= Math.pow(table.MnyuOij[index], table.Wij[index]);
      }
      return result;
    },
    calcM3(table) {
      let result = 0;
      for (let index = 0; index < table.Oij.length; index++) {
        result += table.Wij[index] * table.MnyuOij[index];
      }
      return result;
    },

    calcM4(table) {
      let result = 0;
      for (let index = 0; index < table.Oij.length; index++) {
        result += table.Wij[index] * Math.pow(table.MnyuOij[index], 2);
      }
      return Math.sqrt(result);
    },
    //
    calcR(Mi) {
      return 100 * (1 - Mi);
    },
    //
    calcMode(Rg, k) {
      if (Rg < 0) {
        return 0;
      }

      if (Rg <= 100) {
        return Math.pow(Rg / 100, k);
      }

      if (Rg > 100) {
        return 1;
      }
    },
    //
    runCalcType(i) {
      const type = parseInt(this.$store.state.settings.type);
      switch (type) {
        case 0:
          this.tables[i].M = this.calcM1(this.tables[i]);
          break;
        case 1:
          this.tables[i].M = this.calcM2(this.tables[i]);
          break;
        case 2:
          this.tables[i].M = this.calcM3(this.tables[i]);
          break;
        case 3:
          this.tables[i].M = this.calcM4(this.tables[i]);
          break;
      }
      this.tables[i].Rg = this.calcR(this.tables[i].M);
    },
    //
    stepOne() {
      const tables = this.$store.state.tables.tables;
      const settingsA = this.$store.state.settings.a.split("|").map(x => {
        return parseInt(x);
      });

      for (let i = 0; i < tables.length; i++) {
        const table = tables[i].data;
        const vSum = table.reduce((a, b) => a + b["v"], 0);
        for (let index = 0; index < table.length; index++) {
          const element = table[index];
          // Oij
          this.tables[i].Oij[index] = this.getOijRange(
            element.T,
            settingsA,
            element.q
          );
          // Mnyuij
          this.tables[i].MnyuOij[index] = this.getMnyuOij(
            this.tables[i].Oij[index],
            settingsA
          );
          // Wij
          this.tables[i].Wij[index] = element.v / vSum;
        }
      }

      this.stepTwo();
      this.stepThree();
    },
    stepTwo() {
      const settingsModes = this.$store.state.settings.k.split("|");
      const settingsIntervals = this.$store.state.settings.intervals
        .split("|")
        .map(x => {
          return parseInt(x);
        });
      const settingsIntervalsSum = settingsIntervals.reduce((a, b) => a + b, 0);
      //
      for (let i = 0; i < this.tables.length; i++) {
        const table = this.tables[i];
        //
        this.runCalcType(i);
        // Li
        this.tables[i].alpha = settingsIntervals[i] / settingsIntervalsSum;
        // mnyuRg
        for (let index = 0; index < settingsModes.length; index++) {
          const elementK = eval(settingsModes[index]);
          this.tables[i].modes[index] = this.calcMode(table.Rg, elementK);
        }
      }
    },
    stepThree() {
      for (let index = 0; index < this.tables.length; index++) {
        const table = this.tables[index];
        this.risk[0].value += table.modes[0] * table.alpha;
        this.risk[1].value += table.modes[1] * table.alpha;
        this.risk[2].value += table.modes[2] * table.alpha;
        this.risk[3].value += table.modes[3] * table.alpha;
      }

      //
      const settingsInterval = this.$store.state.rating.risk;
      const settingsCalcType = parseInt(this.$store.state.settings.type);
      this.risk = this.risk.map(x => {
        x.calcType = settingsCalcType;
        x.riskType = this.getRiskType(x.value, settingsInterval);
        return x;
      });

      /// krok 6
      const settingsTable = this.$store.state.settings.table;
      for (let index = 0; index < this.risk.length; index++) {
        const element = this.risk[index];
        this.results[index] = settingsTable.filter(x => {
          return (
            x.regime === index &&
            x.calcType === element.calcType &&
            x.riskType === element.riskType
          );
        })[0];
      }
      this.done = true;
      console.warn(this.risk);
    },
    fazStep() {
      const settingsInterval = this.$store.state.rating.risk;
      const modeS = this.tables[0].modes;
      const modeE = this.tables[1].modes;
      const modeD = this.tables[2].modes;
      const modeSMT = this.tables[3].modes;

      for (let index = 0; index < 4; index++) {
        const element = this.data[index];
        //
        element.sRegime.char = this.getCharByType(
          this.getRiskType(modeS[index], settingsInterval)
        );
        element.sRegime.value = modeS[index];

        element.eRegime.char = this.getCharByType(
          this.getRiskType(modeE[index], settingsInterval)
        );
        element.eRegime.value = modeE[index];

        element.dRegime.char = this.getCharByType(
          this.getRiskType(modeD[index], settingsInterval)
        );
        element.dRegime.value = modeD[index];
        
        element.smtRegime.char = this.getCharByType(
          this.getRiskType(modeSMT[index], settingsInterval)
        );
        element.smtRegime.value = modeSMT[index];
        //
        element.all.char = this.getCharByType(this.risk[index].riskType);
        element.all.value = this.risk[index].value;
      }
    },
    getCharByType(type) {
      switch (type) {
        case 4:
          return "VHR";
        case 3:
          return "HR";
        case 2:
          return "AR";
        case 1:
          return "LR";
        case 0:
          return "VLR";
        default:
          return "VLR";
      }
    }
  }
};
</script>

<style scoped>
.doughnut-chart {
  width: 80%;
  height: 80%;
  margin: auto;
  margin-top: 30px;
}
</style>
