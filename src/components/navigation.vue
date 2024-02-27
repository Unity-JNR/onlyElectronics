<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/product">Product</router-link>  |
      <router-link to="/admin">Admin</router-link>  |
      <router-link :to="{ name: 'adminUser'} ">user</router-link> |
      <router-link to="/contact">contact</router-link> 
    </nav>

  </template>

  