import React, {Component} from 'react';

class BookForm extends Component{
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

    const formData = {
      id,
      name
    }
    this.props.onSubmit(formData);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
          <br />
          <input type="submit" value="submit" />
        </form>
      </div>
    )
  }
}

export default BookForm;