import Vue from "vue";
import Router from "vue-router";
import Utils from "~/utils";

Vue.use(Router);

import Index from "~/pages/index";
import Budget from "~/pages/budget";
import Enviroment from "~/pages/enviroment";
import Healthcare from "~/pages/healthcare";
import Security from "~/pages/security";
import Webgis from "~/pages/webgis";
import Assessment from "~/pages/assessment";
import Settings from "~/pages/settings/settings";
import SettingsRating from "~/pages/settings/rating";
import SettingsAnother from "~/pages/settings/another";
import SettingsQuestions from "~/pages/settings/questions";
import SettingsAbout from "~/pages/settings/about";

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        name: "index",
        path: "/",
        component: Index
      },
      {
        name: "budget",
        path: "/budget",
        component: Budget
      },
      {
        name: "healthcare",
        path: "/healthcare",
        component: Healthcare
      },
      {
        name: "enviroment",
        path: "/enviroment",
        component: Enviroment
      },
      {
        name: "security",
        path: "/security",
        component: Security
      },
      {
        name: "webgis",
        path: "/webgis",
        component: Webgis
      },
      {
        name: "assessment",
        path: "/assessment",
        component: Assessment
      },
      // Settings
      {
        path: "/settings",
        component: Settings,
        children: [
          { path: "", redirect: { name: "settings.rating" } },
          {
            path: "rating",
            name: "settings.rating",
            component: SettingsRating
          },
          {
            path: "another",
            name: "settings.another",
            component: SettingsAnother
          },
          {
            path: "questions",
            name: "settings.questions",
            component: SettingsQuestions
          },
          
          { path: "about", name: "settings.about", component: SettingsAbout }
          // { path: 'password', name: 'settings.password', component: SettingsPassword }
        ]
      }
    ]
  });
}
