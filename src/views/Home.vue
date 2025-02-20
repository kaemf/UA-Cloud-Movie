<template>
  <div>
    <h1 class="text-center">Popular Movies</h1>
    <div class="d-flex justify-content-center mb-3">
      <input v-model="searchQuery" class="form-control me-2" placeholder="Search movies..." style="width: 250px;" />
      <div class="dropdown">
        <button class="btn btn-outline-secondary dropdown-toggle btn-sm" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" style="height: 38px;">
          Genres
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <li v-for="genre in genres" :key="genre.id">
            <a 
              class="dropdown-item" 
              href="#" 
              @click.prevent="toggleGenre(genre.id)" 
              :class="{ 'active': selectedGenres.includes(genre.id) }"
            >
              {{ genre.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>

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
      searchQuery: '',
      selectedGenres: [],
      genres: [],
      apiUrl: import.meta.env.VITE_API_KEY
    };
  },
  computed: {
    filteredMovies() {
      return this.movies.filter(movie => {
        const matchesTitle = movie.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesGenre = this.selectedGenres.length 
          ? movie.genre_ids.some(genreId => this.selectedGenres.includes(genreId)) 
          : true;
        return matchesTitle && matchesGenre;
      });
    }
  },
  methods: {
    toggleGenre(genreId) {
      const index = this.selectedGenres.indexOf(genreId);
      if (index === -1) {
        this.selectedGenres.push(genreId);
      } else {
        this.selectedGenres.splice(index, 1);
      }
    },

    updateSessionData() {
      const session = localStorage.getItem('session');
      this.isLoggedIn = !!session; 
      this.name = session ? JSON.parse(session).username : '';
    },
  },
  mounted() {
    if (!localStorage.getItem('session')) {
      this.$router.push('/login');
    }

    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${this.apiUrl}`)
      .then(response => {
        this.movies = response.data.results;
      });

    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.apiUrl}`)
      .then(response => {
        this.genres = response.data.genres;
      });
  }
};
</script>

<style>
.dropdown-item {
  cursor: pointer;
}

.dropdown-item.active {
  background-color: #007bff;
  color: white;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.d-flex {
  display: flex;
}
</style>