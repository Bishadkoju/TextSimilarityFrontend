import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import {useEffect} from 'react'
import {
  faCheck,
  faXmark,
  faCircleNotch,
} from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../helpers/Axios";

const Status = () => {
  const status = useSelector(state => state.status)
  useEffect(() => {
    axiosInstance.get("api/test/")
  }, []);
  
  const icons = {
    disconnected: {
      text: "Not Connected",
      icon: <FontAwesomeIcon style={{ color: "red" }} icon={faXmark} />,
    },
    loading: {
      text: "Model Loading",
      icon: (
        <FontAwesomeIcon
          style={{ animation: `spin 1.4s linear infinite` }}
          icon={faCircleNotch}
        />
      ),
    },
    connected: {
      text: "Connected",
      icon: <FontAwesomeIcon icon={faCheck} />,
    },
  };
  return (
    <div className="status" title="Server Connection Status">
      {icons[status].text} <i>{icons[status].icon}</i>
    </div>
  );
};

export default Status;
