<template>
	<div>
	  <h1>Фильм</h1>
	  <div>
		<div class="movie-table_row">
		  <div class="movie-table_cell">Шв</div>
		  <div class="movie-table_cell">Название</div>
		  <div class="movie-table_cell">Дата</div>
		</div>
		<div v-for="movie in movies" :key="movie.id" class="movie-table_row">
		  <div class="movie-table_cell">{{ movie.id }}</div>
		  <div class="movie-table_cell">{{ movie.name }}</div>
		  <div class="movie-table_cell">{{ movie.date }}</div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  type MovieType = {
	id: number
	name: string
	date: string
  }
  
  const movies = ref<MovieType[]>([
	{ id: 1, name: 'Фильм 1', date: '2024-12-20' },
	{ id: 2, name: 'Фильм 2', date: '2024-12-21' },
	{ id: 3, name: 'Фильм 3', date: '2024-12-22' },
  ])
  
  </script>
  
  <style scoped>

  .movie-table_row {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
  }
  
  .movie-table_cell {
	width: 200px;
	background-color: #888888;
	border: 1px solid #ffffff;
	text-align: center;
	padding: 5px;
  }

  </style>
  