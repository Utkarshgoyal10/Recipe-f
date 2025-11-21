import { createContext, useEffect, useState } from "react";

const ResponsiveContext = createContext();

export const ResponsiveProvider = ({ children }) => {
  // const REACT_APP_BACKEND_URL =
  //   "https://5y0r602j56.execute-api.ap-south-1.amazonaws.com/dev";
  // const REACT_APP_BACKEND_URL = "https://api.ebonow.com";
  // const REACT_APP_BACKEND_URL =
  //   "https://dq6kwiyrnev7z.cloudfront.net";
  const REACT_APP_BACKEND_URL = "http://localhost:5000";
  // const REACT_APP_BACKEND_URL =
  //   "https://x1llneda5a.execute-api.ap-south-1.amazonaws.com/prod/";

  const [screenWidth, setScreenWidth] = useState(0);



  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ResponsiveContext.Provider
      value={{ screenWidth, REACT_APP_BACKEND_URL }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

export default ResponsiveContext;
