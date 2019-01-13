import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getBooksQuery } from '../queries/Book';
import { getAuthorsQuery } from '../queries/Author';

class AddBook2 extends Component {
  constructor(props){
    super(props);
    this.state = {
      bookId: ''
    }
  }

  displayBooks = () =>{
    const data = this.props.getBooksQuery;
    if(data.loading){
      return (<option>...Loading</option>)
    }else{
      return data.books.map(book => {
        return (<option key={book.id} value={book.id}>{book.name}</option>);
      });
    }
  }
  onSelectChange = (e) =>{
    console.log(e.target.value);
    this.setState({
      bookId: e.target.value
    })
  }

  // displayAuthors() {
  //   const data = this.props.getAuthorsQuery;
  //   if (data.loading) {
  //     return (<option>Loading...</option>);
  //   } else {
  //     return data.authors.map(author => {
  //       return (<option key={author.id} value={author.id}>{author.name}</option>);
  //     });
  //   }
  // } 

  render(){
    console.log(this.props);
    return(
      <div>
        <h1>Dropdown Test</h1>
        <form>
          <select name="bookId" onChange={this.onSelectChange}>
            <option>Select book</option>
            {this.displayBooks()}
          </select>
        </form>
      </div>
    )
  }
}

export default compose(
  graphql(getBooksQuery, {name: "getBooksQuery"}),
  graphql(getAuthorsQuery, {name: "getAutorsQuery"})
)(AddBook2);
