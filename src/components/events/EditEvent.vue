<template>
  <section>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
    <div class="container">
      <form ref="form">
        <h2 class="mt-3 mt-lg-5">Edit a event</h2>
        <h5 class="mb-4"></h5>

        <div class="input-group mb-3">
          <span class="input-group-text">Event Name</span>
          <input type="text" class="form-control" v-model="event.eventName" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Event Date</span>
          <input type="date"  class="form-control" v-model="event.eventDate" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Price</span>
          <input type="number" class="form-control" v-model="event.price" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Description</span>
          <textarea class="form-control" v-model="event.description"></textarea>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Image URL</span>
          <input type="text" class="form-control" v-model="event.image" />
        </div>

       
        <div class="input-group mb-3">
          <span class="input-group-text">Category</span>
          <select class="form-select" v-model="event.categoryID">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{category.eventType}}</option>
          </select>
        </div>

        <div class="input-group mt-4">
            <button type="button" class="btn btn-primary" @click="updateEvent">Save changes</button>
          <button
            type="button"
            class="btn btn-danger"
            @click="this.$router.push('/events')"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "../../axios-auth";
export default {
  name: "EditEvent",
  props: {
    id: Number,
  },
  data() {
    return {
      event: {
        eventName: "",
        eventDate: "",
        price: 0.0,
        description: "",
        image: "",
        categoryID: 0,
      },
      categories: [],

      errorMessage: "",
    };
  },
  mounted() {
    axios
      .get("/events/" + this.id)
      .then((result) => {
        this.event = result.data;
      })
      .catch((error) => console.log(error));

    axios
      .get("/categories/")
      .then((result) => {
        this.categories = result.data;
      })
      .catch((error) => console.log(error));
  },

  methods: {
    updateEvent() {
      axios
        .put("/events/" + this.id, this.event)
        .then((result) => {
          console.log(result);
          alert("event " + this.id + " " + " has been updated!");
          this.$router.push("/events");
        })
        .catch((error) => {
           this.errorMessage = error.response.data;
          console.error(error);
        });
    },
  },
};
</script>

<style>
</style>