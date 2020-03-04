<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Publisher
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list>
        <v-list-item
          class="px-0"
          three-line
        >
          <v-list-item-avatar>
            <v-icon>mdi-domain</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{publisher.name}}</v-list-item-title>
            <v-list-item-subtitle>{{publisher.street}}</v-list-item-subtitle>
            <v-list-item-subtitle>{{publisher.city}}, {{publisher.state}} {{publisher.zip}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
  export default {
    name: 'PublisherPanel',
    props: {
      publisher: {}
    }
  }
</script>