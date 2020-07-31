<template>
  <div class="hello">

    <div>
      <button class="yes" @click="callYes">Yes</button>
      <button class="no" @click="callNo">No</button>
    </div>
  </div>
</template>

<script>
export default {
	name: "HelloWorld",
  props: {
    callMe: {
      type: Function
    }
  },
  methods: {
    callYes(msg) {
      this.$emit("callMe", msg);
    },
    callNo(msg) {
			//this.callMe("no");
			this.$emit('callMe', msg)
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
