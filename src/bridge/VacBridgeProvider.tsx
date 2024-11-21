import React, { createContext, useEffect, useState } from 'react';
import { RawIpcFactory } from '@/bridge/ipc/rawIpc/RawIpcFactory';
import { VacgomAppIpc } from '@/bridge/ipc/vacgomApp/VacgomAppIpc';
import { VacBridge } from '@/bridge/VacBridge';
import { DummyVacBridge } from '@/bridge/DummyVacBridge';
import { AbstractVacBridge } from '@/bridge/AbstractVacBridge';

export const VacBridgeContext = createContext<AbstractVacBridge>(new DummyVacBridge());

export const useVacBridge = () => {
  const vacBridge = React.useContext(VacBridgeContext);
 
  return vacBridge;
};

export const VacBridgeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [vacBridge, setVacBridge] = useState<AbstractVacBridge>(new DummyVacBridge());
  
  useEffect(() => {
    (async () => {
      const rawIpc = await RawIpcFactory.create();
      setVacBridge(new VacBridge(new VacgomAppIpc(rawIpc)));
    })();
    
    
  }, []);
  
  return (
    <VacBridgeContext.Provider value={vacBridge}>
      {children}
    </VacBridgeContext.Provider>
  );
};