<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/header";

export default {
  name: "app",
  components: {
    Header,
  },
  methods: {
    stylebody() {
      const el = document.getElementsByTagName("body")[0];
      el.classList.add("default");
    },
  },
  mounted() {
    this.stylebody();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.default {
  background-color: #5fccb6;
  color: #222f3e;
}
ul {
  list-style: none;
}
li {
  display: inline-block;
}
label {
  font-size: 18px;
  font-weight: 600;
  margin-top: 25px;
}
textarea {
  overflow: hidden;
  line-height: 1.8em !important;
  background-color: #e1f5eb !important;
  font-size: 18px !important;
}
.row .input,
.row .output {
  padding: 30px 0;
}
input {
  background-color: #e1f5eb !important;
  color: black;
  font-size: 18px;
}

input::placeholder {
  color: rgb(82, 99, 105);
  opacity: 1;
}
</style>
