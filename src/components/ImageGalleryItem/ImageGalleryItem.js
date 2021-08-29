import PropTypes from 'prop-types';
import './ImageGalleryItem.css'

function ImageGalleryItem ({ pictures }) {
    return (
        pictures.map(picture => (
            <li key={picture.id} className="ImageGalleryItem">
                <img onClick={() => console.log('Click')} src={picture.webformatURL} alt={picture.tags} className="ImageGalleryItem-image" />
            </li>
        ))
        
    )
};

ImageGalleryItem.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGalleryItem;