import React, { useState } from 'react'

import axios from 'axios'
import Navbar from './Navbar'

const Add = () => {
    const[course,changeCourse]=useState(
        {
            "title":"",
            "des":"",
            "date":"",
            "dur":"",
            "venue":"",
            "tname":""

           
            
            
        }
        
    )
    const InputHandler=(event)=>{
        changeCourse({...course,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(course)
        axios.post("http://localhost:8081/add",course).then(
        (response)=>{
            console.log(response.data)
         
        if (response.data.status=="success") {
            alert ("Successfully added")
            
        } else {
            alert ("Error!")
            
        } 
    }  
        ).catch((error)=>{
            console.log(error.message)
            alert("Error")
        })


    }
    
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    
                    <h3 align="center"><b>Please Enter your Course Details</b></h3>
                    <br></br>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Course Title</label>
                            <input type="text" className="form-control" name='title' value={course.title} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Description</label>
                            <textarea type="text" className="form-control" name='des' value={course.des} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Date</label>
                            <input type="text" className="form-control" name='date' value={course.date} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Duration</label>
                            <input type="text" name="dur" id="" className="form-control" value={course.dur} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Venue</label>
                            <input type="text" className="form-control" name='venue' value={course.venue} onChange={InputHandler}/>
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label className="form-label">Trainer Name</label>
                            <input type="tname" name="tname" id="" className="form-control" value={course.tname} onChange={InputHandler} />

                        </div>
                        
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValue}>Add New Course</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Add