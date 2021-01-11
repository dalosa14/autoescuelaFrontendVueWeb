<template>
  <div>
    <div>
      <input type="text" placeholder="Correo" v-model="correo" />
      <input type="text" placeholder="Contraseña" v-model="contra" />
    </div>
    <input type="button" value="Enviar" @click="login()" />
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
          this.$cookies.set(
            "Authorization",
            `Bearer ${response.data.jwt}`
          );
          if (response.data.user.role.name == "autoescuela") {
            this.$router.replace("/autoescuela");
          }
          if (response.data.user.role.name == "usuario") {
            this.$router.replace("/inicio");
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
