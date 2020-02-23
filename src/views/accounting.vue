<template>
<v-container>
  <v-row>
    <v-col cols="12" sm="6" md="6">
      <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="from"
            label="Dan"
            prepend-icon="mdi-calendar"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="from" @input="menu1 = false"></v-date-picker>
      </v-menu>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="to"
            label="Gacha"
            prepend-icon="mdi-calendar"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="to" @input="menu2 = false"></v-date-picker>
      </v-menu>
    </v-col>
     <v-col cols="12" sm="12" md="12" class="text-center">
      <v-btn class="ma-2" outlined @click="calculate" color="grey darken-1">Hisobot</v-btn>
     </v-col>
     <v-col>
       <Table />
     </v-col>
  </v-row>
  {{this.$store.state.payments}}
  {{filterByDate}}
</v-container>
</template>
<script>
import Table from '../components/table'
export default {
  components: { Table },
  data: () => ({
    from: new Date().toISOString().substr(0, 10).replace(/-/g, '/'),
    to: new Date().toISOString().substr(0, 10).replace(/-/g, '/'),
    menu1: false,
    menu: false,
    modal: false,
    menu2: false,
    table: []
  }),
  beforeCreate () {
    this.$store.dispatch('getPayments')
  },
  computed: {
    filterByDate () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.table = []
      this.$store.state.payments.filter(payment => {
        // 8, 10 day
        // 0, 4 year
        // eslint-disable-next-line eqeqeq
        if (this.from.slice(0, 4) <= payment.data.slice(0, 4) && // year
            this.from.slice(5, 4) <= payment.data.slice(7, 4) && // month
            (this.from.slice(8, 10) <= payment.data.slice(8, 10) ||
            this.from.slice(5, 4) <= payment.data.slice(7, 4))) {
        }
        console.log(payment.data)
        console.log(payment.data.slice(5, 7))
        console.log(this.from)
        console.log(this.from.slice(5, 7))
        // if (payment.data === this.from) {
        //   this.students.push(payment.student)
        //   return payment.student
        // }
      })
      return 1
    }
  },
  methods: {
    calculate () {
    }
  }
}
</script>
