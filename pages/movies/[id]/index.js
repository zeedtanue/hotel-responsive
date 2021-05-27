import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions'
import Link from 'next/link'

import Carousel from '../../../components/CarouSel'


const Movie = (props) => {
  const router = useRouter()
  const { id } = router.query
  const { movie,images } = props

  const handleDeleteMovie = (id) => {
    deleteMovie(id).then(() => {
      router.push('/')
    })
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <Carousel images={images}/>
        <h1 className="display-4">{ movie.name }</h1>
        <p className="lead">{ movie.description }</p>
        <hr className="my-4" />
        <div>
        <iframe src={movie.map} 
        className="map"
        width="100%" 
        height="250" 
        
        loading="lazy"></iframe>
        </div>
      </div>
     
      
      <p className="desc-text">
        { movie.longDesc }
      </p>
      <style jsx>{`
        .desc-text {
          font-size: 21px;
        }
        
      `}
      </style>
    </div>
  )
}

Movie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)

  const images = movie.imageCover.map(m => ({
    id: `image-${m.id}`,
    url: m.url,
    name: m.name }))

  return { 
    movie,
    images
    }
}


export default Movie



