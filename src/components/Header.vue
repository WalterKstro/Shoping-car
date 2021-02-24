<template>
  <header class="header mb-3">
    <div class="brand"><img alt="Vue logo" src="../assets/logo.png"></div>
    <nav class="nav">
      <router-link :to="{ name : 'Products'}">Products</router-link>
      <router-link :to="{ name : 'Shoping'}">Shoping</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name : 'componentHeader'
  }
</script>

<style lang="css" scoped>
.header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  flex-basis: 15%;
  display: flex;
  justify-content: space-evenly;
}
img{
  width: 40%;
  height: auto;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
}

.nav a.router-link-exact-active {
  color: #42b983;
}
</style>