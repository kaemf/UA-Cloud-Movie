<template>
    <div>
      <button @click="$router.back()">Back</button>
      <h2>{{ movie.title }}</h2>
      <img :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path" alt="Movie poster" />
      <p>{{ movie.overview }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    props: ['id'],
    data() {
      return {
        movie: {}
      };
    },
    mounted() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=YOUR_API_KEY`)
        .then(response => {
          this.movie = response.data;
        });
    }
  };
  </script>
  
  <style>
  button {
    margin-bottom: 20px;
  }
  </style>