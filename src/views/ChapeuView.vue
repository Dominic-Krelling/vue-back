<script>
import ChapeusApi from "@/api/chapeu";
const chapeusApi = new ChapeusApi();
export default {
  data() {
    return {
      chapeus: [],
      chapeu: {},
    };
  },
  async created() {
    this.chapeus = await chapeusApi.buscarTodasOsChapeus();
  },
  methods: {
    async salvar() {
      if (this.chapeu.id) {
        await chapeusApi.atualizarChapeu(this.chapeu);
      } else {
        await chapeusApi.adicionarChapeu(this.chapeu);
      }
      this.chapeu = {};
      this.chapeus = await chapeusApi.buscarTodasOsChapeus();
    },
    editar(chapeu) {
      Object.assign(this.chapeu, chapeu);
    },
    async excluir(chapeu) {
      await chapeusApi.excluirChapeu(chapeu.id);
      this.chapeus = await chapeusApi.buscarTodasOsChapeus();
    },
  },
};
</script>

<template>
  <h1>Chapeu</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="chapeu.descricao" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="chapeu in chapeus" :key="chapeu.id">
      <span @click="editar(chapeu)"> {{ chapeu.descricao }} - </span>
      <button @click="excluir(chapeu)">X</button>
    </li>
  </ul>
</template>

<style></style>
