<template>
    <div>
      <h2>Popular Movies</h2>
      <input v-model="searchQuery" placeholder="Search movies..." />
      <div class="movies">
        <MovieCard v-for="movie in filteredMovies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import MovieCard from '../components/MovieCard.vue';
  
  export default {
    components: { MovieCard },
    data() {
      return {
        movies: [],
        searchQuery: ''
      };
    },
    computed: {
      filteredMovies() {
        return this.movies.filter(movie =>
          movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
    },
    mounted() {
      if (!localStorage.getItem('session')){
        this.$router.push('/login');
      }
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.API_KEY}`)
        .then(response => {
          this.movies = response.data.results;
        });
    }
  };
  </script>
  
  <style>
  .movies {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  </style>
  