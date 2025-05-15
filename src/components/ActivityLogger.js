import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ActivityLogger() {
  const location = useLocation();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("saas_user"));
    if (user) {
      axios.post("http://localhost:8000/activity", {
        name: user.name,             
        activity: "Visited Page",    
        page: location.pathname,     
        timestamp: new Date().toISOString()
      }).catch(err => {
        console.error("Failed to log activity", err);
      });
    }
  }, [location.pathname]);

  return null;
}

export default ActivityLogger;
