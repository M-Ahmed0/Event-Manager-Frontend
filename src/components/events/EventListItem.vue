<template>
  <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 p-2">
    <div class="card h-100">
      <div class="card-body">
        <img
          class="card-img"
          :src="event.image"
          :alt="event.title"
          :title="event.title"
        />
        <div class="float-start">
          <p><b> Event Name: </b> {{ event.eventName }}</p>
          <p>
            <b> Event Category:</b>
            {{ event.category.eventType }}
          </p>
           <p><b>Date: </b> {{ event.eventDate }}</p>
          <p><b>Price: </b> €{{ event.price }}</p>
        </div>
      </div>
      <div class="card-footer" >
        <button  class="btn btn-warning" @click="editEvent(event.eventID)">
          Edit</button
        >&nbsp;&nbsp;
        <button  v-if="this.$store.getters.isAdmin" class="btn btn-danger" @click="deleteEvent(event.eventID)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "../../axios-auth";

export default {
  name: "EventListItem",
  props: {
    event: Object,
  },

  methods: {
    deleteEvent(id) {
      axios
        .delete("events/" + id)
        .then((result) => {
          console.log(result);
          this.$emit("update");
        })
        .catch((error) => console.log(error));
    },
    editEvent(id) {
      // send to editevent route and pass the id
      this.$router.push("/editevent/" + id);
    },
  },
};
</script>

<style>
.card-img {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>