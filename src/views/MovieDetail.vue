<template>
  <div class="container mt-5">
    <div class="row align-items-center">
      <div class="col-md-4">
        <div class="text-start">
          <button class="btn btn-primary mb-3" @click="$router.back()">Back</button>
        </div>
        <img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt="Movie poster"
          class="img-fluid rounded"
        />
      </div>
      <div class="col-md-8 text-start">
        <h2>{{ movie.title }}</h2>
        <p><strong>Original Title:</strong> {{ movie.original_title }}</p>
        <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
        <p><strong>Rating:</strong> {{ movie.vote_average }} / 10 ({{ movie.vote_count }} votes)</p>
        <p><strong>Genres:</strong> {{ movie.genres?.map(g => g.name).join(', ') || 'N/A' }}</p>
        <p><strong>Runtime:</strong> {{ movie.runtime }} minutes</p>
        <p><strong>Language:</strong> {{ movie.original_language.toUpperCase() }}</p>
        <p><strong>Overview:</strong> {{ movie.overview }}</p>
      </div>
    </div>

    <hr class="my-4" />

    <div v-if="similarMovies.length">
      <h3 class="text-center mb-3">Similar movies by genre</h3>
      <div class="row">
        <div v-for="similar in similarMovies" :key="similar.id" class="col-md-3 mb-3">
          <div class="card movie-card" @click="goToMovie(similar.id)">
            <img
              :src="'https://image.tmdb.org/t/p/w500' + similar.poster_path"
              class="card-img-top"
              :alt="similar.title"
            />
            <div class="card-body text-center">
              <h5 class="card-title">{{ similar.title }}</h5>
              <p class="card-text text-muted">{{ getYear(similar.release_date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-center text-muted">Нет фильмов с подобным жанром</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['id'],
  data() {
    return {
      movie: {},
      similarMovies: [],
      apiUrl: import.meta.env.VITE_API_KEY,
    };
  },
  mounted() {
    this.fetchMovie();
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        this.fetchMovie();
      }
    }
  },
  methods: {
    fetchMovie() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.id}?api_key=${this.apiUrl}&language=en-US`)
        .then(response => {
          this.movie = response.data;
          this.fetchSimilarMovies();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },
    fetchSimilarMovies() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.id}/similar?api_key=${this.apiUrl}&language=en-US`)
        .then(response => {
          this.similarMovies = response.data.results;
        });
    },
    goToMovie(movieId) {
      this.$router.push(`/movie/${movieId}`);
    },
    getYear(date) {
      return date ? new Date(date).getFullYear() : 'N/A';
    }
  }
};
</script>

<style>
.img-fluid {
  transition: transform 0.3s ease;
}

.img-fluid:hover {
  transform: scale(1.05);
}

.mt-5 {
  margin-top: 20px;
  margin-bottom: 20px;
}

.movie-card {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.2s ease;
  cursor: pointer;
}

.movie-card:hover {
  transform: scale(1.05);
}

.movie-card img {
  height: 300px;
  object-fit: cover;
}
</style>