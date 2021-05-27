import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Modal from './Modal'
import MovieCreateForm from './MovieCreateForm'
import { createMovies } from '../actions'

import Moment from 'moment'



const SideMenue = (props) => {

  const { categories } = props

    const router= useRouter()

    const defaultData = {
      startDate:"",
      endDate:""
    }
  
    const formData = props.initialData ? {...props.initialData} : defaultData



    const [form, setform] = useState({})
    const [startTime, setStartTime]= useState(null)
    const [endTime, setEndTime]= useState(null)

    const handleChange = (event) => {
      const target = event.target
      const name = target.name
      console.log(target.value) 
      setform({
        ...form,
        [name]: target.value
      })
      console.log(form)
    }

    let modal=null
    const handleCreateMovie = (movie)=>{
      createMovies(movie).then(movies=>{
        console.log(JSON.stringify(movies))
        modal.closeModal()
        router.push('/')
      })
    }

    return (
        <div>
          
        <h2 className="my-4">
          {props.appName}
        </h2>
        {/*
        <div className="list-group">
          {
            categories.map(categorie=>(
            <div key={categorie.id}>
              <a 
                onClick={()=>props.changeCategory(categorie.name)}
                href="#"
                className={`list-group-item ${props.activeCategory === categorie.name? 'active':''}`}> {categorie.name}</a>
            </div>
            ))
          }
         </div> */}
         <form>
         <div>
          <label for="startDate">Start Date:</label>
          <input 
            type="date" 
            className="form-control"
            id="startDate"
            name="startDate"
            onChange={handleChange}
            value={form.name}
            ></input>
         </div>
         <div>
          <label for="endDate">End Date:</label>
          <input 
            type="date" 
            className="form-control"
            id="endDate"
            name="endDate"
            onChange={handleChange}
            
            ></input>
         </div>
         <input type="submit" className="btn btn-primary" onClick={()=>props.changeCategory(form)} />
         </form>
         <style jsx>{`
            .btn {
              margin-top:20px;
            }
          `}
      </style>
        </div>
    )
}

export default SideMenue