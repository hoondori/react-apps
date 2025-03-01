import { useLocation } from 'react-router-dom';

function MovieDetail() {
  const location = useLocation();
  const state = location.state 

  if (state) {
    return <span>{state.title}</span>;
  } else {
    return null;
  }  
}

export default MovieDetail;