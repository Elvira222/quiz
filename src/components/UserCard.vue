<template>
    <div class="user-card" @click="handleClick">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <slot></slot> <!-- Slot for additional content -->
    </div>
  </template>
  
  <script>
  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.$emit('click', this.user.id);
      }
    }
  }
  </script>
  
  <style scoped>
  .user-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    cursor: pointer;
  }
  </style>
  