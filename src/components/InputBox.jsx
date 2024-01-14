import React from "react";

const InputBox = () => {
  return (
    <div className="bg-white p-3 rounded-lg text-sm flex">
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">From/To</label>
        <input
          type="number"
          placeholder="Amount"
          className="outline-none w-full bg-transparent py-1.5"
        />
      </div>

      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none">
          {[1, 2, 3, 4, 5].map((currency) => {
            <option key={currency}>{currency}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
