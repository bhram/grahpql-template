# grahpql-template

```sh
$ yarn add grahpql-template
```

``
import GTemplate from 'graphql-template';

const templateString = GTemplate({
  type: 'mutation',
  name: 'deleteUser',
  values: [{ id: 'Int!' }],
});

const DELETE_USER = gql(templateString);

``

## instade of 

``
const DELETE_USER = gql`
    mutation deleteUser($id:Int!){
      deleteUser(id:$id )
    }
 `;
``
