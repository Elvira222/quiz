<template>
  <div class="home">
    <h1>Users List</h1>
    <div class="user-list">
      <div v-for="user in users" :key="user.id" class="user-item">
        <UserCard :user="user" @click="navigateToUserDetails">
          <button class="edit-button">Edit</button> <!-- Custom slot content -->
        </UserCard>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';

export default {
  components: {
    UserCard
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
          this.users = data;
        });
    },
    navigateToUserDetails(userId) {
      this.$router.push(`/user/${userId}`);
    }
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

h1 {
  text-align: center;
  color: #333;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.user-item {
  margin: 10px;
}

.edit-button {
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.edit-button:hover {
  background-color: #45a049; /* Darker green */
}
</style>
