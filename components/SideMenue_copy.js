import React, {useState} from 'react'
import {useRouter} from 'next/router'
import Modal from './Modal'
import MovieCreateForm from './MovieCreateForm'
import { createMovies } from '../actions'



const SideMenue = (props) => {

  const { categories } = props

    const router= useRouter()
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
          <Modal ref={elem=>modal=elem} hasSubmit={false}>
            <MovieCreateForm handleFormSubmit={handleCreateMovie}/>

          </Modal>
        <h1 className="my-4">
          {props.appName}
        </h1>
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
         </div>
           
        </div>
    )
}

export default SideMenue