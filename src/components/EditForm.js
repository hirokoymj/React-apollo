import React, {Component} from 'react';
// import { graphql } from 'react-apollo';
// import{ editBookMutation, getBooksQuery } from '../queries/Book';

class EditForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: (this.props.book) ? this.props.book.name : "",
      id: (this.props.book) ? this.props.book.id : ""
    }
  }

  onChange = (e) =>{
    this.setState({
      name: e.target.value
    })
  }

  onSubmit = (e) =>{
    e.preventDefault();
    const {id, name} = this.state;

    // this.props.mutate({
    //   variables: {id: this.state.bookId, name: this.state.name},
    //   refetchQueries: [ {query: getBooksQuery} ]
    // }).then(()=>{this.props.history.push('/')});  
    const formData = {
      name: name,
      id: id
    }
    this.props.onSubmit(formData);
  }

  render(){
    return(
      <div>
        <h1>Edit Form</h1>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default EditForm;