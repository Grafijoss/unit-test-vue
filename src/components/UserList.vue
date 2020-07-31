<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li 
			v-for="(user, index) in users"
			v-bind:key="index">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      users: []
    };
	},
	created: function () {
		console.log('created');
		this.loadUsers()
	},
  methods: {
    async loadUsers() {
      const { data } = await axios.get("http://localhost:3000/usuarios");
      this.users = data;
    }
  }
};
</script>
