<template>
  <form
    action=""
    class="send-form"
    @submit.prevent
  >
    <label class="send-form__label" for="name">
      <span class="title">Поиск сотрудников</span>
      <input class="send-form__input"
        type="text" v-model="input"
        id="name" name="name"
        placeholder="Введите Id или имя"
        @keyup="debounce"
      >
    </label>
  </form>
</template>

<script>
export default {
  name: 'AsideForm',
  data() {
    return {
      input: '',
      timeout: null,
    }
  },
  computed: {
    users() {
      return this.$store.getters['users'];
    },
  },
  watch: {
    async input(val) {
      if (val.trim().length > 0) this.$emit('writing', val);
      else {
        this.$emit('writing', '');
        await this.$store.dispatch('fetchUsers', []);
      }
    }
  },
  methods: {
    fetching(value) {
      this.$emit('fetching', value);
    },
    debounce() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.onKeyup, 500);
    },
    async onKeyup() {
      if (this.input.trim().length > 0) {
        this.fetching(true);
        if (this.input.includes(',')) {
          let arr = [] ;
          this.input.split(', ').forEach(el => {
            arr.push(el.trim().toLowerCase());
          });
          await this.$store.dispatch('fetchUsers', arr);
          this.fetching(false);
        } else {
          await this.$store.dispatch('fetchUsers', [this.input.trim().toLowerCase()]);
          this.fetching(false);
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.title {
  margin-bottom: 14px;
}

.send-form__label, .send-form__input {
  display: block;
  max-width: 100%;
  width: 100%;
}

.send-form__label {
  margin-bottom: 29px;
}

.send-form__input {
  padding: 16px 24px;
  border-radius: 8px;
  border: 1.5px solid var(--all-colors-gray-gray-200, #E9ECEF);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #76787D;
}
</style>
