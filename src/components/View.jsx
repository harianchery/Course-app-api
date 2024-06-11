import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [course, changeCourse] = useState([])
    const fetchData=()=>{
        axios.get("http://localhost:8081/view").then(
            (response)=>{
                changeCourse(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
        
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Course Name</th>
                                    <th scope="col">Course Duration</th>
                                    <th scope="col">Course venue</th>
                                    <th scope="col">Trainer</th>
                                </tr>
                            </thead>
                            {
                                course.map(
                                    (value,index)=>{
                                        return <tbody>
                                        <tr>
                                            <td scope="row">{value.title}</td>
                                            <td>{value.dur}</td>
                                            <td>{value.venue}</td>
                                            <td>{value.tname}</td>
                                        </tr>
                                        
                                    </tbody>
                                    }
                                )
                            }
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default View