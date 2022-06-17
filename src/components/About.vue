<template>
  <h1 class="text-black   text-lg font-medium mr-2 px-2.5">are you sure to delete this page?</h1>
  <button @click="removePage({ id: this.id1 })" class=" w-1000 hover:bg-red-800 ... px-10 py-4    text-white bg-red-500 rounded-md  focus:bg-indigo-600 focus:outline-blue">DELETE</button>

</template>

<script>
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  data() {
    return {
      id1: 0,
      val: 0,
    };
  },
  components: {},
  created() {
    this.id1 = this.$route.params.id;
  },
  methods: {
    getid() {},

    deletepage() {
      this.$apollo.mutate({
        mutation: gql`  mutation  removePage($id:ID!)

          removePage(id:$id) {
            id
            title
            }
        
      }
      }`,
        variables: {
            id:this.id1
        },
      });
    },
  },

  setup() {
    const { mutate: removePage } = useMutation(gql`
      mutation removePage($id:ID!) {
        removePage(id: $id) {
          id
          title
        }
      }
    `);

    return {
      removePage,
    };
  },
};
</script>
