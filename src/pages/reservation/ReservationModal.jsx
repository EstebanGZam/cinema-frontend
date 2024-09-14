import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useReservation } from "../../contexts/ReservationContext";

import CustomInput from "../../components/ui/CustomInput";

export function ReservationModal({ isOpen, onClose, reservation }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const { doReservation } = useReservation();

  useEffect(() => {
    if (reservation) {
      Object.keys(reservation).forEach((key) => {
        setValue(key, reservation[key]);
      });
    } else {
      reset();
    }
  }, [reservation, setValue, reset]);

  const onSubmit = async (data) => {
    if (reservation) {
      await doReservation(reservation.id, data);
    }
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader className="flex flex-col gap-1">REGISTRAR RESERVACIÓN</ModalHeader>
          <ModalBody>
            <CustomInput
              type="text"
              register={register("id", { required: "El nombre del cliente es obligatorio" })}
              label="Cliente"
              placeholder="Ingrese el nombre del cliente"
              name="id"
              errorMessage={errors.id?.message}
              errors={errors}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="ghost" onPress={onClose}>
              Cancelar
            </Button>
            <Button color="primary" type="submit">
              Registrar
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
