import React from "react";

const MapSection = () => {
  return (
    <section className="h-screen flex flex-col">
      <div className="flex-grow">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3310.7290672542954!2d8.129761075710924!3d33.92237197320612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU1JzIwLjUiTiA4wrAwNyc1Ni40IkU!5e0!3m2!1sen!2stn!4v1727031240614!5m2!1sen!2stn"
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
