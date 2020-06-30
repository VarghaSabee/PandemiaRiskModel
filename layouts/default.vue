<template>
  <v-app id="sandbox" :dark="dark" v-scroll="onScroll">
    <v-toolbar
      :clipped-left="primaryDrawer.clipped"
      app
      absolute
      class="primary"
    >
      <v-btn outline v-for="item in $t('menu')" :key="item.name" :to="item.to" color="white">
        {{ item.name }}
      </v-btn>
      <v-spacer></v-spacer>

      <!-- <v-btn icon @click="dark = !dark">
        <v-icon medium :color="dark ? '' : 'black'">brightness_3</v-icon>
      </v-btn> -->

      <v-menu
        bottom
        origin="center center"
        transition="slide-y-transition"
        offset-y
      >
        <v-btn slot="activator" icon>
          <span
            :class="['lang-icon', 'flag-icon', 'flag-icon-' + $i18n.locale]"
          />
        </v-btn>
        <v-list>
          <v-list-tile
            v-for="(item, i) in language"
            :key="i"
            @click="setLocale(item)"
          >
            <v-list-tile-title>
              <span :class="['flag-icon', 'flag-icon-' + item]" />
              {{ item.toUpperCase() }}
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-btn icon :to="{ name: 'settings.another' }">
        <v-icon color="white" medium>settings</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <!-- Content goes here -->
      <nuxt />
    </v-content>
    <!-- <v-footer :inset="footer.inset" app>
      <span class="px-3">{{ $t("app.year") }} {{ $t("app.creator") }}</span>
    </v-footer> -->
    <!--scroll btn-->
    <v-fab-transition>
      <v-btn
        v-show="scroll"
        fab
        bottom
        right
        color="pink"
        dark
        fixed
        @click="$vuetify.goTo(target, options)"
      >
        <v-icon medium>keyboard_arrow_up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import { loadMessages } from "~/plugins/i18n";

export default {
  data: () => ({
    dark: false,

    scroll: false,
    offsetTop: 0,

    language: ["gb", "ua"],
    lang: "gb",

    drawers: ["Default (no property)", "Permanent", "Temporary"],
    primaryDrawer: {
      model: null,
      type: "default (no property)",
      clipped: true,
      floating: false,
      mini: false
    },
    footer: {
      inset: false
    }
  }),

  watch: {
    offsetTop: function(value) {
      if (value > 500) {
        this.scroll = true;
        return;
      }
      this.scroll = false;
    }
  },
  methods: {
    eventHandler(name) {},
    async setLocale(locale) {
      if (this.$i18n.locale != locale) {
        loadMessages(locale);
        await this.$store.dispatch("lang/setLocale", { locale });
      }
    },

    onScroll(e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop;
    }
  },

  computed: {
    target() {
      return 0;
    },
    options() {
      return {
        duration: 800,
        offset: 0,
        easing: "easeInQuint"
      };
    }
  }
};
</script>

<style>
.lang-icon {
  font-size: 18px;
}
a {
  text-decoration: none;
}

a:active {
  background-color: transparent;
  color: inherit;
}

a:visited {
  background-color: transparent;
  color: inherit;
}
</style>
