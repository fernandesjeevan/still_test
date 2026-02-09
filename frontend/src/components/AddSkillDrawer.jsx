import { useEffect, useState } from "react";

export default function AddSkillDrawer({ open, onClose }) {
  const [skill, setSkill] = useState("");
  const [level, setLevel] = useState(null);
  const [description, setDescription] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // ESC key close
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {  
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  // Reset form when drawer closes
  useEffect(() => {
    if (!open) {
      setSkill("");
      setLevel(null);
      setDescription("");
    }
  }, [open]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!skill || !level) return;

    setSubmitting(true);

    // simulate API call
    await new Promise((res) => setTimeout(res, 1000));

    setSubmitting(false);
    onClose(); // ✅ close on success
  };

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-105
          bg-white shadow-xl z-50
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold">Add Skill</h2>
            <p className="text-sm text-gray-500">
              Add a skill for approval
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-xl text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-140px)]"
        >
          {/* Skill */}
          <div>
            <label className="text-sm font-medium">
              Skill <span className="text-red-500">*</span>
            </label>
            <input
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
              className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
              placeholder="Enter skill"
            />
          </div>

          {/* Proficiency */}
          <div>
            <label className="text-sm font-medium">
              Proficiency Level <span className="text-red-500">*</span>
            </label>
            <div className="flex justify-between mt-2">
              {["Beginner", "Basic", "Intermediate", "Advanced", "Expert"].map(
                (label, i) => (
                  <button
                    type="button"
                    key={label}
                    onClick={() => setLevel(i + 1)}
                    className={`flex flex-col items-center text-xs ${
                      level === i + 1
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    <span className="text-2xl">★</span>
                    {label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
              rows={4}
            />
          </div>

          {/* File upload (dummy) */}
          <div className="border border-dashed rounded-lg p-4 text-sm text-gray-500">
            Attach supporting evidence (PDF / JPG / PNG)
          </div>

          {/* Approver */}
          <div className="border rounded-lg p-3 flex items-center gap-3">
            <img
              src="https://via.placeholder.com/40"
              className="rounded-full"
            />
            <div>
              <p className="text-sm font-medium">
                Jeevan Fernandes
              </p>
              <p className="text-xs text-gray-500">
                Typically approved in 2–3 days
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex gap-3 mt-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border rounded-lg py-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-blue-900 text-white rounded-lg py-2 flex items-center justify-center gap-2"
            >
              {submitting ? "Submitting..." : "+ Submit for approval"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
