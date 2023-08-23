<script>
import TenisApi from "@/api/tenis";
const tenisApi = new TenisApi();
export default {
  data() {
    return {
      tenis: [],
      teniss: {},
    };
  },
  async created() {
    this.teniss = await tenisApi.buscarTodosOsTenis();
  },
  methods: {
    async salvar() {
      if (this.teniss.id) {
        await tenisApi.updatTenis(this.teniss);
      } else {
        await tenisApi.addTenis(this.teniss);
      }
      this.teniss = {};
      this.teniss = await tenisApi.buscarTodosOsTenis();
    },
    editar(teniss) {
      Object.assign(this.teniss, teniss);
    },
    async excluir(teniss) {
      await tenisApi.deleteTenis(teniss.id);
      this.teniss = await tenisApi.buscarTodosOsTenis();
    },
  },
};
</script>

<template>
  <h1>Tenis</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="teniss.titulo" placeholder="titulo" />
    <button @click="salvar(teniss)">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="teniss in teniss" :key="teniss.id">
      <span @click="editar(teniss)"> ({{ teniss.titulo }}) </span>
      <button @click="excluir(teniss)">X</button>
    </li>
  </ul>
</template>
