<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      left
    >
      <v-list dense>
        <v-list-item link to="/">
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/about">
          <v-list-item-action>
            <v-icon>mdi-cash-usd</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Hisob kitob</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/addStudent">
          <v-list-item-action>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>O'quvchi qo'shish</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col cols="12">
            <router-view></router-view>
            <!-- <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  :href="source"
                  icon
                  large
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip> -->
            <v-tooltip right>
              <!-- <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/bXNzZL"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon large>mdi-codepen</v-icon>
                </v-btn>
              </template> -->
              <span>Codepen</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
// function ab2str (buf) {
//   return String.fromCharCode.apply(null, new Uint16Array(buf))
// }

// const fs = require('fs')

// Create file
// fs.appendFile('mynewfile1.txt', '{"sarvar": "asdasd"}' + '\r\n', function (err) {
//   if (err) throw err
//   console.log('Saved!')
// })

// Read file
// fs.readFile('mynewfile1.txt', (err, data) => {
//   if (err) {
//     throw err
//   }
//   data = ab2str(data).split('\n')
//   var content = []
//   for (var i = 0; i < data.length; i++) {
//     console.log('0000', data[i])
//     if (data[i].length !== 0) {
//       console.log('1111', data[i])
//       content.push(JSON.parse(data[i]))
//     }
//   }
//   // Content is all data arrays
//   console.log('333333', content) // Put all of the code here (not the best solution)
// })

// Delete
// fs.unlink('mynewfile1.txt', function (err) {
//   if (err) throw err
//   console.log('File deleted!')
// })

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  }),
  beforeCreate () {
    this.$store.dispatch('getUser')
  },
  created () {
    this.$vuetify.theme.light = true
  }
}
</script>
