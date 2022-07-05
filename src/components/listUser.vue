<template>
 <div
    
    class="relative overflow-x-auto shadow-md sm:rounded-lg"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">USERNAME</th>
          <th scope="col" class="px-6 py-3">EMAIL</th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">DELETE</span>
          </th>
        </tr>
      </thead>
      <tbody v-for="space in result.users" :key="space.id">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ space.name }}
          </th>

          <td class="px-6 py-4">
            {{ space.email }}
          </td>
          <td class="px-6 py-4 text-right">
            <span
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
               <router-link :to="{ name: 'deleteSpecfic', params: { id: space.id ,email:space.email} }"
          >DELETE</router-link>
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <button
    @click="reload"
    class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"
  >
    RELOAD
  </button>
</template>

<script>
import gql from "graphql-tag";
import { useQuery } from "@vue/apollo-composable";
import { useMutation } from "@vue/apollo-composable";
const CHARACTERS_QUERY = gql`
  query users {
    users {
      id
      name
      email
    }
  }
`;

export default {
  name: "listUser",
  data() {
    return {
      id: 0,
      name: "",
      email: "",
      count: 0,
    };
  },
  created() {},

  methods: {
    reload() {
      location.reload();
    },
    deleteuser() {
      this.delete_users({ id: this.id }).then((data) => {
        this.index = data.data.delete_users.returning[0].email;

        //location.reload();
      });
    },
  },
  components: {},

  setup() {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);

    const { mutate: delete_users } = useMutation(gql`
      mutation delete_users($id: Int!) {
        delete_users(where: { id: { _eq: $id } }) {
          returning {
            email
          }
        }
      }
    `);
    return {
      result,
      loading,
      error,
      delete_users,
    };
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
