<template>
  <aside class="aside-bar">
    <AsideForm />

    <div class="title">Результаты</div>
    <AsideList />
    <AsideNote />
  </aside>
</template>

<script>
import AsideForm from './AsideForm.vue';
import AsideList from './AsideList.vue';
import AsideNote from './AsideNote.vue';

export default {
  name: 'AsideBar',
  components: {
    AsideForm,
    AsideList,
    AsideNote,
  },
}
</script>

<style lang="scss" scoped>
.aside-bar {
  width: 290px;
  padding: 27px 30px 27px 20px;
  border-right: 1px solid #E0E0E0;
}
</style>
