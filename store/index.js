export const state = () => ({
  users: [],
  user: {},
  error: {},
});

export const getters = {
  users: s => s.users,
  user: s => s.user,
  error: s => s.error,
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setUser(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  }
};

export const actions = {
  async fetchUsers({commit}, requests) {
    commit('setUsers', []);
    let users;
    let checkArray = [];
    try {
      users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');
      users.filter(user => {
        requests.forEach(req => {
          if (user.name.toLowerCase().includes(req) || user.username.toLowerCase() === req) if (!checkArray.some(item => item.username === user.username)) checkArray.push(user)
        });
      });
    } catch(e) {
      commit('setError', e);
    } finally {
      commit('setUsers', checkArray);
    }
  },
  async fetchUser({commit}, id) {
    let user;
    try {
      user = await this.$axios.$get('https://jsonplaceholder.typicode.com/users/' + id);
    } catch(e) {
      console.log(e);
    } finally {
      commit('setUser', user);
    }
  }
};
