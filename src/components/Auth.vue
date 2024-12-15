<template>
	<div class="auth_page">
	  <h1>Авторизация</h1>
	  <form @submit.prevent="Submit" class="auth_form">
		<div class="auth_form_field">
		  <label for="login">Логин</label>
		  <input 
			type="text" 
			id="login" 
			v-model="login" 
		  />
		</div>
  
		<div class="auth_form_field">
		  <label for="password">Пароль</label>
		  <input 
			type="password" 
			id="password" 
			v-model="password" 
		  />
		</div>
  
		<button type="submit" class="auth_form_submit-button">Войти</button>
	  </form>
	</div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const login = ref<string>('')
  const password = ref<string>('')
  
  const router = useRouter()
  
  const Submit = () => {
	console.log('Логин:', login.value)
	console.log('Пароль:', password.value)
	router.push('/users') 
  }
  </script>
  
  <style scoped>

  .auth_page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #ffffff;
  }
 
  .auth_form {
	background-color: #ffffff;
	padding: 10px;
	width: 400px;
  }
  
  .auth_form_field {
	display: flex;
	flex-direction: column;
	margin-bottom: 20px;
  }
  
  .auth_form_field input {
	padding:20px;
  }
  
  .auth_form_submit-button {
	background-color: #4caf50;
	color: white;
	padding: 15px 15px;
	font-size: 20px;
	width: 200px;
	display: block;
	margin: 0 auto;
  }

  </style>
  