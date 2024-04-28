import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    movie => movie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    movie => movie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-main-bg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-image"
      />
      <div className="prime-video-bg">
        <h1 className="category-name">Action Movies</h1>
        <MoviesSlider moviesList={actionMoviesList} />
        <h1 className="category-name">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
