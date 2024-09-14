import axios from "./axios.js";

export const getReservationsRequest = () => axios.get("/reservation");

export const doReservationRequest = (id, reservation) => axios.put(`/reservation/${id}`, reservation);

export const deleteReservationRequest = (id) => axios.delete(`/reservation/${id}`);
