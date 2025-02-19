<template>
    <div class="movie-card" @click="$router.push(`/movie/${movie.id}`)">
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie poster" />
      <h3>{{ movie.title }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: ['movie']
  };
  </script>
  
  <style>
  .movie-card {
    width: 200px;
    margin: 10px;
    text-align: center;
    cursor: pointer;
  }
  .movie-card img {
    width: 100%;
  }
  </style>