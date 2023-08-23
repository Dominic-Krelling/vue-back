<script>
import CamisetasApi from "@/api/camiseta";

export default {
  data() {
    return {
      camisetas: [],
      camiseta: {},
    };
  },
  async created() {
    this.camisetasApi = new CamisetasApi();
    this.camisetas = await this.camisetasApi.buscarTodasAsCamisetas();
  },
  methods: {
    async salvar() {
      if (this.camiseta.id) {
        await this.camisetasApi.atualizarCamiseta(this.camiseta);
      } else {
        await this.camisetasApi.adicionarCamiseta(this.camiseta);
      }
      this.camiseta = {};
      this.camisetas = await this.camisetasApi.buscarTodasAsCamisetas();
    },
    editar(camiseta) {
      Object.assign(this.camiseta, camiseta);
    },
    async excluir(camiseta) {
      await this.camisetasApi.excluirCamiseta(camiseta.id);
      this.camisetas = await this.camisetasApi.buscarTodasAsCamisetas();
    },
  },
};
</script>

<template>
  <h1>Camiseta</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="camiseta.nome" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="camiseta in camisetas" :key="camiseta.id">
      <span @click="editar(camiseta)"> {{ camiseta.nome }} - </span>
      <button @click="excluir(camiseta)">X</button>
    </li>
  </ul>
</template>

<style></style>
