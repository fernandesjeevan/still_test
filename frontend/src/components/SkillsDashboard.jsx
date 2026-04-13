import { useState, useEffect } from "react";
import StatusDropdown from "./StatusDropdown.jsx";
import SearchBox from "./SearchBox.jsx";
import AddSkillDrawer from "./AddSkillDrawer.jsx";
import { axiosInstance } from "../../lib/axios.js";
import { Star } from "lucide-react";
const categories = [
  "Technical Skills",
  "Languages",
  "Domain",
  "REated",
  "reteara",
];
const ratings = [
  { id: 1, label: "Beginner" },
  { id: 2, label: "Basic" },
  { id: 3, label: "Intermediate" },
  { id: 4, label: "Advanced" },
  { id: 5, label: "Expert" },
];

function SkillsDashboard() {
  const [search, setSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [error, setError] = useState(null);
  const [mySkills, setMySkills] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/my-skills");
        if (res.status == 200) {
          console.log("did it work", res.data);
          setMySkills(res.data.skills);
          setLoading(false);
          // toast.success("Skill posted successfully");
          // onClose();
        }
      } catch (error) {
        console.log("is it coming to catch", error);
        setError(error);
      }
    };
    fetchData();
  }, []); // Empty dependency array

  return (
    <>
      <div className="flex flex-col h-full p-2">
        <div className="flex justify-between items-center">
          <h1 className="text-gray-700 font-semibold">Skills</h1>
          <button
            onClick={() => setOpenDrawer(true)}
            className="bg-blue-950 text-white px-2 rounded-lg"
          >
            Add Skills
          </button>
        </div>
        <hr className="my-2 border-t-2 border-blue-500" />

        <div className="flex items-center justify-between mb-2">
          <StatusDropdown></StatusDropdown>
          <SearchBox value={search} onChange={setSearch} />
        </div>

        <hr className="mb-2 border-t-2 border-black-300" />

        <div className="border-2 border-gray-700 flex overflow-x-auto justify-between flex-1 ">
          {categories.map((category, index) => (
            
            <div
              key={index}
              className="shrink-0 bg-white rounded-lg m-3 flex flex-col min-w-72"
            >
              <div className="text-gray font-semibold flex justify-between p-2 border-2 border-gray-300 rounded-t-lg">
                <h2>{category}</h2>
                <h2>Added</h2>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-2 bg-amber-700">
                {ratings.toReversed().map((rating) => (
      
                  <div
                    key={rating.id}
                    className="flex items-center justify-between bg-white border border-gray-400 p-2 rounded-lg"
                  >
                    {/* Label stays on the left */}
                    <h1 className="font-medium">{rating.label}</h1>

                    {/* Star container stays on the right */}
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => i + 1).map(
                        (starLevel) => (
                          <Star
                            key={starLevel}
                            size={18}
                            strokeWidth={1.5}
                            // This is the magic line:
                            className={
                              starLevel <= rating.id
                                ? "fill-yellow-400 text-yellow-400"
                                : "text-gray-300"
                            }
                          />
                        ),
                      )}
                    </div>
                  </div>
      
                ))}
                
              </div>
            </div>
          ))}
        </div>
      </div>
      <AddSkillDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </>
  );
}
export default SkillsDashboard;
