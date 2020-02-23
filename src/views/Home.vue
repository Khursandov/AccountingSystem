<template>
  <form>
    <v-select
      v-model="subject"
      :items="subjects"
      :error-messages="errors.subjectErrors"
      label="Fan"
      required
    ></v-select>
    <v-select
      v-model="teacher"
      :items="teachers"
      :error-messages="errors.teacherErrors"
      label="O'qituvchi"
      required
    ></v-select>
    <v-select
      v-model="student"
      :items="students"
      :error-messages="errors.studentErrors"
      label="O'quvchi"
      required
    ></v-select>
    <v-text-field
      v-model="summa"
      :error-messages="errors.summaErrors"
      :counter="10"
      label="Summa"
      required
    ></v-text-field>
    <v-checkbox
      v-model="cash"
      label="Naqt pul"
      required
    ></v-checkbox>
    <v-checkbox
      v-model="plastic"
      label="Plastik"
      required
    ></v-checkbox>
    <v-btn class="mr-4" @click="submit">Tolov</v-btn>
    <v-btn @click="clear">O'chirish</v-btn>
    <h1 hidden>{{filterusers}}</h1>
  </form>
</template>

<script>

export default {

  data: () => ({
    summa: '',
    cash: false,
    plastic: false,
    subject: '',
    teacher: '',
    student: '',
    subjects: [
      'Matematika',
      'Kimyo',
      'Biologiya',
      'Tarix',
      'Ona tili',
      'Fizika',
      'Geografiya',
      'Informatika',
      'Ingliz tili'
    ],
    teachers: [
      'Musayev Husan',
      'Sabriddinov Asror',
      'Sabriddinov Asliddin',
      'Botir Aka Ikromov',
      'Xursandov Sardor',
      'Yusuf Aka',
      'Fazliddin Aka',
      'Shofozilaka',
      'Elyoraka',
      'Umidaka',
      'Komilaka',
      'Nigorapa',
      'Imom',
      'Shoxrux'
    ],
    students: [],
    errors: {
      subjectErrors: [],
      teacherErrors: [],
      studentErrors: [],
      summaErrors: []
    }
  }),

  computed: {
    filterusers () {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.students = []
      this.$store.state.users.filter(user => {
        if (user.teacher === this.teacher) {
          this.students.push(user.student)
          return user.student
        }
      })
      return 1
    }
  },

  methods: {
    submit () {
      this.checkSumma()
      this.checkSubject()
      this.checkTeacher()
      this.checkStudent()
      var today = new Date()
      var dd = today.getDate()
      var mm = today.getMonth() + 1
      var yyyy = today.getFullYear()
      if (dd < 10) dd = '0' + dd
      if (mm < 10) mm = '0' + mm
      if (this.checkSumma() && this.checkSubject() && this.checkTeacher() && this.checkStudent()) {
        const data = {
          summa: this.summa,
          cash: this.cash,
          plastic: this.plastic,
          subject: this.subject,
          teacher: this.teacher,
          student: this.student,
          data: yyyy + '/' + mm + '/' + dd
        }
        this.$store.dispatch('submitPayment', data)
      }
    },
    checkSumma () {
      if (this.summa.length === 0) {
        this.errors.summaErrors.push('Summani kiriting')
        return false
      } else {
        this.errors.summaErrors = []
        return true
      }
    },
    checkSubject () {
      if (this.subject.length === 0) {
        this.errors.subjectErrors.push('Fanni kiriting')
        return false
      } else {
        this.errors.subjectErrors = []
        return true
      }
    },
    checkTeacher () {
      if (this.teacher.length === 0) {
        this.errors.teacherErrors.push("O'qituvchini tanlang")
        return false
      } else {
        this.errors.teacherErrors = []
        return true
      }
    },
    checkStudent () {
      if (this.student.length === 0) {
        this.errors.studentErrors.push("O'quvchini kiriting")
        return false
      } else {
        this.errors.studentErrors = []
        return true
      }
    },
    clear () {
      this.name = ''
      this.checkbox = false
    }
  }
}
</script>
