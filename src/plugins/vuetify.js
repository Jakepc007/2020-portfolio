import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0000ff",
        secondary: "#EC00B8",
        tertiary: "#FF0071",
        background: "white",
        accent: "#FFBB33",
        error: "#b71c1c",
      },

      dark: {
        primary: "white",
        secondary: "#b0bec5",
        tertiary: "",
        background: "22c",
        accent: "#FF683E",
        error: "#b71c1c",
        white: "black",
      },
    },
  },
});
