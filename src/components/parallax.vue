<template>
  <transition name="parallax-slide-in" appear>
    <div>
      <v-card>
        <v-parallax
          src="@/assets/topParralax.jpg"
          v-on:load="OnLoaded"              
          v-show="loaded"
        >
        <!-- https://github.com/charlmert/vuetify-video-parallax -->
          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h1 class="text-h2 font-weight-bold mb-4">Felix Falk</h1>

              <h4 class="text-h4 font-weight-thin">
                Yet another full stack developer
              </h4>
            </v-col>
          </v-row>
        </v-parallax>
      </v-card>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <p>sdflk</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "parallax",
  data: () => ({
    loaded: false,
  }),
  methods: {
    OnLoaded() {
      console.log("onLoaded")
      this.loaded = true;
    },
  },
};
</script>

<style>
.parallax-slide-in-enter-active {
  transition: all 1.5s;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
}
.parallax-slide-in-enter {
  transform: translateY(800px);
  opacity: 0;
}
</style>