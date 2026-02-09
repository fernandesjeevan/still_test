import { useState } from "react";

export default function StatusDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Status");

  const options = ["Approved", "Rejected", "Pending"];

  return (
    <div className="relative w-48">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-2 border rounded-lg bg-white text-sm"
      >
        {selected}
        <span className="text-gray-400">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-md z-10">
          {options.map(option => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}















