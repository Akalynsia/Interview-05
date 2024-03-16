import React, { useEffect, useState, useRef } from "react";

function App() {
  // KODUNU BURAYA GELECEK
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([]);
  const [modalText, setModalText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleChange = (event) => {
    setInputText(event.target.value);
  };
  const handleClick = (event) => {
    setModalText(text);
    setShowModal(true);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAdd = () => {
    setInputList([...inputList, inputText]);
    setInputText("");
  };

  return (
    <div className="container mx-auto py-8">
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        className="border border-gray-400 p-2 mb-4"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded ml-4"
      >
        Ekle
      </button>
      <ul className="mt-4">
        {inputList.map((item, index) => (
          <li
            key={index}
            onClick={() => handleClick(item)}
            className="cursor-pointer border border-gray-400 p-2 mb-2"
          >
            {item.length <= 6 ? item : <span>{item.substring(0, 5)}...</span>}
          </li>
        ))}
      </ul>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div
            className="absolute bg-white p-8 border border-gray-400 rounded"
            ref={modalRef}
          >
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
