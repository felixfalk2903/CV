<template>
  <v-app>
    <parallax />

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import parallax from "./components/parallax.vue";

export default {
  name: "App",
  components: {
    parallax,
  },
  data: () => ({
    //
  }),
};
</script>

