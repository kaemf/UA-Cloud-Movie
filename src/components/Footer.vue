<template>
  <footer class="bg-dark text-light py-3">
      <div class="container text-center">
          <p class="mb-2">&copy; {{ currentYear }} Technical task "Movie on Vue" by Yaroslav Volkivskyi</p>
          <nav>
              <ul class="nav justify-content-center">
                  <li class="nav-item">
                      <router-link to="/privacy-policy" class="nav-link text-light">Политика конфиденциальности</router-link>
                  </li>
                  <li class="nav-item">
                      <router-link to="/terms-of-service" class="nav-link text-light">Условия использования</router-link>
                  </li>
              </ul>
          </nav>
      </div>
  </footer>
</template>

<script>
export default {
  data() {
      return {
          currentYear: new Date().getFullYear(),
      };
  },
};
</script>