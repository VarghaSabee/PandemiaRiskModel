<template>
  <v-container fluid pa-0 ma-0>
    <v-layout row wrap>
      <v-flex xs12 v-for="(question,i) in $t('questions')" :key="question.question">
        <v-layout row wrap>
          <v-flex xs7>
            <v-select
              v-model="value[i].index"
              :label="question.question"
              :items="question.answers"
              item-text="answer"
              item-value="index"
            ></v-select>
          </v-flex>
          <v-flex xs5 class="pl-2 pr-2">
            <v-text-field
              v-model="value[i].d"
              min="0.1"
              max="1"
              :label="$t('d')"
              step=".1"
              type="number"
              class="a-input"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Questions",
  props: ["value"],
  mounted() {},

  methods: {},
  data() {
    return {
      rules: {
        float: v =>
          (v || "").match(/^[+]?([0-9]*[.])?[0-9]+/) ||
          "Please enter a valid float number from 0 to 1"
      }
    };
  }
};
</script>
