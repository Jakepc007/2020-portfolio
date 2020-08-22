import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#EE3824",
        secondary: "#440C39",
        tertiary: "524AB7",
        background: "#E8CFD3",
        accent: "#48E4AD",
        error: "#b71c1c",
      },
      dark: {
        primary: "#0000ff",
        secondary: "#b0bec5",
        tertiary: "",
        background: "",
        accent: "#8c9eff",
        error: "#b71c1c",
      },
    },
  },
});
