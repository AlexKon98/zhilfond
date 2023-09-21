<template>
  <section class="choose">
    <div>Выберите сотрудника, чтобы посмотреть его профиль</div>
  </section>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Жилфонд'
    }
  }
}
</script>

<style lang="scss" scoped>
.choose {
  color: #76787D;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  min-height: 575px;
  width: calc(100% - 355px);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
