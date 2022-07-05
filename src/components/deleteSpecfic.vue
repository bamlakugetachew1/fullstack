<template>
  <h1 class="text-black text-lg font-medium mr-2 px-2.5" style="font-family: 'Source Sans Pro', sans-serif">
    are you sure to delete this user?
  </h1>
  <h3 class="text-black text-lg font-medium mr-2 px-2.5" style="font-family: 'Source Sans Pro', sans-serif">
    all contacts associated with this user will also be deleted
  </h3>
  <button
    @click="deleteuser({ id: this.id1 })"
    class="w-800 hover:bg-red-800 ... px-10 py-4 text-white bg-red-500 rounded-md focus:bg-indigo-500 focus:outline-blue"
  >
    DELETE
  </button>
  <input :value="this.email" id="first" type="hidden" />
</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { ref } from "vue";

export default {
  data() {
    return {
      id: 0,
      id1: 0,
      val: "",
      email: "",
      index: "",
    };
  },
  components: {},
  created() {
    this.id1 = this.$route.params.id;
    this.email = this.$route.params.email;
    localStorage.setItem("cemail", this.email);
    this.id = this.id1;
  },
  methods: {
    getid() {},

    deleteuser() {
      this.delete_users({ id: this.id }).then((data) => {
        var val = document.getElementById("first").value;
        this.deletecontactsa({ email: val });
        this.index = data.data.delete_users.returning.email;
      });
    },

    deletecontacts() {
      this.deletecontacts({ email: this.email }).then(
        (data) => (this.index = data.data.register.message)
      );
    },
  },

  setup() {
    const { mutate: delete_first_by_pk } = useMutation(gql`
      mutation delete_first_by_pk($id: int!) {
        delete_first_by_pk(id: $id) {
          id
        }
      }
    `);

    const { mutate: delete_users } = useMutation(gql`
      mutation delete_users($id: Int!) {
        delete_users(where: { id: { _eq: $id } }) {
          returning {
            email
          }
        }
      }
    `);

    const email = ref("en");
    const { mutate: deletecontactsa } = useMutation(
      gql`
        mutation deletecontacts($email: String!) {
          deletecontacts(email: $email) {
            message
          }
        }
      `,
      () => ({
        variables: {
          email: email.value,
        },
      })
    );

    //
    /*
    const { mutate: deletecontacts } = useMutation(
      gql`
        mutation deletecontacts($email: String!) {
          deletecontacts(email: $email) {
            message
          }
        }
      `,
      () => ({
        variables: {
          email: email.value,
        },
      })
    );

    */

    return {
      deletecontactsa,
      delete_first_by_pk,
      delete_users,
    };
  },
};
</script>
