import React, { useState } from "react";
import sideimage from "../../assets/images/update.png"

const Update = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // Logic for subscribing the email
    console.log("Subscribed:", email);
  };

  return (
    <div className="w-full md:px-40 md:flex md:mt-16">
    <div className=" md:w-3/5">
      <div>
        <h1 className=" text-2xl md:text-6xl font-bold mb-5">
          UPDATE <span className="text-red-600">EVERYDAY</span> ONLY AT ANIMEHUB
        </h1>
        <p className="text-white text-sm md:pr-10 mb-4">
        Never miss the latest updates on your favorite anime series and movies!
        Subscribe to our daily updates and be the first to know about new episodes,
        movie releases, and exciting announcements from AnimeHub.
      </p>
      </div>
      <div className="flex items-center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          className="bg-gray-800 outline-none md:w-4/5 rounded-l-2xl py-3 px-2 md:py-5 md:px-4 text-gray-500"
        />
        <button
          onClick={handleSubscribe}
          type="button"
          className="bg-blue-500 text-white md:px-4 md:py-5 text-xs md:text-base py-2 rounded-r-2xl hover:bg-blue-600"
        >
          Get notified
        </button>
      </div>
    </div>
    <div className="md:w-2/5">
        <img className="w-full" src={sideimage} />
    </div>
    </div>
  );
};

export default Update;
