<template>
  <aside class="aside-bar">
    <AsideForm @fetching="changeFetching" @writing="changeInput"/>

    <div class="title">Результаты</div>
    <AsideList v-if="!fetching && usersLength" :fetching="fetching" :input="input"/>
    <AsideNote v-if="(!fetching && !usersLength) || (fetching)"
      :fetching="fetching" :input="input"
    />
  </aside>
</template>

<script>
import AsideForm from './AsideForm.vue';
import AsideList from './AsideList.vue';
import AsideNote from './AsideNote.vue';

export default {
  name: 'AsideBar',
  data() {
    return {
      fetching: false, // состояние загрузки
      input: '', // значение поля ввода поиска пользователей
    }
  },
  methods: {
    /**
     * Функция для эмита события изменения fetching
     * @param value - boolean
    */
    changeFetching(value) {
      this.fetching = value;
    },
    /**
     * Функция для эмита события изменения значения поля ввода поиска пользователей
     * @param value - string
    */
    changeInput(value) {
      this.input = value;
    }
  },
  computed: {
    usersLength() {
      return this.$store.getters['users'].length;
    }
  },
  components: {
    AsideForm,
    AsideList,
    AsideNote,
  },
}
</script>

<style lang="scss" scoped>
.aside-bar {
  width: 355px;
  padding: 27px 30px 27px 20px;
  border-right: 1px solid #E0E0E0;
}
</style>
