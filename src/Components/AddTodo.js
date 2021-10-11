import React, { useState } from 'react';

export const AddTodo = (props) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or description cannot be blank');
    }else{
      props.addTodo(title,desc);
      setTitle("");
      setDesc("");
    }

  }
  return (
    <div className="row m-4">
      <div className="col-sm-12">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Title</label>
            <input
              value={title}
              onChange={(e)=>{setTitle(e.target.value)}}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
              value={desc}
              onChange={(e)=>{setDesc(e.target.value)}}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Description"
            />
          </div>

          <button type="submit" className="btn btn-sm btn-success">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
