import { Link } from 'react-router-dom';
import './common.css';

const SearchPopup = ({ searchTerm, searchResults, isLoading }) => {

    return (
      <div className="absolute w-full bg-black text-white left-0 rounded shadow-md z-20 overflow-y-scroll scroll popupContainer" style={{ maxHeight: "100vh" }}>
        {isLoading ? (
          <p>Loading...</p>
        ) : searchResults.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-10 rounded-lg py-10">
            {searchResults.map((result, index) => (
              <Link to={`/details/${result.mal_id}`}>
              <img
                src={result.images.jpg.image_url}
                alt={`Result ${index + 1}`}
                key={index} // Add a unique key prop for each image
                className="rounded-lg"
              />
              </Link>
              ))}
          </div>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    );
  };
  
  export default SearchPopup;
  