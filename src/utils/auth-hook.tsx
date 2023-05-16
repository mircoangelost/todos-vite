import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Simulating an asynchronous login check
  useEffect(() => {
    const checkAuth = async () => {
      // Perform your authentication check here
      const isLoggedIn = await fetch("/api/auth/check-auth").then((response) => response.json());

      if (isLoggedIn) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
        navigate("/auth/login", { replace: true });
      }
    };

    checkAuth();
  }, [navigate]);

  return { isAuthenticated };
};

export default useAuth;
