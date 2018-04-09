<template lang="html">
  <div id="admin">
    <v-app id="admin">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Clubs</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="blue darken-1" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Feedrop Admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat>Sign Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-spacer class="mt-5"></v-spacer>
      <v-layout>
        <v-flex xs12 sm8 offset-sm2>
          <v-card style="padding: 25px;">
            <v-card-title>
              <h2 class="display-1">Dolder Club</h2>
            </v-card-title>
            <v-form style="padding: 20px;">
              <v-switch
                label="Activ"
                v-model="ex11"
                color="blue darken-1"
                value="blue darken-1"
                hide-details
              ></v-switch>
              <v-switch
                label="Registered"
                v-model="ex11"
                color="blue darken-1"
                value="blue darken-1"
                hide-details
              ></v-switch>
              <v-text-field
                label="Name"
                required
              ></v-text-field>
              <v-text-field
                label="E-mail"
                required
              ></v-text-field>
              <v-spacer class="mt-3"></v-spacer>
              <h2 class="display-1 left">Addresse</h2>
              <v-spacer class="mt-5"></v-spacer>
              <v-text-field
                label="Strasse"
                required
              ></v-text-field>
              <v-text-field
                label="Stadt"
                required
              ></v-text-field>
              <v-text-field
                label="PLZ"
                required
              ></v-text-field>
              <v-spacer class="mt-3"></v-spacer>
              <h2 class="display-1 left">Hintergrund Bild</h2>
              <v-spacer class="mt-5"></v-spacer>
              <v-btn color="success left" style="margin-left: -278px;">SAVE</v-btn>
            </v-form>
          </v-card>
        </v-flex>
      </v-layout> <!-- /.v-layout -->
    <v-footer color="blue darken-1" app inset>
      <span class="white--text" style="margin-left: -278px;">&copy; 2018</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data: () => ({
    drawer: null,
    ex11: null
  })
}
</script>

<style lang="css">
</style>
