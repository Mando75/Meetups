<template>
  <v-dialog
      v-model="show"
      max-width="600px"
  >
    <v-card class="pa-8">
      <v-card-title>
        New Review
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-row>
            <v-text-field v-model="title" required label="Title" />
          </v-row>
          <v-row>
            <v-text-field v-model="name" required label="Your Name" />
          </v-row>
          <v-row>
            <v-textarea v-model="text" />
          </v-row>
          <v-row>
            <v-rating v-model="rating" half-increments hover />
            <v-spacer />
            <v-btn dark color="blue" @click="addReview">Submit</v-btn>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'AddReviewDialog',
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        show: false,
        title: '',
        name: '',
        rating: 0,
        text: ''
      }
    },
    methods: {
      addReview() {
        this.show = false
      }
    },
    watch: {
      value (val) {
        this.show = val
      },
      show (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style scoped>

</style>