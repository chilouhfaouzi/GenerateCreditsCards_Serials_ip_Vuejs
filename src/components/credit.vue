<template>
  <div class="credit">
    <div class="container">
      <h1 class="text-center">Credit card Generator</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="input">
            <div class="form-group">
              <label for="gener">BIN </label>
              <input
                type="text"
                class="form-control"
                id="gener"
                :value="
                  credit_number == 556273 ? '556273xxxxxxxxxxx' : credit_number
                "
                placeholder="5562 73xxx xxxx xxxx"
              />
              <div class="row">
                <div class="col">
                  <label for="month">Month </label>
                  <input
                    v-model="month"
                    type="text"
                    class="form-control"
                    id="month"
                    placeholder="xx"
                    maxlength="2"
                    size="2"
                  />
                </div>
                <div class="col">
                  <label for="year">Year </label>
                  <input
                    v-model="year"
                    type="text"
                    class="form-control"
                    id="year"
                    placeholder="xx"
                    maxlength="2"
                    size="2"
                  />
                </div>
              </div>

              <label for="rdv">CCV </label>
              <input
                v-model="rdv"
                type="text"
                class="form-control"
                name="rdv"
                id="rdv"
                placeholder="xxx"
                maxlength="3"
                size="3"
              />
            </div>
            <button @click="genere" class="btn btn-dark">
              <img src="../assets/set.svg" /> Generate Cards
            </button>
          </div>
        </div>
        <div class="col-md-6">
          <div class="output">
            <div class="form-group">
              <textarea
                v-model="all_credit"
                class="form-control"
                rows="11"
                cols="30"
                readonly
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "credit",
  data() {
    return {
      all_credit: "",
      credit_number: "556273",
      month: "",
      year: "",
      rdv: "",
    };
  },

  methods: {
    genere() {
      var valueStr = document.getElementById("gener").value;
      valueStr = valueStr.replace(/x/g, "");
      this.credit_number = valueStr.replace(/\s/g, "");
      var ancien = this.credit_number;
      this.all_credit = "";

      for (let i = 0; i < 10; i++) {
        while (this.credit_number.length < 16) {
          this.credit_number += Math.floor(Math.random() * 10);
        }
        this.credit_number += "|";
        if (this.month == "") {
          var testmounth = 0;

          this.month = Math.floor(Math.random() * 12) + 1;
          if (this.month < 10) {
            this.month = "0" + this.month;
          }
        }
        this.credit_number += this.month;
        if (testmounth == 0) {
          this.month = "";
        }

        if (this.year == "") {
          var testyear = 0;
          this.year = Math.floor(Math.random() * 6) + 20;
        }
        this.credit_number += "-";
        this.credit_number += this.year;
        if (testyear == 0) {
          this.year = "";
        }

        this.credit_number += "|";

        if (this.rdv == "") {
          var testrdv = 0;

          for (let i = 0; i < 3; i++) {
            this.rdv += Math.floor(Math.random() * 10);
          }
        }
        this.credit_number += this.rdv;
        if (testrdv == 0) {
          this.rdv = "";
        }
        this.all_credit += this.credit_number;
        this.all_credit += "\n";
        this.credit_number = ancien;
      }
    },
  },
};
</script>

<style scoped>
.credit {
  padding: 30px 0;
}
.credit img {
  width: 25px;
  margin-right: 8px;
}
.output {
  margin-top: 25px;
}
</style>
