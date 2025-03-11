import { createContext, useContext, useState } from "react";

const AppContext = createContext({});
export const useMyContext = () => useContext(AppContext);

export const AppProvider = ({ children }: any) => {
    const [state, setState]: any = useState('check');
    const [count, setCount]: any = useState({});
    return <AppContext.Provider value={{ state, setState, count, setCount }}>{children}</AppContext.Provider>;
};