import { useEffect, useState } from "react";
import { Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem } from "@nextui-org/react";

import DefaultLayout from "../../layouts/DefaultLayout";
import { useReservation } from "../../contexts/ReservationContext";
import { ReservationModal } from "./ReservationModal";
import CustomTable from "../../components/ui/CustomTable";

import { BsThreeDotsVertical } from "react-icons/bs";
import { MdDelete } from "react-icons/md";

function ReservationPage() {
  const { reservations, getReservations, cancelReservation } = useReservation();
  const [isOpen, setIsOpen] = useState(false);
  const [reservation, setReservation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await getReservations();
      setIsLoading(false);
    };
    fetchData();
  });

  const handleReservation = (reservation) => {
    setReservation(reservation);
    setIsOpen(true);
  };

  const handleCancel = async (id) => {
    await cancelReservation(id);
  };

  return (
    <DefaultLayout>
      <div className="p-2">
        <h2 className="text-gray-800 text-2xl font-bold">Página de reservaciones</h2>
      </div>
    </DefaultLayout>
  );
}

export default ReservationPage;
