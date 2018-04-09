<template lang="html">
  <div class="konto">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card style="padding: 25px;">
          <h1 class="display-3 text-md-left">{{ $t('account') }}</h1>
          <h4 class="display-1 text-md-left">{{ $t('change_pw') }}</h4>
          <v-spacer class="mt-5"></v-spacer>
          <v-form style="padding-bottom: 50px;">
            <v-text-field
              label="Altes-passwort"
              required
            ></v-text-field>
            <v-text-field
              label="Neues Passwort"
              required
            ></v-text-field>
            <v-spacer class="mt-5"></v-spacer>
            <v-btn color="success" large class="left">{{ $t('update_pw') }}</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Account'
}
</script>

<style lang="css" scoped>
.konto {
  margin-top: 50px;
}
</style>
