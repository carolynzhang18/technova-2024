import Home from "./Home";
import React, { useContext } from "react";
import { WebsiteContext } from '../App';

const Website = () => {
  const { websiteData } = useContext(WebsiteContext);
  return (
    <>
      <header className="px-4 font-serif text-xl" role="group" style={{ position: "absolute", top: "5%", color: websiteData.primaryColor, width: "100%" }}>
        <button style={{ position: "absolute", left: "3%" }} onClick={() => { window.location.href="/website/" }}>HOME</button>
        <div role="group" style={{ position: "absolute", right: "3%" }}>
          <button className="mx-10" onClick={() => { window.location.href="/website/buy" }}>BUY</button>
          <button onClick={() => { window.location.href="/website/contact" }}>CONTACT</button>
        </div>
      </header>
      
      {/* Render the Home component */}
      <Home />
      
      {/* Removed the image grid from here */}
    </>
  );
};

export default Website;
