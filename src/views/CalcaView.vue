<script>
import CalcasApi from "@/api/calca";
const calcasApi = new CalcasApi();
export default {
  data() {
    return {
      calcas: [],
      calca: {},
    };
  },
  async created() {
    this.calcas = await calcasApi.buscarTodasAsCalcas();
  },
  methods: {
    async salvar() {
      if (this.calca.id) {
        await calcasApi.updatCalca(this.calca);
      } else {
        await calcasApi.addCalca(this.calca);
      }
      this.calca = {};
      this.calcas = await calcasApi.buscarTodasAsCalcas();
    },
    editar(calca) {
      Object.assign(this.calca, calca);
    },
    async excluir(calca) {
      await calcasApi.deletAutor(calca.id);
      this.calcas = await calcasApi.buscarTodasAsCalcas();
    },
  },
};
</script>

<template>
  <h1>Calca</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="calca.nome_calca" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="calca in calcas" :key="calca.id">
      <span @click="editar(calca)"> {{ calca.nome_calca }} - </span>
      <button @click="excluir(calca)">X</button>
    </li>
  </ul>
</template>

<style></style>
