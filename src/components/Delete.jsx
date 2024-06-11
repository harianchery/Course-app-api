import React, { useState } from 'react'
import Navbar from './Navbar'


const Delete = () => {
    const[course,changeCourse]=useState(
        {
            "title":""
        }
    )
    const InputHandler=(event)=>{
        changeCourse({...course,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(course)
    }
    
  return (
    <div>
        <Navbar/>
        <h3 align="center"><b>Please enter the course name to Delete</b></h3>
        <div className="container">
            <div className="row g-3">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Course Name</label>
                    <input type="text" className="form-control" name='title' value={course.title} onChange={InputHandler} />
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-danger" onClick={readValue}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Delete