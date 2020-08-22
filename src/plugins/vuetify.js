import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#0000ff",
        secondary: "#00ABE7",
        tertiary: "#2DC7FF",
        background: "white",
        accent: "#FFBB33",
        error: "#b71c1c",
      },

      dark: {
        primary: "white",
        secondary: "#8FAD88",
        tertiary: "",
        background: "#1B4079",
        accent: "#FF683E",
        error: "#b71c1c",
      },
    },
  },
});
