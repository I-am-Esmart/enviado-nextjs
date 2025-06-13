"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface ModalContextPropsType {
  isModalOpen: boolean;
  handleOPenModal: () => void;
  handleCloseModal: () => void;
}

const ModalContextProps: ModalContextPropsType = {
  isModalOpen: false,
  handleOPenModal: () => {},
  handleCloseModal: () => {},
};

const ModalContext = createContext<ModalContextPropsType>(ModalContextProps);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOPenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        handleOPenModal,
        handleCloseModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (modalContext === undefined) {
    throw new Error("useModalContext must be used within an Provider");
  }
  return modalContext;
};
