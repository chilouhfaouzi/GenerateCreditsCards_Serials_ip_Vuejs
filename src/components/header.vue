<template>
  <div class="header">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <p class="logo">
            <span class="first-logo">S</span>Gen<span class="first-logo"
              >R</span
            >
          </p>
        </div>
        <div class="col-md-6">
          <div class="list-header">
            <router-link tag="li" class="li" to="/">Credit card</router-link>
            <router-link class="li" to="/serial">Serials</router-link>
            <router-link class="li" to="/ip">IP Address</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
.header {
  background-color: #222f3e;
  color: #fff;
  padding: 0;
}
p,
ul {
  margin: 0 !important;
}
.header .row > div {
  line-height: 30px;
}
.first-logo {
  font-size: 30px;
  color: rgb(96, 228, 166);
}
.logo {
  font-weight: bold;
  font-size: 25px;
  padding: 15px 0;
}

.list-header .li {
  display: inline-block;
  padding: 15px 25px;
  font-size: 18px;
  text-decoration: none;
  color: #fff;
}
.li.router-link-active {
  background-color: #324e62;
}
</style>
