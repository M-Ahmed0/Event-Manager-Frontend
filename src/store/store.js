import axios from './../axios-auth';
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            token: null,
            username: null,
            role: null
        }
    },
    getters: {

        isAuthenticated(state) {
            return state.token != null;
        },
        isAdmin(state) {
            return state.role == "Admin";
        }


    },
    mutations: {
        authenticateUser(state, parameters) {
            state.token = parameters.token;
            state.username = parameters.username;
            state.role = parameters.role;
        },

    },
    actions: {

        login({ commit }, parameters) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/users/login', {
                        username: parameters.username,
                        password: parameters.password
                    })
                    .then((res) => {
                        axios
                            .defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('username', res.data.username);
                        localStorage.setItem('role', res.data.role);
                        commit('authenticateUser', {
                            token: res.data.token,
                            username: res.data.username
                        });
                        resolve();
                    })
                    .catch((err) => {
                        reject(err)
                    });
            })
        },

        logout() {
            return new Promise((resolve) => {
                localStorage.clear();
                axios.defaults.headers.common["Authorization"] = "";
                this.state.token = null;
                this.state.username = null;
                this.state.role = null;
                resolve();
            })
        },

        autoLogin({ commit }) {
            const token = localStorage.getItem('token');
            const username = localStorage.getItem('username');
            const role = localStorage.getItem('role');

            if (token && username) {
                axios
                    .defaults.headers.common['Authorization'] = `Bearer ${token}`;
                commit('authenticateUser', {
                   
                    token: token,
                    username: username,
                    role: role
                })
            }
        },

    }
});

export default store;