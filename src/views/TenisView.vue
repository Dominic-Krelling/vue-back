<script>
import LivrosApi from "@/api/livros";
const livrosApi = new LivrosApi();
export default {
  data() {
    return {
      livros: [],
      livro: {},
    };
  },
  async created() {
    this.livros = await livrosApi.buscarTodosOsLivros();
  },
  methods: {
    async salvar() {
      if (this.livro.id) {
        await livrosApi.updatLivro(this.livro);
      } else {
        await livrosApi.addLivro(this.livro);
      }
      this.livro = {};
      this.livros = await livrosApi.buscarTodosOsLivros();
    },
    editar(livro) {
      Object.assign(this.livro, livro);
    },
    async excluir(livro) {
      await livrosApi.deleteLivro(livro.id);
      this.editoras = await livrosApi.buscarTodosOsLivros();
    },
  },
};
</script>

<template>
  <h1>Livros</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="livro.titulo" placeholder="titulo" />
    <button @click="salvar(livro)">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="livro in livros" :key="livro.id">
      <span @click="editar(livro)"> ({{ livro.titulo }}) </span>
      <button @click="excluir(livro)">X</button>
    </li>
  </ul>
</template>
