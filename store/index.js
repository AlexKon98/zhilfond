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
  /**
   * Функция запроса к апи для получения списка пользователей
   * @param requests - значение инпута поиска, преобразованное в массив для удобства фильтрации
  */
  async fetchUsers({commit}, requests) {
    commit('setUsers', []);

    let users;

    try {
      users = await this.$axios.$get('https://jsonplaceholder.typicode.com/users');

      users = users.filter(user => {
        return requests.some(req => user.name.toLowerCase().startsWith(req) || user.username.toLowerCase() === req)
        ||
        requests.some(req => user.id === Number(req));
      });
    } catch(e) {
      commit('setError', e);
      $nuxt.$router.push('/404');
    } finally {
      commit('setUsers', users);
    }
  },
  /**
   * Функция запроса к апи для получения пользователя по id
   * @param id - значение id нужого пользователя
  */
  async fetchUser({commit}, id) {
    let user;

    try {
      user = await this.$axios.$get('https://jsonplaceholder.typicode.com/users/' + id);
    } catch(e) {
      commit('setError', e);
      $nuxt.$router.push('/404');
    } finally {
      commit('setUser', user);
    }
  }
};
