import './index.css'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

const MovieItem = props => {
  const {movieDtails} = props
  const {thumbnailUrl, videoUrl} = movieDtails
  return (
    <>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="movie-image" />
        }
      >
        {close => (
          <div className="popup-container">
            <button
              label="cancel-icon"
              className="cancel-icon-btn"
              type="button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose size={20} color="#231f20" />
            </button>
            <div className="movie-palyer-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </>
  )
}
export default MovieItem
