import React from 'react';
import { connect } from "redux-zero/react";
import {addComment} from './actions';
import './App.css';

const InputText =()=>{
  return(
    <div className="col-lg-9 col-md-9 col-xs-9 input-data">
      <div className=" form-group text-left">
        <label className="text-color">NEW COMMENT</label>
        <input type="text" className="form-control"/>
        </div>
      <div className="form-group">
        <textarea className="form-control"/>
      </div>
      <button className="btn btn-comment text-color">POST COMMENT</button>
    </div>
    )
}
 const SingleComment =({oneComment,index})=>{
   return(
    <li key={index}>
      <div>
        {oneComment.name}
      </div>
      <div>
        {oneComment.comment}
      </div>
    </li>
   )
 }
const Comments =({listComments}) =>{
  return(
    <ol>
    {
      listComments.map((item,index)=>{
        return <SingleComment key={index} oneComment={item} index={index}/>
      })
    }
</ol>
  )
}
const App =()=> {

    return (
      <div className="container-fluid text-center">
        <InputText/>
        <div className="showComments">
          <Comments listComments = {listComments}/>
        </div>
      </div>
    );
}

const mapToProps = ({listComments,currentComment}) => ({listComments,currentComment});

export default connect(mapToProps)(App);
