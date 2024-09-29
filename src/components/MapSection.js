import React from "react";

const MapSection = () => {
  return (
    <section className="h-screen relative flex flex-col">
      <div className="flex-grow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d242.24883623523172!2d8.132247025331347!3d33.922378052949256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU1JzIwLjUiTiA4wrAwNyc1Ni40IkU!5e0!3m2!1sen!2stn!4v1727088403281!5m2!1sen!2stn"
          width="100%"
          height="100%"
          allowFullScreen
          title="Our Location"
          loading="lazy"
          className="border-0"
          style={{ aspectRatio: "16/9" }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
