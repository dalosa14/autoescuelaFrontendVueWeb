<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" :src="`http://localhost:1337${img}`" alt="portada permiso" />
      <div class="card-body">
        <h5 class="card-title">{{ permiso.nombre }}</h5>
        <p class="card-text">
          {{ permiso.descripcion }}
        </p>
        <a href="#" class="btn btn-primary">Ver tests</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["permiso"],
  computed:{
    img(){
      if(this.permiso.portada === null) return '/uploads/manual_del_permiso_b_del_carnet_de_conducir_9a8c36dbc4.jpg' 
      return  this.permiso.portada.url
    }
  }
  
};
</script>

<style></style>
