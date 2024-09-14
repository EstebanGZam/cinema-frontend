import { useEffect, useState } from "react";

import { useCinema } from "../../contexts/CinemaContext";
import DefaultLayout from "../../layouts/DefaultLayout";
import CustomTable from "../../components/ui/CustomTable";

function ClientPage() {
  const { movies, getMovies } = useCinema();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getMovies();
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const columns = [
    { name: "ID", uid: "id", sortable: true },
    { name: "PELICULA", uid: "title", sortable: true },
    { name: "SYNOPSIS", uid: "synopsis" },
    { name: "DURACIÓN", uid: "duration" },
    { name: "FECHA DE ESTRENO", uid: "releaseDate" },
    { name: "CLASIFICACIÓN", uid: "classification" },
    { name: "DIRECTOR", uid: "director" },
  ];

  const initialVisibleColumns = ["id", "client_name", "email", "phone", "city", "actions"];

  return (
    <DefaultLayout>
      <div className="p-2">
        <h2 className="text-gray-800 text-2xl font-bold">Peliculas</h2>
      </div>
      {!isLoading && movies && movies.length > 0 && (
        <CustomTable
          elements={movies}
          name="movies"
          columns={columns}
          initialVisibleColumns={initialVisibleColumns}
          filterProperty="client_name"
          additionalFilter={{ field: "city", label: "Ciudad" }}
        />
      )}
    </DefaultLayout>
  );
}

export default ClientPage;
