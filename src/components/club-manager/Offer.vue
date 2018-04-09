<template>
  <div class="offer">
    <v-jumbotron color="white lighten-2">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex xs12 sm6 offset-sm3>
            <h3 class="display-3">{{ $t('offers') }}</h3>
            <v-divider class="my-3"></v-divider>
            <v-btn class="title mb-3" :to="'/offer/single-offer'">{{ $t('9-hole') }}, 17. Mai 2017 - 24. Mai 2017</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Offer'
}
</script>

<style lang="css">
</style>
