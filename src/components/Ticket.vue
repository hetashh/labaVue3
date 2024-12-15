<template>
	<div>
	  <h1>Билет</h1>
	  <div>
		<div class="ticket-table_row">
		  <div class="ticket-table_cell">Id</div>
		  <div class="ticket-table_cell">Имя пользователя</div>
		  <div class="ticket-table_cell">Почта пользователя</div>
		  <div class="ticket-table_cell">Название фильма</div>
		  <div class="ticket-table_cell">Дата фильма</div>
		</div>
		<div v-for="ticket in tickets" :key="ticket.id" class="ticket-table_row">
		  <div class="ticket-table_cell">{{ ticket.id }}</div>
		  <div class="ticket-table_cell">{{ ticket.user.name }}</div>
		  <div class="ticket-table_cell">{{ ticket.user.email }}</div>
		  <div class="ticket-table_cell">{{ ticket.movie.name }}</div>
		  <div class="ticket-table_cell">{{ ticket.movie.date }}</div>
		</div>
	  </div>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  type UserType = {
	id: number
	name: string
	email: string
  }
  
  type MovieType = {
	id: number
	name: string
	date: string
  }
  
  type TicketType = {
	id: number
	user: UserType
	movie: MovieType
  }
  
  const tickets = ref<TicketType[]>([
	{
	  id: 1,
	  user: { id: 1, name: 'Ann', email: '@example.com'},
	  movie: { id: 1, name: 'Фильм 1', date: '2024-12-20' }
	},
	{
	  id: 2,
	  user: { id: 2, name: 'Alex', email: '@example.com'},
	  movie: { id: 2, name: 'Фильм 2', date: '2024-12-21' }
	}
  ])
  </script>
  
  <style scoped>

  .ticket-table_row {
	display: grid;
	grid-template-columns: repeat(6, 1fr);
  }
  
  .ticket-table_cell {
	min-width: 200px;
	background-color: #888888;
	border: 1px solid #ffffff;
	text-align: center;
	padding: 5px;
  }

  </style>
  