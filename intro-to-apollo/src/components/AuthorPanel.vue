<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      Author
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-list>
        <v-list-item
            class="px-0"
        >
          <v-list-item-avatar>
            <v-icon>
              mdi-account
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{author.firstName + ' ' + author.lastName}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="px-0"
                     :href="`mailto:${author.email}`"
        >
          <v-list-item-avatar>
            <v-icon>
              mdi-email
            </v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{author.email}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
  export default {
    name: 'AuthorPanel',
    props: {
      author: {}
    }
  }
</script>