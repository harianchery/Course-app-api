import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'


const Search = () => {
    const [course, changeCourse] = useState(
        {
            "title": ""
        }
    )
    const [result, changeResult] = useState([])
    //delete button event
    const deleteCourse=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8081/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfully deleted")
                } else {
                    alert("Something went wrong")
                    
                }
            }
        ).catch()
    }
    // value fetching
    const InputHandler = (event) => {
        changeCourse({ ...course, [event.target.name]: event.target.value })
    }
    // search button event
    const readValue = () => {
        console.log(course)
        axios.post("http://localhost:8081/search", course).then(
            (response) => {
                changeResult(response.data)
            }
        ).catch()


    }

    return (
        <div>
            <Navbar />
            <h3 align="center"><b>Please enter the course name to Search</b></h3>
            <div className="container">
                <div className="row g-3">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">Course Name</label>
                        <input type="text" className="form-control" name='title' value={course.title} onChange={InputHandler} />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <button className="btn btn-primary" onClick={readValue}>Search</button>
                    </div>

                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Duration</th>
                                        <th scope="col">Trainer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        result.map(
                                            (value, index) => {
                                                return <tr>
                                                    <td scope="row">{value.title}</td>
                                                    <td>{value.des}</td>
                                                    <td>{value.dur}</td>
                                                    <td>{value.tname}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button></td>
                                                </tr>
                                            }
                                        )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search