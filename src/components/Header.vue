<template>
    <header class="header">
      <div class="logo">
        <h1>Мой Сайт</h1>
      </div>
      <nav>
        <ul class="nav-links">
          <li><router-link to="/">Главная</router-link></li>
          <li><router-link to="/login">Вход</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
  };
  </script>
  
  <style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
  }
  
  .logo h1 {
    margin: 0;
  }
  
  .nav-links {
    list-style: none;
    padding: 0;
    display: flex;
  }
  
  .nav-links li {
    margin-left: 20px;
  }
  
  .nav-links a {
    color: white;
    text-decoration: none;
  }
  
  .nav-links a:hover {
    text-decoration: underline;
  }
  </style>
  