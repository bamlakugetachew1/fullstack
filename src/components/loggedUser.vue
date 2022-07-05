<template>
  <div
    class="relative text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
  >
    <ul class="flex flex-wrap -mb-px">
      <li class="mr-2">
        <button
          href="#"
          class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          {{ this.loggedemail }}
        </button>
      </li>
      <li class="mr-2">
        <button
          href="#"
          class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          <router-link
            :to="{ name: 'contactList', params: { email: this.loggedemail } }"
            >LIST CONTACTS</router-link
          >
        </button>
      </li>

      <li class="mr-2">
        <button
          href="#"
          class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          <router-link
            :to="{
              name: 'createContacts',
              params: { email: this.loggedemail },
            }"
            >CREATE CONTACTS</router-link
          >
        </button>
      </li>

      <li class="mr-2">
        <button
          href="#"
          @click="logout"
          class="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        >
          LOG OUT
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
//import { ref } from "vue";
//import { useMutation } from "@vue/apollo-composable";
//import gql from "graphql-tag";
import router from "../index.js";

export default {
  name: "loggedUser",
  components: {},
  data() {
    return {
      loggedemail: "",
      datas: [],
    };
  },
  created() {
    // this.loggedemail = this.$route.params.loggedemail;
    this.loggedemail = window.localStorage.getItem("apollo-token");
    this.datas = this.$route.params.datas;
  },

  methods: {
    logout() {
      window.localStorage.clear();
      router.push({ path: "/loginPage" });
    },
  },
};
</script>
<style></style>
