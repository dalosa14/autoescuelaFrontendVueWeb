<template>
  <div>
    <permiso
      v-for="permiso in result"
      :key="permiso.id"
      :permiso="permiso"
    />
    {{result[0].portada}}
  </div>
</template>

<script>
import permiso from "../components/permisoCard";
import getPermisos from "../graphql/getPermisos.gql";
import { useQuery, useResult } from "@vue/apollo-composable";
export default {
  components: {
    permiso,
  },
  setup() {
    function getPerms() {
      const { result } = useQuery(getPermisos);
      return useResult(result, null, (data) => data.permisos);
      
    }
    let result = getPerms();
    console.log(result);
    return { result };
  },
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
