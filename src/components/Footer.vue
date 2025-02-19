<template>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; {{ currentYear }} Мой Сайт. Все права защищены.</p>
        <nav>
          <ul class="footer-links">
            <li><router-link to="/privacy-policy">Политика конфиденциальности</router-link></li>
            <li><router-link to="/terms-of-service">Условия использования</router-link></li>
          </ul>
        </nav>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    padding: 20px;
    background-color: #333;
    color: white;
    text-align: center;
  }
  
  .footer-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  
  .footer-links li {
    margin: 0 15px;
  }
  
  .footer-links a {
    color: white;
    text-decoration: none;
  }
  
  .footer-links a:hover {
    text-decoration: underline;
  }
  </style>
  