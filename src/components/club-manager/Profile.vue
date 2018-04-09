<template lang="html">
  <div class="profil">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-form style="padding: 25px;">
            <v-text-field
              label="Name"
              :counter="10"
              required
            ></v-text-field>
            <v-text-field
              label="E-mail"
              required
            ></v-text-field>
            <h1 class="display-1">Addresse</h1>
            <v-text-field
              label="Strasse"
              required
            >Strasse</v-text-field>
            <v-text-field
              label="Stadt"
              required
            >Stadt</v-text-field>
            <v-text-field
              label="PLZ"
              required
            >PLZ</v-text-field>
            <v-btn color="success">Save</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style lang="css" scoped>
.profil {
  margin-top: 50px;
}
</style>
