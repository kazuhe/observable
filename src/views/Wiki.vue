<template>
  <div class="wiki">
    <h1>This is Wiki page</h1>
    <p>Wiki number {{ $route.params.id }}</p>
    
    <router-link to="/wiki/1">1</router-link>
    <router-link to="/wiki/2">2</router-link>
  </div>
</template>
