import React from "react";

export default class PostForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault()

    const { title } = this.state
    const newPost = {
      title, id: Date.now().toString()
    }

    console.log(newPost)
    this.setState({ title: '' })
  }

  changeInptHandler = event => {
    event.persist()
    this.setState(prevState => ({
      ...prevState,
      ...{[event.target.name]: event.target.value}
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label className="title">Post title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={this.changeInptHandler}
            value={this.state.title}
            name="title"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create..
        </button>
      </form>
    )
  }
}
