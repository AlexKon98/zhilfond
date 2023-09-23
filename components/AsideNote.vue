<template>
  <div class="aside-bar__note">
    <div class="aside-bar__message" v-if="!input && !fetching && !usersLength">
      Начните поиск
    </div>
    <div class="aside-bar__message" v-if="input && fetching && !usersLength">
      Загрузка...
    </div>
    <div class="aside-bar__message" v-if="input && !fetching && !usersLength">
      Ничего не найдено
    </div>
  </div>
</template>

<script>
export default {
  name: 'AsideNote',
  props : {
    fetching: {
      type: Boolean,
      default: false,
    },
    input: {
      type: String,
    }
  },
  computed: {
    usersLength() {
      return this.$store.getters['users'].length;
    },
    inputLength() {
      return this.input.length > 0;
    }
  },
}
</script>

<style lang="scss" scoped>
.aside-bar__note {
  margin-top: 10px;
}

.aside-bar__message {
  color: #76787D;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &.error {
    color: red;
  }
}
</style>
