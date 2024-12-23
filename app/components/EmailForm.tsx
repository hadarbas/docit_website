'use client'

import { useState, useRef, useEffect } from 'react'
import { Code } from 'lucide-react'

export function EmailForm({ buttonText, variant = 'default', icon = null }: { buttonText: string, variant?: 'default' | 'outline', icon?: React.ReactNode }) {
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const getSource = () => {
        if (buttonText.toLowerCase().includes("early access")) {
            return "Early Access";
        } else if (buttonText.toLowerCase().includes("api access")) {
            return "API Access";
        }
        return "Unknown";
    }
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch('/.netlify/functions/submit-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: email, source: getSource() })
            });
            if (!response.ok) {
                const error = await response.json();
                console.error("Error sending email: ", error);
                alert("Error sending email, try again later");
                return;
            }
            setIsSubmitted(true);
        } catch (error) {
            console.error("Error sending email: ", error);
            alert("Error sending email, try again later");
        }
    }


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setIsSubmitted(false);
    };

      useEffect(() => {

       const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                handleCloseModal();
            }
        };
        if (isModalOpen) {
            document.addEventListener('mousedown', handleClickOutside);
         } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
          return () => {
            document.removeEventListener('mousedown', handleClickOutside);
          };
       }, [isModalOpen]);


    return (
        <div className="relative">
            <button
                onClick={handleOpenModal}
                className={`
                    ${variant === 'outline'
                        ? "text-[#2979FF] border-[#2979FF] hover:bg-[#90CAF9] hover:text-white border-2"
                        : "bg-[#2979FF] hover:bg-[#1976D2] text-white"
                    }
                    text-sm px-4 py-2 rounded-md flex items-center gap-2 h-[40px]
                `}>
                {icon}
                {buttonText}
            </button>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative w-[300px] p-6 bg-white border rounded-md shadow-md" ref={modalRef}>
                         <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold">{buttonText}</h3>
                            <button onClick={handleCloseModal} className="text-gray-600 hover:text-gray-800">
                                X
                            </button>
                        </div>
                        {!isSubmitted ? (
                                <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <input
                                        type="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="col-span-4 border rounded-md p-2"
                                        required
                                    />
                                </div>
                                <button type="submit" className="bg-[#2979FF] hover:bg-[#1976D2] text-white rounded-md p-2">
                                    Submit
                                </button>
                            </form>
                         ) : (
                                <p className="py-4 text-center text-green-600">Thank you for your interest! We'll be in touch soon.</p>
                         )}
                    </div>
                </div>
            )}
        </div>
    )
}
