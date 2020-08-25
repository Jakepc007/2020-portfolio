import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#5566ff",
        background: "#fff",
        error: "#b71c1c",
        font: "000",
      },

      dark: {
        primary: "#EEF36A",
        background: "#2E3860",
        error: "#b71c1c",
        font: "fff",
      },
    },
  },
});
