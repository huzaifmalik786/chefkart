import React from 'react';

type ContextProps = { 
    setModalOpen?: (open: boolean) => void
  };
export const ModalContext = React.createContext<ContextProps>({});