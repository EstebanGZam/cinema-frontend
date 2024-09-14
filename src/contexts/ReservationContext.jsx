import { createContext, useContext, useState } from "react";
import { getReservationsRequest, doReservationRequest, deleteReservationRequest } from "../api/reservation.js";

export const ReservationContext = createContext();

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("useReservation debe ser usado dentro de un ReservationProvider");
  return context;
};

export const ReservationProvider = ({ children }) => {
  const [reservations, setReservations] = useState([]);

  const getReservations = async () => {
    const res = await getReservationsRequest();
    setReservations(res.data);
  };

  const doReservation = async (id, reservation) => {
    const res = await doReservationRequest(id, reservation);
    setReservations(reservations.map((r) => (r.id === id ? res.data.reservation : r)));
  };

  const cancelReservation = async (id) => {
    await deleteReservationRequest(id);
    setReservations(reservations.filter((r) => r.id !== id));
    await getReservations();
  };

  return (
    <ReservationContext.Provider value={{ reservations, getReservations, doReservation, cancelReservation }}>
      {children}
    </ReservationContext.Provider>
  );
};
