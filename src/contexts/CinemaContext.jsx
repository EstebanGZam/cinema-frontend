import { createContext, useContext, useState } from "react";
import { getMoviesRequest } from "../api/cinema.js";

export const CinemaContext = createContext();

export const useCinema = () => {
  const context = useContext(CinemaContext);
  if (!context) throw new Error("useClient debe ser usado dentro de un CinemaProvider");
  return context;
};

export const CinemaProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const res = await getMoviesRequest();
    setMovies(res.data);
  };

  return <CinemaContext.Provider value={{ movies, getMovies }}>{children}</CinemaContext.Provider>;
};
