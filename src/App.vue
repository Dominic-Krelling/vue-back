<template>
  <header>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <span> | </span>
    <router-link to="/categorias">Categorias</router-link>
    <span> | </span>
    <router-link to="/autores">Autor</router-link>
    <span> | </span>
    <router-link to="/editoras">Editoras</router-link>
    <span> | </span>
    <router-link to="/livros">Livros</router-link>
  </header>
  <main>
    <RouterView />
  </main>
</template>
