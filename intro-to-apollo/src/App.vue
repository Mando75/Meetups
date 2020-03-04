<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center display-1">
          Intro To Vue Apollo
      </div>

    </v-app-bar>

    <v-content>
        <router-view />
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
