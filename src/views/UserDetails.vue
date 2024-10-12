<script>
export default {
  data() {
    return {
      user: {}
    }
  },
  created() {
    this.fetchUserDetails();
  },
  methods: {
    fetchUserDetails() {
      const userId = this.$route.params.id;
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(data => {
          this.user = data;
        });
    }
  },
  beforeUnmount() { // Change this line
    console.log('Navigating away from User Details');
  }
}
</script>
