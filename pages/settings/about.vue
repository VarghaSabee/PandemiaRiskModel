<template>
  <v-flex xs12>
    <v-card style="min-height:550px">
      <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex xs12 class="pt-4 mt-4">
            <v-icon class="logo-icon">trending_up</v-icon>
          </v-flex>
          <v-flex xs12 class="headline">{{$t('settings.about.title')}}</v-flex>
          <v-flex xs12 class="title" v-html="$t('settings.about.creator')"></v-flex>
          <v-flex xs12 class="subtitle font-weight-bold">{{$t('settings.about.year')}}</v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: "another",
  head() {
    return {
      title: this.$t("settings.nav.about")
    };
  },
  data() {
    return {
      
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.logo-icon {
  font-size: 12em;
}
</style>
