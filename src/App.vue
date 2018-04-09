<template>
  <v-app light>
    <v-toolbar fixed app color="white">
      <v-toolbar-title>
        <div class="avatar" style="height: 100px; width: 200px;">
          <img src="./assets/images/logo.svg" style="height: 200px;" alt="">
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="light-green darken-1" class="white--text" style="text-transform: capitalize;" :to="'/create-offer'">{{ $t('create_offer') }}</v-btn>
        <v-btn flat :to="'/offer'">{{ $t('offers') }}</v-btn>
        <v-btn flat :to="'/profile'">{{ $t('profile') }}</v-btn>
        <v-btn flat :to="'/account'">{{ $t('account') }}</v-btn>
        <v-menu transition="slide-x-transition">
          <v-btn flat slot="activator"><v-icon>account_circle</v-icon></v-btn>
          <v-list>
            <v-list-tile @click="">
              <v-list-tile-title v-text="'don@kodiyan.ch'"></v-list-tile-title>
              <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      <v-menu bottom left>
        <v-btn icon slot="activator">
          <v-icon>language</v-icon>
        </v-btn>
        <v-list>
          <v-list-tile v-for="language in languages" :key="language.locale" @click="switchLanguage(language)">
            <v-list-tile-title>{{ language.displayName }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        languages: [
          {locale: 'de', displayName: 'DE'},
          {locale: 'fr', displayName: 'FR'},
          {locale: 'it', displayName: 'IT'},
          {locale: 'en', displayName: 'EN'}
        ],
        sideNav: false
      }
    },
    methods: {
      switchLanguage (language) {
        this.$i18n.locale = language.locale
      }
    }
  }
</script>

<style>

</style>
