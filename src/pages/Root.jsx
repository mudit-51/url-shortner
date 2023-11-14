import { useState } from "react";

function Root() {
  const [text, setText] = useState("");
  const [res, setRes] = useState("Shortned URL here");
  const sendURL = async function (textURL) {
    const resp = await fetch("http://localhost:5000/create", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        target_url: textURL,
      }),
    });
    const json = await resp.json();
    return json.urlhash;
  };

  const url_process = function () {
    return async () => {
      if (text) {
        try {
          new URL(text);
          setRes("Loading");
          const hash = await sendURL(text);
          setRes(`http://localhost:3000/${hash}`);
        } catch (e) {
          setRes("Invalid URL entered");
        }
        setText("");
      }
    };
  };

  return (
    <div className="h-screen w-screen bg-green-400 flex justify-center">
      <div className="self-center h-2/5 w-3/4 p-4 min-h-fit bg-white rounded-md flex flex-col justify-around items-center">
        <p className="w-max h-max">URL Shortner</p>
        <div className="w-full border-2 border-black rounded ">
          <input
            type="text"
            name="url-input"
            id=""
            className="w-full p-1 outline-none"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <button
          className="bg-green-400 text-white rounded p-1"
          onClick={url_process()}
        >
          Generate shortned URL
        </button>
        <p className="">{res}</p>
      </div>
    </div>
  );
}

export default Root;
