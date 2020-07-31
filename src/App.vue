<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :callMe="handleClick"/>
		<UserList></UserList>
		<ConfirmacionTc :card="tarjeta"></ConfirmacionTc>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import UserList from './components/UserList'
import ConfirmacionTc from './components/ConfirmacionTc'

export default {
	name: 'App',
	data () {
		return {
      tarjeta: {
				idPago: "1"
			}
    }
	},
  components: {
		HelloWorld,
		UserList,
		ConfirmacionTc
	},
	methods: {
		handleClick(msg) {
			console.log('aqui esta el mensaje');
			console.log(msg);
		}
	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
