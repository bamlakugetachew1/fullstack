<script>
import { ref } from "vue";
import { useMutation } from "@vue/apollo-composable";
import gql from "graphql-tag";

/*
import { useQuery } from "@vue/apollo-composable";

const CHARACTERS_QUERY = gql`
  query contacts($cemail:String!){
    contacts(where:{cemail:{_eq:$cemail}}){
      id
      fname
      lname
      email
      cemail
    }
  }
`;

*/
export default {
  name: "contactList",
  components: {},
  data() {
    return {
      id1: 0,
      id: 0,
      email: "",
      name: "",
      name1: "",
      email1: "",
      index: [],
      count: 0,
      cemail: "",
      message: "",
    };
  },

  methods: {
    loginuser() {
      this.getdata({ email: this.email }).then((data) => {
        this.index = data.data.getdata.datas;
        this.count = data.data.getdata.numbers;

        if (this.index == "nodatas") {
          this.message = "YOU HAVE NO CONTACTS SAVED HERE";
        }
      });
    },

    deleteuser() {
      this.delete_contacts({ id: this.id }).then((data) => {
        this.index = data.data;
        //location.reload();
      });
    },
    //  deletecontacts() {
    //   this.delete_contacts_by_pk({ id: this.id1 }).then(
    //     (data) => (
    //            this.index=data.data.delete_contacts_by_pk.id,
    //        location.reload()

    //     )
    //   );
    // },
  },
  created() {
    this.count = 2;
    this.name = "bamlaku";
    //this.email = this.$route.params.email;
    this.email = window.localStorage.getItem("apollo-token");
    this.cemail = "abuyeget@gmailcom";
    this.loginuser;
  },

  setup() {
    const email = ref("en");
    //const { result, loading, error } = useQuery(CHARACTERS_QUERY);

    const { mutate: getdata } = useMutation(
      gql`
        mutation getdata($email: String!) {
          getdata(email: $email) {
            datas
            numbers
          }
        }
      `,
      () => ({
        variables: {
          email: email.value,
        },
      })
    );

    const { mutate: delete_contacts } = useMutation(gql`
      mutation delete_contacts($id: Int!) {
        delete_contacts(where: { id: { _eq: $id } }) {
          returning {
            id
          }
        }
      }
    `);

    return {
      getdata,
      delete_contacts,
    };

    /*
    return {
      getdata,
    };


    */
  },
};
</script>
<template>
 <textarea
    type="text"
    v-if="this.index == 'nodatas'"
    v-model="message"
    class="mt-1 mb-3 shadow-md border-none focus:ring-transparent rounded-sm text-pink-500"
  ></textarea>
<div
    v-if="this.index != 'nodatas'"
    class="relative overflow-x-auto shadow-md sm:rounded-lg"
  >
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead
 
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr>
          <th scope="col" class="px-6 py-3">FIRSTNAME</th>
          <th scope="col" class="px-6 py-3">LASTNAME</th>
          <th scope="col" class="px-6 py-3">EMAIL</th>

          <th scope="col" class="px-6 py-3">
            <span class="sr-only">Edit</span>
          </th>
          <th scope="col" class="px-6 py-3">
            <span class="sr-only">DELETE</span>
          </th>
        </tr>
      </thead>
      <tbody v-for="space in this.index" :key="space.id">
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            {{ space.fname }}
          </th>
          <td class="px-6 py-4">
            {{ space.lname }}
          </td>
          <td class="px-6 py-4">
            {{ space.email }}
          </td>
          <td class="px-6 py-4 text-right">
            <span
              class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              <router-link
                :to="{
                  name: 'updateContact',
                  params: {
                    id: space.id,
                    fname: space.fname,
                    lname: space.lname,
                    email: space.email,
                    cemail: space.cemail,
                  },
                }"
                >UPDATE</router-link
              >
            </span>
          </td>
          <td class="px-6 py-4 text-right">
          <button
            @click="delete_contacts({ id: space.id })"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            DELETE
          </button>
                
          </td>
        </tr>
      </tbody>
    </table>
  </div>
 <button
    @click="loginuser({ email: this.email })"
    class="bg-indigo-100 text-indigo-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-200 dark:text-indigo-900"
  >
    SHOW
  </button>
</template>
