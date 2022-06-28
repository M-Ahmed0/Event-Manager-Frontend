<template>
  <section>
    <div v-if="errorMessage" class="alert alert-danger" role="alert">
            {{ errorMessage }}
          </div>
    <div class="container"  v-if="this.$store.getters.isAuthenticated">
      <h2 class="mt-3 mt-lg-5">Events</h2>
      <button
        type="button"
        class="btn btn-primary mt-3"
        @click="this.$router.push('/createevent')"
      >
        Add Event
      </button>
      <div class="row mt-3">
        <event-list-item
          v-for="event in events"
          :key="event.eventID"
          :event="event"
          @update="loadEvents"
        />
      </div>
        
    </div>
     <h2 class="mt-5 mt-lg-5" v-else>please login to access this endpoint</h2>
  </section>
</template>

<script>
import axios from "../../axios-auth";
import EventListItem from "./EventListItem.vue";

export default {
  name: "EventList",
  components: {
    EventListItem,
  },
  data() {
    return {
      events: [],
      errorMessage: null,
    };
  },
  mounted() {
    this.loadEvents();
  },
  methods: {
    loadEvents() {
      axios.get("/events")
      .then((result) => {
        this.events = result.data;
      }).catch((error) => {
         this.errorMessage = error+ "  (JWT is expired)";
          console.error(error );
          });
    },
  },
};
</script>

<style>
</style>