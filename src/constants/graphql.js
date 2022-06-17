import gql from 'graphql-tag'
export const ADD_BOOK_MUTATION = gql`
    mutation {
      
createPage(slug:$slug,
lang: $lang,
title: $title,
section_id: $section_id,
published:$published,
content:$content) {
             id
  }
    }
`;