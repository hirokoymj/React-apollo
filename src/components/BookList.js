import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';
import { getBooksQuery, deleteBookMutation } from '../queries/Book';
import{ Link } from 'react-router-dom';

class BookList extends Component{
  onDeleteBook(id){
    console.log(`onDeleteBook: ${id}`);
    this.props.deleteBookMutation({
      variables: {id: id}
    }).then(()=>{
      //this.props.data.refetch();
      this.props.getBooksQuery.refetch();
    })
  }

  showBooks(){
    console.log(this.props);
    //const {loading, books} = this.props.data;
    const {loading, books} = this.props.getBooksQuery;

    if(loading) return (<div>...Loading</div>);
    return books.map(({id, name}) =>{
      return(
        <li key={id}>
          <Link to={`books/${id}`}>{name}</Link>
          <button onClick={() => this.onDeleteBook(id)}>Delete</button>
          <Link to={`/edit/${id}`}>Edit</Link>
        </li>
      )
    })
  }

  render(){
    console.log(this.props);
    //if(this.props.data.loading) return (<div>...Loading</div>);
    return (
      <div>
        <h1>Book List2</h1>
        {this.showBooks()}
      </div>
    )
  }
}
 
// export default graphql(deleteBookMutation)(
//   graphql(getBooksQuery)(BookList)
// );

export default compose(
  graphql(getBooksQuery, {name: "getBooksQuery"}),
  graphql(deleteBookMutation, {name: "deleteBookMutation"})
)(BookList);

