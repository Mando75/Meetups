<template>
  <v-expansion-panels accordion flat tile>
    <AuthorPanel :author="book.author" />
    <PublisherPanel :publisher="book.publisher" />
  </v-expansion-panels>
</template>
<script>
  import AuthorPanel from '@/components/AuthorPanel'
  import PublisherPanel from '@/components/PublisherPanel'

  export default {
    name: 'BookInfoPanel',
    components: { PublisherPanel, AuthorPanel },
    props: {
      book: {}
    }
  }
</script>