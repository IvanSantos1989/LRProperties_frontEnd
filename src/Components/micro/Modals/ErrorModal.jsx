import React from "react";
import ReactDOM from "react-dom";

export default function ErrorModal({ errorMessage, visible, setVisible }) {
  if (!visible) return null;
  
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <div className="flex items-center mt-4">
          <div className="rounded-full border border-red-500 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
            <i className="bx bx-error text-3xl text-red-500">&#9888;</i>
          </div>
          <div className="ml-4">
            <p className="font-bold text-red-500 mb-1">Error!</p>
            <p className="text-sm text-gray-500">{errorMessage}</p>
          </div>
        </div>
        <div className="text-right mt-4">
          <button
            className="px-4 py-2 bg-gray-200 rounded-lg font-semibold text-sm"
            onClick={() => setVisible(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
