"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

interface UserContextPropsType {
  isNavDropdownOpen: boolean;
  handleOPenNavDropdown: () => void;
  handleCloseNavDropdown: () => void;
}

const UserContextProps: UserContextPropsType = {
  isNavDropdownOpen: false,
  handleOPenNavDropdown: () => {},
  handleCloseNavDropdown: () => {},
};

const UserContext = createContext<UserContextPropsType>(UserContextProps);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState<boolean>(false);

  const handleOPenNavDropdown = () => {
    setIsNavDropdownOpen(true);
  };

  const handleCloseNavDropdown = () => {
    setIsNavDropdownOpen(false);
  };

  return (
    <UserContext.Provider
      value={{
        isNavDropdownOpen,
        handleOPenNavDropdown,
        handleCloseNavDropdown,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext must be used within an Provider");
  }
  return context;
};
