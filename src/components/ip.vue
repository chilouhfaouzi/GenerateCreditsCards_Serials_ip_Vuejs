<template>
  <div class="ip">
    <div class="container">
      <h1 class="text-center">Your IP Address</h1>
      <table class="my-info">
        <tr class="lign-info">
          <td class="first-column-info">IP Adress(IPV4)</td>
          <td class="second-column-info">{{ allInfo.ip }}</td>
        </tr>
        <tr class="lign-info">
          <td class="first-column-info">City</td>
          <td class="second-column-info">{{ allInfo.city }}</td>
        </tr>
        <tr class="lign-info">
          <td class="first-column-info">Region</td>
          <td class="second-column-info">{{ allInfo.region }}</td>
        </tr>
        <tr class="lign-info">
          <td class="first-column-info">Country</td>
          <td class="second-column-info">{{ allInfo.country_name }}</td>
        </tr>
        <tr class="lign-info">
          <td class="first-column-info">Capital</td>
          <td class="second-column-info">{{ allInfo.country_capital }}</td>
        </tr>
        <tr class="lign-info">
          <td class="first-column-info">Currency</td>
          <td class="second-column-info">{{ allInfo.currency }}</td>
        </tr>
        <tr class="lign-info">
          <td class="first-column-info">Country Population</td>
          <td class="second-column-info">{{ allInfo.country_population }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ip",

  data() {
    return {
      allInfo: {},
    };
  },
  mounted() {
    var _this = this;

    fetch("https://ipapi.co/json/")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        _this.allInfo = data;
      });
  },
};
</script>

<style scoped>
.ip {
  padding: 30px 0;
}
.my-info {
  border: 1px solid #fff;
  display: block;
  margin-top: 40px;
}
.my-info .lign-info {
  padding: 13px;
  display: block;
  font-weight: 600;
}
.my-info .lign-info:nth-child(odd) {
  background-color: #e9f7e9;
}
.my-info .lign-info:not(odd) {
  background-color: #bbe1c3;
}

.my-info .first-column-info {
  font-size: 22px;

  width: 300px;
}

.my-info .second-column-info {
  font-size: 24px;
}
</style>
