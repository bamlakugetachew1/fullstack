
import gql from 'graphql-tag'
export const ADD_BOOK_MUTATION = gql`


mutation createPage($slug: String!,$lang: String!,$title: String!,$section_id: ID!,$published: String!,$content: JSON!){
  createPage(slug:$slug,lang:$lang,title:$title,section_id:$section_id,published:$published,content:$content){
    id
    title
  }
}


`;