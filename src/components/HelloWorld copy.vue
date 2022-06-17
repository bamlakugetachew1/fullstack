<template>
  <p v-if="error">Something went wrong...</p>
  <p v-if="loading">Loading...</p>
  <p v-else v-for="space in result.getAllPages" :key="space.id">
    {{space.title}}
    
  <router-link :to="{path:'/service',params:{id:space.id}}">edit</router-link>

  </p>
  <div></div>

</template>

<script>
import gql from 'graphql-tag'
import { useQuery } from '@vue/apollo-composable'

const CHARACTERS_QUERY = gql`
query  getAllPages{
   getAllPages{
    id,
    title
    }


}
  
`
 

 /*


query Launches {
  launches {
    mission_name
    mission_id
    rocket {
      rocket_name
      rocket {
        company
        name
        mass {
          kg
        }
      }
    }
    launch_site {
      site_name
    }
    launch_date_local
  }
}



 */

export default {
  name: 'HelloWorld',
  data(){
      return{
        id:null,
      title:'',
      description:'',
      image_url:'',
    
      }
  },
  components:{
    
  },

  setup () {
    const { result, loading, error } = useQuery(CHARACTERS_QUERY);
    return {
      result,
      loading, 
      error
    }
  },

}
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
