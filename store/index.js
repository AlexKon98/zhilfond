export const state = () => ({
  users: [],
});

export const getters = {
  users: store => store.users,
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  }
};

export const actions = {
  async fetchUsers({commit}, str) {
    let query;

    if (str.includes(',')) {
      query = str.split(',');
    } else {
      query = [str];
    }

    let users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');

    users = users.filter(user => {
      query.forEach(q => {
        return user.username.toLowerCase() === q.toLowerCase() || user.name.toLowerCase().includes(q.toLowerCase())
      });
    });

    commit('setUsers', users);
  }
};
