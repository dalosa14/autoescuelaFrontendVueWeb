<template>
  <div>
    <h1>autoescuela</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      correo: "sagar5554@gmail.com",
      contra: "123123",
      url: "http://localhost:1337",
    };
  },
  methods: {
    async login() {
      try {
        let response = await this.axios.post(`${this.url}/auth/local`, {
          identifier: this.correo,
          password: this.contra,
        });
        if (response.data.user) {
          this.$cookie.setCookie(
            "Authorization",
            `Bearer ${response.data.jwt}`
          );
          console.log(response.data.user.role.name);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
