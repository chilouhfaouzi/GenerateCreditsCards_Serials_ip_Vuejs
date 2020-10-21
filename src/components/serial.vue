<template>
  <div class="serial">
    <div class="container">
      <h1 class="text-center">Serials Generator</h1>
      <div class="row">
        <div class="col-md-6">
          <div class="input">
            <div class="form-group">
              <label for="serialLen">Serials Length</label>
              <input
                v-model="serialLen"
                type="text"
                class="form-control"
                id="serialLen"
                placeholder="xx"
                maxlength="2"
                size="2"
              />
              <label for="number">Numbers of serials</label>
              <input
                v-model="numberserials"
                type="text"
                min="5"
                class="form-control"
                id="number"
                placeholder="xx"
                maxlength="2"
                size="2"
              />
              <button @click="generer" class="mt-3 btn btn-dark">
                <img src="../assets/set.svg" /> Generate Serials
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="output">
            <div class="form-group">
              <textarea
                v-model="all_serials"
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
  name: "serial",
  data() {
    return {
      serialLen: 20,
      numberserials: 10,
      all_serials: "",
      chars: "1234567890ABCDEFGHJIKLMNORQPSTVUYZXabcdefghjkilmnoprqstvuzyx",
    };
  },
  methods: {
    generer() {
      this.all_serials = "";
      for (let j = 0; j < this.numberserials; j++) {
        let serial = "";
        for (let i = 0; i < this.serialLen; i++) {
          if (i % 4 == 0 && i > 0) {
            serial += "-";
          }
          var randmKey = Math.floor(Math.random() * this.chars.length);

          serial += this.chars[randmKey];
        }
        this.all_serials += serial;
        this.all_serials += "\n";
      }
    },
  },
};
</script>

<style scoped>
.serial {
  padding: 30px 0;
}
.serial img {
  width: 25px;
  margin-right: 8px;
}
</style>
