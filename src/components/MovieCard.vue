<template>
  <div class="movie-card" @click="$router.push(`/movie/${movie.id}`)" style="cursor: pointer;">
    <div class="card">
      <img
        :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
        alt="Movie poster"
        class="card-img-top"
        style="height: 350px; object-fit: cover; border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;"
      />
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text text-muted">{{ movie.release_date }}</p>
      </div>
    </div>
  </div>
</template>

  <script>
  export default {
    props: ['movie']
  };
  </script>
  
  <style>
  .movie-card {
    margin: 15px;
    transition: transform 0.2s, box-shadow 0.2s; 
  }
  
  .movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
  
  .card {
    border: none; 
    border-radius: 0.5rem; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  }
  
  .card-title {
    font-size: 1.2rem;
    font-weight: bold;
  }
  
  .card-text {
    font-size: 0.9rem;
  }
  </style>