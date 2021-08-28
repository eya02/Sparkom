import axios from "axios";
import React, { useState } from "react";
export default function Mail() {
  const [sent, setSend] = useState(false);
  const [text, setText] = useState("");
  const mail = "eya.bellil@esprit.tn";
  const handleSend = async () => {
    setSend(true);
    try {
      await axios.post("http://localhost:3002/send_mail", {
        text,
        mail,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {!sent ? (
        <form onSubmit={handleSend}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      ) : (
        <h1>Email Sent</h1>
      )}
    </div>
  );
}
