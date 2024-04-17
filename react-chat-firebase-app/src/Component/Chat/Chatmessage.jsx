import React, { useEffect, useRef } from "react";
import prof from "../Images/close-up-portrait-brunette-smiling-woman-looking-confident-front-standing-hoodie-against-white-wall_11zon.webp";
import imag from "../Images/content-pixie--ZaKKlJUoHE-unsplash.jpg";
function Chatmessage() {
  const endref = useRef(null);

  useEffect(() => {
    endref.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="chat-message">
      <div className="msg-box">
        <img src={prof} className="chat-icon" />
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum
          </p>
        </div>
      </div>
      <div className="msg-box own">
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
        </div>
      </div>
      <div className="msg-box">
        <img src={prof} className="chat-icon" />
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
        </div>
      </div>
      <div className="msg-box own">
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
        </div>
      </div>
      <div className="msg-box">
        <img src={prof} className="chat-icon" />
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
        </div>
      </div>
      <div className="msg-box own">
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
        </div>
      </div>
      <div className="msg-box">
        <img src={prof} className="chat-icon" />
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
        </div>
      </div>
      <div className="msg-box own">
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
        </div>
      </div>
      <div className="msg-box">
        <img src={prof} className="chat-icon" />
        <div className="msg-text">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="msg-box own">
        <div className="msg-text">
          <img src={imag} className="chat-image" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            officia ab maxime rem ipsum voluptas maiores,
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div ref={endref}></div>
    </div>
  );
}

export default Chatmessage;
