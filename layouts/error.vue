<template>
  <section class="not-found">
    <div>
      <h1>Пользователь не найден</h1>
      <nuxt-link to="/">На главную</nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ErrorPage',
}
</script>

<style scoped lang="scss">
h1 {
  color: red;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 355px);
}

.not-found {
  min-height: 575px;
}
</style>
