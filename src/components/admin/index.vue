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
          <h5 class="display-1 text-md-left">Inactive Clubs</h5>
          <v-spacer class="mt-2"></v-spacer>
        </v-flex>
      </v-layout> <!-- /.v-layout -->
      <v-layout>
        <v-flex xs12 sm8 offset-sm2>
          <v-card>
            <a href="#" style="color: black;">
              <v-card-title>
                <p class="text-md-left">Dolder Golf Club</p>
                <v-spacer></v-spacer>
                <v-icon>delete</v-icon>
              </v-card-title>
            </a>
            <v-divider></v-divider>
          </v-card>
        </v-flex>
      </v-layout> <!-- /.v-layout -->
      <v-spacer class="mt-5"></v-spacer>
      <!-- Active and Registered Clubs -->
      <v-layout>
        <v-flex xs12 sm8 offset-sm2>
          <h5 class="display-1 text-md-left">Registered and active Clubs</h5>
          <v-spacer class="mt-2"></v-spacer>
        </v-flex>
      </v-layout> <!-- /.v-layout -->
      <v-layout>
        <v-flex xs12 sm8 offset-sm2>
          <v-card>
            <a href="#" style="color: black;">
              <v-card-title>
                <p class="text-md-left">Dolder Golf Club</p>
                <v-spacer></v-spacer>
                <v-icon>delete</v-icon>
              </v-card-title>
            </a>
            <v-divider></v-divider>
          </v-card>
        </v-flex>
      </v-layout> <!-- /.v-layout -->
      <v-spacer class="mt-5"></v-spacer>
      <!-- Not Registered Clubs -->
      <v-layout>
        <v-flex xs12 sm8 offset-sm2>
          <h5 class="display-1 text-md-left">Unregistered Clubs</h5>
          <v-spacer class="mt-2"></v-spacer>
        </v-flex>
      </v-layout> <!-- /.v-layout -->
      <v-layout>
        <v-flex xs12 sm8 offset-sm2>
          <v-card>
            <a href="#" style="color: black;">
              <v-card-title>
                <p class="text-md-left">Dolder Golf Club</p>
                <v-spacer></v-spacer>
                <v-icon>delete</v-icon>
              </v-card-title>
            </a>
            <v-divider></v-divider>
          </v-card>
        </v-flex>
      </v-layout> <!-- /.v-layout -->
    <v-footer color="blue darken-1" app inset>
      <span class="white--text" style="margin-left: -280px;">&copy; 2018</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
export default {
  name: 'Admin',
  data: () => ({
    drawer: null
  })
}
</script>

<style lang="css" scoped>

</style>
