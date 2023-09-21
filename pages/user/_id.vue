<template>
  <section class="user">
    <div class="user__image">
      <img v-if="user.img" :src="user.img" :alt="user.username">
      <img v-else src="~/static/no-photo-big.svg" alt="нет фото">
    </div>
    <div class="user__information">
      <div class="user__name">
        {{ user.name }}
      </div>
      <div class="user__contact">
        <div class="user__email">
          <span class="user__phone-mail">email:</span>
          <a class="user__contacts" :href="'mailto:' + user.emai">{{ user.email }}</a>
        </div>
        <div class="user__phone">
          <span class="user__phone-mail">phone:</span>
          <a class="user__contacts" :href="'tel:' + user.phone">{{ user.phone }}</a>
        </div>
      </div>
      <div class="user__about">
        <span class="user__title">О себе:</span>
        <p class="user__text">
          {{ `${user.name}; ${user.address.city}, ${user.address.street}, ${user.address.suite}, ${user.address.zipcode}; ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}; ${user.username}, ${user.website}` }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserPage',
  validate({params, redirect}) {
    let match = /^\d+$/.test(params.id) && params.id < 11;
    if (match) return match;
    else redirect('/404');
  },
  async fetch({store, params}) {
    await store.dispatch('fetchUser', params.id);
  },
  computed: {
    user() {
      return this.$store.getters['user'];
    }
  },
  head() {
    return {
      title: this.user.name
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  padding: 30px 30px 30px 21px;
  min-height: 575px;
}

.user__information {
  margin-left: 60px;
}

.user__name {
  margin-bottom: 10px;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.user__phone-mail {
  color: #333;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
}

.user__contacts {
  color: #76787D;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  padding-left: 5px;
}

.user__title {
  color: #333;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  margin-bottom: 25px;
  display: block;
}

.user__contact {
  margin-bottom: 20px;
}

.user__email {
  margin-bottom: 10px;
}

.user__text {
  color: #76787D;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>
