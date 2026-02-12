import { useEffect, useState } from "react";
import { Rows, Star } from "lucide-react";
import NoProfile from "../assets/noprofile.jpg";
//import { PaperClipLogo } from "../assets/paper-clip.png";
// export default function AddSkillDrawer({ open, onClose }) {
//   const [skill, setSkill] = useState("");
//   const [level, setLevel] = useState(null);
//   const [description, setDescription] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   // ESC key close
//   useEffect(() => {
//     if (!open) return;

//     const handleEsc = (e) => {
//       if (e.key === "Escape") onClose();
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => window.removeEventListener("keydown", handleEsc);
//   }, [open, onClose]);

//   // Reset form when drawer closes
//   useEffect(() => {
//     if (!open) {
//       setSkill("");
//       setLevel(null);
//       setDescription("");
//     }
//   }, [open]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!skill || !level) return;

//     setSubmitting(true);

//     // simulate API call
//     await new Promise((res) => setTimeout(res, 1000));

//     setSubmitting(false);
//     onClose(); // ✅ close on success
//   };

//   return (
//     <>
//       {/* Backdrop */}
//       {open && (
//         <div
//           className="fixed inset-0 bg-black/40 z-40"
//           onClick={onClose}
//         />
//       )}

//       {/* Drawer */}
//       <div
//         className={`
//           fixed top-0 right-0 h-full w-105
//           bg-white shadow-xl z-50
//           transform transition-transform duration-300
//           ${open ? "translate-x-0" : "translate-x-full"}
//         `}
//       >
//         {/* Header */}
//         <div className="flex justify-between items-center p-4 border-b">
//           <div>
//             <h2 className="text-lg font-semibold">Add Skill</h2>
//             <p className="text-sm text-gray-500">
//               Add a skill for approval
//             </p>
//           </div>
//           <button
//             onClick={onClose}
//             className="text-xl text-gray-500 hover:text-black"
//           >
//             ✕
//           </button>
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="p-4 flex flex-col gap-4 overflow-y-auto h-[calc(100%-140px)]"
//         >
//           {/* Skill */}
//           <div>
//             <label className="text-sm font-medium">
//               Skill <span className="text-red-500">*</span>
//             </label>
//             <input
//               value={skill}
//               onChange={(e) => setSkill(e.target.value)}
//               className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
//               placeholder="Enter skill"
//             />
//           </div>

//           {/* Proficiency */}
//           <div>
//             <label className="text-sm font-medium">
//               Proficiency Level <span className="text-red-500">*</span>
//             </label>
//             <div className="flex justify-between mt-2">
//               {["Beginner", "Basic", "Intermediate", "Advanced", "Expert"].map(
//                 (label, i) => (
//                   <button
//                     type="button"
//                     key={label}
//                     onClick={() => setLevel(i + 1)}
//                     className={`flex flex-col items-center text-xs ${
//                       level === i + 1
//                         ? "text-blue-600"
//                         : "text-gray-400"
//                     }`}
//                   >
//                     <span className="text-2xl">★</span>
//                     {label}
//                   </button>
//                 )
//               )}
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="text-sm font-medium">Description</label>
//             <textarea
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               className="w-full mt-1 border rounded-lg px-3 py-2 text-sm"
//               rows={4}
//             />
//           </div>

//           {/* File upload (dummy) */}
//           <div className="border border-dashed rounded-lg p-4 text-sm text-gray-500">
//             Attach supporting evidence (PDF / JPG / PNG)
//           </div>

//           {/* Approver */}
//           <div className="border rounded-lg p-3 flex items-center gap-3">
//             <img
//               src="https://via.placeholder.com/40"
//               className="rounded-full"
//             />
//             <div>
//               <p className="text-sm font-medium">
//                 Jeevan Fernandes
//               </p>
//               <p className="text-xs text-gray-500">
//                 Typically approved in 2–3 days
//               </p>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="flex gap-3 mt-auto">
//             <button
//               type="button"
//               onClick={onClose}
//               className="flex-1 border rounded-lg py-2"
//             >
//               Cancel
//             </button>
//             <button
//               type="submit"
//               disabled={submitting}
//               className="flex-1 bg-blue-900 text-white rounded-lg py-2 flex items-center justify-center gap-2"
//             >
//               {submitting ? "Submitting..." : "+ Submit for approval"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </>o
//   );
// }

export default function AddSkillDrawer({ open, onClose }) {
  const skills = [
    { id: 1, skill: "c#" },
    { id: 2, skill: "js" },
    { id: 3, skill: "c++" },
    { id: 4, skill: "R" },
    { id: 5, skill: "D" },
  ];
  const [skill, setSkill] = useState("");
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [description, setDescription] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    const formData = new FormData(e.target)
    const data  = Object.fromEntries(formData)
    
  }
  
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("File size must be less than 10mb");
      return;
    }
    setFileName(file.name);
  };

  useEffect(()=>{
    if(!open) return;
    const handleEscape = (e)=>{
        if(e.key==="Escape") onClose();
    };
    window.addEventListener("keydown",handleEscape)
    return ()=> {window.removeEventListener("keydown",handleEscape)}
    
  },[open,onClose]
    )

    useEffect(()=>{
        if(!open)   
            setSkill("");
            setRating(0);
            setHoverRating(0);
            setDescription("")
            setFileName("")
    },[open])
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => {
            onClose();
          }}
        ></div>
      )}
      <div
        className={`fixed w-105 top-0 right-0   h-full bg-white z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"} flex flex-col`}
      >
        <div className="mx-4 flex p-2 justify-between">
            <label>Add Skill</label>
            <label className="font-bold" onClick={onClose}> X </label>
        </div>
        <div className="mx-4 text-gray-400 p-2">Add a skill for approval</div>
        <div className="mx-2 flex-1 overflow-y-auto">
          <form id="skillSubmissionForm" onSubmit={handleSubmit} method="POST" className="flex flex-col flex-1 gap-2 p-3">
            <label className="font-medium">
              <span className="text-red-700">*</span> Skill
            </label>
            <select
              name="skill" className="m-1 p-1 border-2 border-gray-400 rounded-lg"
              value={skill}
              onChange={(e) => setSkill(e.target.value)}
            >
              <option value="" disabled>
                Select a skill
              </option>
              {skills.map((skill) => (
                <option key={skill.id} value={skill.skill}>
                  {skill.skill}
                </option>
              ))}
            </select>
            <label className="font-medium">
              <span className="text-red-700">*</span> Proficiency Level
            </label>

            <div
              className="flex justify-between mt-2"
              onMouseLeave={() => setHoverRating(0)}
            >
              {[
                { value: 1, label: "Beginner" },
                { value: 2, label: "Basic" },
                { value: 3, label: "Intermediate" },
                { value: 4, label: "Advanced" },
                { value: 5, label: "Expert" },
              ].map((level) => (
                <div
                  key={level.value}
                  onClick={() => setRating(level.value)}
                  onMouseEnter={() => setHoverRating(level.value)}
                  className="flex flex-col items-center cursor-pointer"
                >
                  
                  <Star
                    size={44}
                    strokeWidth={1.5}
                    className={`transition-all duration-150 ${
                      level.value <= (hoverRating || rating)
                        ? "fill-yellow-400 text-yellow-400 scale-110"
                        : "text-gray-300"
                    }`}
                  />
                  <span className="text-xs mt-2 text-gray-600 text-center">
                    {level.label}
                  </span>
                  <input type="hidden" name="rating" value={rating} />
                </div>
              ))}
            </div>
            <label className="font-medium">Description</label>
            <textarea
              value={description}
              name="description"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              rows={4}
              className="w-full mt-2 p-2 rounded-lg border-2 border-gray-400"
            />
            <div className="mt-4">
              <label className="block text-sm font-medium mb-2">
                Supporting Evidence
              </label>

              <label className="relative flex flex-col gap-2 border-2 border-dashed border-gray-300 rounded-lg p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition">
                <span className="text-sm text-gray-500">
                  Only PDF, PNG, JPG, JPEG allowed. Max size 10MB
                </span>

                <div className="flex items-center gap-2 text-gray-700">
                  <span>📎</span>
                  <span className="font-medium">
                    {fileName || "Attach file"}
                  </span>
                </div>

                <input
                  name="evidence"
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  className="absolute inset-0 opacity-0  cursor-pointer"
                  onChange={handleFileChange}
                />
              </label>
              <div className="border-2 border-gray-500 rounded-lg flex flex-col mt-4">
                <div className="flex flex-row justify-between text-gray-600">
                  <label>Jeevan Fernandes{/* todo get it from backend*/}</label>
                  <label>Typically approved in 2-3 days</label>
                  
                </div>
                <div className="flex flex-row">
                  <img
                    className="w-12 h-12 m-2"
                    src={NoProfile}
                    alt="no profile"
                  ></img>
                  <div className="flex flex-col flex-1">
                    <label> Jeevan Fernandes</label>
                    <label className="text-gray-400">
                      {" "}
                      jeevan.fernandes@gmail.com
                    </label>
                  </div>
                </div>
              </div>
              
            </div>
          </form>
          

        </div>
        <div className="flex flex-row items-center justify-center p-4 border-gray-200 drop-shadow-2xl border-t">
                <button
                  className="text-red border-2 rounded-sm border-gray-900 mx-2 p-2"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  form="skillSubmissionForm"
                  className="text-white border-2 rounded-sm border-gray-900 bg-blue-700 mx-2 p-2"
                >
                   Submit Skill
                </button>
                </button>
              </div>
      </div>
    </>
  );
}
