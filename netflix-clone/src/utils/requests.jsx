const API_KEY = process.env.VITE_API_KEY;
const requests = {
  fetchTendering: '/tendering/all/week?api_key=${API_KEY}&language=en-us',
  fetchNetflixOriginals: '/discover/tv?api_key=${API_KEY}&with_networks=123',
//   fetchTopRatedMovies: '',
//   fetchActionMovies: '',
//   fetchComedyMovies: '',
//   fetchHorrorMovies: '',
//   fetchRomanceMovies: '',
//   fetchDocumentaries: '',
//   fetchTvShow: '',
};

export default requests;