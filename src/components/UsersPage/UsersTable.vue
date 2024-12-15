<template>
  <div class="users-table">
    <button class="add-user-button" @click="openModal">Добавить пользователя</button>

    <div class="users-table_row">
      <div class="users-table_cell">id</div>
      <div class="users-table_cell">Имя</div>
      <div class="users-table_cell">Почта</div>
      <div class="users-table_cell">Дата создания</div>
      <div class="users-table_cell">Действия</div>
    </div>

    <div v-for="user in users" :key="user.id" class="users-table_row">
      <div class="users-table_cell">{{ user.id }}</div>
      <div class="users-table_cell">{{ user.name }}</div>
      <div class="users-table_cell">{{ user.email }}</div>
      <div class="users-table_cell">{{ user.created }}</div>
      <div class="users-table_cell">
        <button class="edit-button" @click="editUser(user.id)">Редактировать</button>
        <button class="delete-button" @click="deleteUser(user.id)">Удалить</button>
      </div>
    </div>

    <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
        <h2>Добавить пользователя</h2>
        <form @submit.prevent="addUser">
          <div class="modal_field">
            <label for="name">Имя</label>
            <input type="text" v-model="newUser.name" id="name" />
          </div>
          <div class="modal_field">
            <label for="email">Почтав</label>
            <input type="email" v-model="newUser.email" id="email" />
          </div>
          <button type="submit" class="submit-button">Добавить</button>
        </form>
        <button class="close-button" @click="closeModal">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

type UserType = {
  id: number
  name: string | null
  email: string | null
  created: string | Date | null
}

const currentDate = new Date()

const createdMockDate = computed(() => {
  return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
})

const users = ref<UserType[]>([
  {
    id: 0,
    name: 'Ann',
    email: 'alex@alex.alex',
    created: createdMockDate.value,
  },
  {
    id: 1,
    name: 'Alex',
    email: 'ann@ann.ann',
    created: createdMockDate.value,
  },
  {
    id: 2,
    name: 'Art',
    email: 'art@art.art',
    created: createdMockDate.value,
  },
  {
    id: 3,
    name: 'you',
    email: 'you@you.you',
    created: createdMockDate.value,
  }
])

const isModalOpen = ref(false)
const newUser = ref<UserType>({ id: 0, name: '', email: '', created: '' })

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  newUser.value = { id: 0, name: '', email: '', created: '' }
}

const addUser = () => {
  const newId = users.value.length ? users.value[users.value.length - 1].id + 1 : 0
  const newUserData: UserType = {
    id: newId,
    name: newUser.value.name,
    email: newUser.value.email,
    created: createdMockDate.value
  }
  users.value.push(newUserData)
  closeModal()
}

const deleteUser = (id: number) => {
  users.value = users.value.filter(user => user.id !== id)
}

const editUser = (id: number) => {
  alert(`Редактировать: ${id}`)
}
</script>

<style scoped>
.users-table {
  display: flex;
  flex-direction: column;
}

.users-table_row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.users-table_cell {
  width: 250px;
  background-color: #888888;
  border: 1px solid #fff;
  text-align: center;
  padding: 5px;
}

.add-user-button {
  margin-bottom: 15px;
  padding: 15px 15px;
  font-size: 15px;
  color: #fff;
  background-color: #007bff;
}


.edit-button {
  background-color: #28a745;
  padding: 5px 5px;
  margin-right: 5px;
}


.delete-button {
  background-color: #dc3545;
  color: #fff;
  padding: 5px 5px;
}


.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: #fff;
  padding: 10px;
  width: 300px;
  text-align: center;
}

.modal_field {
  margin-bottom: 15px;
}

.modal_field input {
  width: 100%;
  padding: 10px;
}

.submit-button, .close-button {
  margin-top: 15px;
  padding: 15px 15px;
  font-size: 15px;
}

.submit-button {
  background-color: #28a745;
}

.close-button {
  background-color: #dc3545;
  color: #fff;
}
</style>
