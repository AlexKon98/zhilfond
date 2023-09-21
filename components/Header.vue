<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/" class="header__link">
        Жилфонд
      </nuxt-link>
      <div class="header__user">Пользователь</div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
.header {
  padding-top: 46px;
  padding-bottom: 30px;
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__link {
    color: #E31F24;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  &__user {
    color: #333;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}


</style>
