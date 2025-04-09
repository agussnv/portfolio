'use client'

import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
    const [contactView, setContactView] = useState(false);
    const [mailSendView, setMailSendView] = useState(false);

    return (
        <ContactContext.Provider value={{ contactView, setContactView, mailSendView, setMailSendView }}>
            {children}
        </ContactContext.Provider>
    );
};

export const useContact = () => useContext(ContactContext);
