import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue';
import EventList from './../components/events/EventList.vue';
import CreateEvent from './../components/events/CreateEvent.vue';
import EditEvent from './../components/events/EditEvent.vue';
import Login from './../components/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/events', component: EventList },
    { path: '/createevent', component: CreateEvent },
    { path: '/editevent/:id', component: EditEvent, props: true  },
    { path: '/login', component: Login }
];

const router = createRouter({
    "history": createWebHistory(),
    routes
});

export default router