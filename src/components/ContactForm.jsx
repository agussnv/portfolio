'use client'

import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'
import { Loader2 } from 'lucide-react';

const ContactForm = ({ setContactView }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [mailSendView, setMailSendView] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setMailSendView(false);
    }, [setContactView]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const result = await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            );
            console.log('Mensaje enviado', result);
            setMailSendView(true);
        } catch (error) {
            console.error('Error al enviar el mensaje', error);
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-xs z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => { setContactView(false) }}
        >
            <motion.div
                className="bg-white border-[2px] border-[#3D3D3D] rounded-xl w-[600px] shadow-[-5px_5px_0px_0px_rgba(61,61,61,1)]"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{
                    scale: 0.8,
                    opacity: 0,
                }}
                transition={{ duration: 0.3 }}
                onClick={(e) => { e.stopPropagation() }}
            >
                <div className="w-full border-b-[2px] border-[#3D3D3D] flex items-center relative justify-center py-2">
                    <p className="font-bold text-[20px] mt-1">FORMULARIO DE CONTACTO</p>
                    <svg onClick={() => { setContactView(false) }} width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-[15px] cursor-pointer hover:scale-110 transition-all">
                        <line x1="1.29289" y1="22.5062" x2="22.5061" y2="1.29295" stroke="#3D3D3D" strokeWidth="2" />
                        <line x1="1.70711" y1="1.29289" x2="22.9203" y2="22.5061" stroke="#3D3D3D" strokeWidth="2" />
                    </svg>
                </div>

                {!mailSendView ? (
                    <div className="py-8 px-10">
                        <h2 className="text-[35px] font-bold mb-4 text-center">¡Trabajemos juntos!</h2>
                        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <label className="text-[22px]">Nombre</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="border border-gray-300 rounded px-4 py-2 text-[20px]"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[22px]">Correo electrónico</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="border border-gray-300 rounded px-4 py-2 text-[20px]"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[22px]">Mensaje</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    required
                                    className="border border-gray-300 rounded px-4 py-2 resize-none text-[20px]"
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-center w-full h-[50px] mt-2">
                                <button
                                    type="submit"
                                    className="bg-[#3D3D3D] text-center rounded-md w-xs flex justify-center items-center text-white text-[25px] font-bold py-2 rounded hover:bg-[#2a2a2a] hover:scale-102 transition-all cursor-pointer"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-7 h-7 animate-spin" />
                                    ) : (
                                        <span>CONTACTAR</span>
                                    )}
                                </button>
                                
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="py-8 px-10">
                        <h2 className="text-[35px] font-bold mb-4 text-center">¡Gracias por contactarme!</h2>
                        <p className="text-center text-[20px]">He recibido tu mensaje,<br />pronto me pondré en contacto.</p>
                    </div>
                )}
            </motion.div>
        </motion.div>
    );
};

export default ContactForm;