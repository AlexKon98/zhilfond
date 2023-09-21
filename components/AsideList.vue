<template>
  <ul class="users__list">
    <li class="users__item" v-for="user in users" :key="user.id">
      <nuxt-link no-prefetch class="users__img" :to="'/user_' + user.id">
        <img v-if="user.img" :src="user.img" :alt="user.username">
        <img v-else src="~/static/no-photo.svg" alt="нет фото">
      </nuxt-link>
      <nuxt-link no-prefetch active-class="active" :to="'/user/' + user.id" class="users__info">
        <div class="users__link">{{ user.username }}</div>
        <div class="users__mail">{{ user.email }}</div>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AsideList',
  computed: {
    users() {
      return this.$store.getters['users'];
    }
  }
}
</script>

<style lang="scss" scoped>
.users__list {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 18px 0;
}
.users__item {
  display: flex;
  align-items: stretch;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
}

.users__img {
  display: block;
  width: 70px;
  height: 70px;
  object-fit: cover;
}

.users__info {
  border-left: 1px solid #E0E0E0;
  padding: 15px 15px 23px;
  width: calc(100% - 70px);
  &.active {
    background-color: #E0E0E0;
  }
}

.users__mail {
  color: #76787D;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.users__link {
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
}
</style>
