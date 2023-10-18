import React from "react";

const GoogleMap = () => {
  return (
    <div className="fullContainer pb-0">
      <h2 className="heading1">Find Us</h2>
      <iframe
        className="w-full h-[80vh]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.859590582974!2d91.98209747452654!3d24.93685274219808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505280eb078613%3A0xe76e620d13ca20e2!2sBoteshwar%20Bazar!5e0!3m2!1sen!2sbd!4v1697647737887!5m2!1sen!2sbd"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
