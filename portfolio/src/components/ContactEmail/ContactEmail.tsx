import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactEmail.css"; 

export default function ContactEmail() {
  const [contactDetails, setcontactDetails] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState<{ type: string; message: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      contactDetails: contactDetails, 
      message: message,  
    };

    emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID as string,  
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID as string, 
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID as string 
    )
      .then(
        () => {
          setToast({
            type: "success",
            message: "Message sent successfully!",
          });
          setcontactDetails("");
          setMessage("");
        },
        (error) => {
          console.error("EmailJS error:", error);
          setToast({
            type: "error",
            message: "Failed to send message. Please try again.",
          });
        }
      );
  };


  React.useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        setToast(null);
      }, 5000);
      return () => clearTimeout(timer); 
    }
  }, [toast]);

  return (
    <div id="contact-form" className="contact-form-section">
  
      <div className="form-container">
        <form onSubmit={handleSubmit} className="contact-form">
        <div className="left-side">
        <label>
              
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="border p-2 rounded-md mt-2 w-full h-32"
                placeholder="Type your message"
              ></textarea>
            </label>
          
          
       
          </div>
          <div className="right-side">
          <label> 
              <input
                value={contactDetails}
                onChange={(e) => setcontactDetails(e.target.value)}
                required
                placeholder="Your contact details"
                className="border p-2 rounded-md mt-2 w-full"
              />
            </label>
            <button type="submit" className="submit-btn  text-white p-2 rounded-md mt-4 w-full">
              <div className="image-container">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/wired/50/secured-letter.png"
                  alt="secured-letter"
                />
              </div>
              Send an email
            </button>
          </div>
        </form>
        

        {toast && (
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 p-4`}
          >
            <div
              className={`w-full max-w-sm p-6 rounded-lg shadow-lg transform transition-all ${
                toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
              }`}
            >
              <p className="text-center font-semibold">{toast.message}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}