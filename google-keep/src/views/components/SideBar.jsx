import { useLocation, useNavigate } from "react-router";
import "../../styles/sideBar.css";
import { useEffect, useState } from "react";

const menuItems = [
  { icons: <i class="fa-solid fa-lightbulb"></i>, 
    label: "Notes", 
    id: "notes" 
  },
  {
    icons: <i class="fa-solid fa-box-archive"></i>,
    label: "Archive",
    id: "archive",
  },
  { icons: <i class="fa-solid fa-trash"></i>, 
    label: "Trash", 
    id: "trash" 
  },
];

const mapper = {
    '/' : 'notes',
    '/archive' : 'archive',
    '/trash' : 'trash'
}
const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)

  const [activeTab, setActiveTab] = useState('notes');

  useEffect(()=>{
    setActiveTab(mapper[location.pathname])

  },[location.pathname])

  console.log(activeTab,"active")
  const handleNavigation = (path) => {
    if (path === "notes") {
      navigate("/");
    }
    if (path === "archive") {
      navigate("/archive");
    }
    if (path === "trash") {
      navigate("/trash");
    }
  };
  return (
    <div className="sideBarContainer">
      {menuItems?.map((item, index) => (
        <div
          className={`menuItems ${activeTab === item.id ? "active" : ""}`}
          key={index}
          onClick={() => handleNavigation(item?.id)}
        >
          <div className="menuIcon">{item?.icons}</div>
          <div className="menuLabel">{item?.label}</div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
