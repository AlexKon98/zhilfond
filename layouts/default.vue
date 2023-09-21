<template>
  <div>
    <Header />
    <main class="main container">
      <div class="wrap-container">
        <AsideBar />
        <Nuxt/>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import AsideBar from "~/components/AsideBar.vue";

export default {
  components: { Header, AsideBar },
}
</script>


<style lang="scss">
.wrap-container {
  display: flex;
  border: 1px solid #E0E0E0;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
}

.main {
  margin-bottom: 58px;
}
</style>
