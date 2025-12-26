import { createContext, useContext, useState } from "react";


const FormContext = createContext();


export const FormProvider = ({ children }) => {
    const [form, setForm] = useState({
        name: "",
        adults: 1,
        children: 0,
        email: "",
        phone: "",
        source: "",
        duration: "",
        expectations: [],
        locations: [],
        airport: "",
    });


    return (
        <FormContext.Provider value={{ form, setForm }}>
            {children}
        </FormContext.Provider>
    );
};


export const useForm = () => useContext(FormContext);