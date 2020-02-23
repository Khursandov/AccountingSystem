<template>
<v-container>
  <form>
    <v-select
      v-model="subject"
      :items="subjects"
      :error-messages="subjectErrors"
      label="Fan"
      required
    ></v-select>
    <v-select
      v-model="teacher"
      :items="teachers"
      :error-messages="teacherErrors"
      label="O'qituvchi"
      required
    ></v-select>
    <v-text-field
      v-model="student"
      :error-messages="nameErrors"
      :counter="40"
      label="O'quvchi"
      required
    ></v-text-field>
    <v-btn class="mr-4" @click="submit">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </form>
</v-container>
</template>

<script>

export default {

  data: () => ({
    student: '',
    subject: '',
    teacher: '',
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
      'Yisuf Aka',
      'Fazliddin Aka',
      'Shofozilaka',
      'Elyoraka',
      'Umidaka',
      'Komilaka',
      'Nigorapa',
      'Imom',
      'Shoxrux'
    ],
    nameErrors: [],
    teacherErrors: [],
    subjectErrors: []
  }),

  computed: { },

  methods: {
    submit () {
      this.checkName()
      this.checkTeacher()
      this.checksubject()
      if (this.checkName() && this.checkTeacher() && this.checksubject()) {
        const data = {
          subject: this.subject,
          teacher: this.teacher,
          student: this.student
        }
        this.$store.dispatch('createUser', data)
      }
    },
    checkName () {
      if (this.student.length === 0) {
        this.nameErrors.push('Enter the name of stident')
        return false
      } else {
        this.nameErrors = []
        return true
      }
    },
    checkTeacher () {
      if (this.teacher.length === 0) {
        this.teacherErrors.push('Enter the name of teacher')
        return false
      } else {
        this.teacherErrors = []
        return true
      }
    },
    checksubject () {
      if (this.subject.length === 0) {
        this.subjectErrors.push('Enter the name of subject')
        return false
      } else {
        this.subjectErrors = []
        return true
      }
    },
    clear () {
      this.subject = null
      this.teacher = null
      this.student = null
    }
  }
}
</script>
