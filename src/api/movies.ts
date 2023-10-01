interface MovieApiProps {
  movieName: string;
  pageNumber: number;
}

const getMovies = async ({ movieName, pageNumber }: MovieApiProps) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce8160c113msh8fb619c6c4a71d8p18d9cbjsn72e04ad9be2a",
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };
  const url = `https://movie-database-alternative.p.rapidapi.com/?s=${movieName}&r=json&page=${pageNumber}`;
  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getMoviesFromIMDB = async () => {
  const url = "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce8160c113msh8fb619c6c4a71d8p18d9cbjsn72e04ad9be2a",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

const getMoviesByyear = async () => {
  const url =
    "https://movie-database-alternative.p.rapidapi.com/?y=2023&r=json";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ce8160c113msh8fb619c6c4a71d8p18d9cbjsn72e04ad9be2a",
      "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
