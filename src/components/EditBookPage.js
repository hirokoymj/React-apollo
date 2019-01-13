import React, {Component} from 'react';
import { graphql, compose } from 'react-apollo';
import { getBookQuery, editBookMutation } from '../queries/Book'; 
import EditForm from './EditForm';

class EditBookPage extends Component{
  constructor(props){
    super(props);
  }

  onSubmit = (formData) =>{
    const {id, name} = formData;

    this.props.editBookMutation({
      variables: {id, name}
    }).then(()=>{this.props.history.push('/')});           
  }
  
  render(){
    console.log(this.props);
    const { book } = this.props.data;
    if(!book) { return <div>Loading...</div>;}

    return(
      <div>
        <p>ID: {this.props.match.params.id}</p>
        <EditForm book={book} history={this.props.history} onSubmit={this.onSubmit} />
      </div>
    )
  }
}


export default compose(
  graphql( getBookQuery, { options: (props) => {
    return { variables: { id: props.match.params.id }
  } } }),
  graphql(editBookMutation, {name: "editBookMutation"})
)(EditBookPage);

