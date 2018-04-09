<template lang="html">
  <div class="create-offer">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <v-card style="padding: 25px;">
          <h1 class="display-3 text-md-left">{{ $t('create_offer') }}</h1>
          <v-spacer class="mt-3"></v-spacer>
          <v-form style="padding-bottom: 50px;">
            <v-select label="Typ" single-line :items="this.items" @change="openForm()"></v-select>
            <div v-show="this.showForm">
              <h6 class="headline">Datum</h6>
              <v-menu
                ref="menu"
                lazy
                :close-on-content-click="false"
                v-model="menu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                min-width="290px"
                :return-value.sync="date"
              >
              <v-text-field
                  slot="activator"
                  label="Von"
                  v-model="date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
              <v-menu
                ref="menu"
                lazy
                :close-on-content-click="false"
                v-model="menu"
                transition="scale-transition"
                offset-y
                full-width
                :nudge-right="40"
                min-width="290px"
                :return-value.sync="date"
              >
              <v-text-field
                  slot="activator"
                  label="Bis"
                  v-model="date"
                  prepend-icon="event"
                  readonly
                ></v-text-field>
                <v-date-picker v-model="date" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                  <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                </v-date-picker>
              </v-menu>
              <h6 class="headline">Zeitien</h6>
              <v-text-field
                label="23:59"
                required
              ></v-text-field>
              <v-text-field
                label="(Wird Automatisch)"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                label="Anzahl Slots"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                label="Intervall (in Minutes)"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                label="Alter Preis"
                required
              ></v-text-field>
              <v-text-field
                type="number"
                label="Neuer Preis"
                required
              ></v-text-field>
            </div>
            <v-spacer class="mt-5"></v-spacer>
            <v-btn color="success" large class="left">SPEICHERN</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'Create-Offer',
  data () {
    return {
      items: ['9-hole', '18-hole'],
      showForm: false,
      date: null,
      menu: false,
      modal: false
    }
  },
  methods: {
    openForm () {
      this.showForm = true
    }
  }
}
</script>

<style lang="css" scoped>
.create-offer {
  margin-top: 50px;
}
</style>
