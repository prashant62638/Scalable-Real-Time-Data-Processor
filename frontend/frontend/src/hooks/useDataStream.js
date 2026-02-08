import { useEffect, useState } from "react";
import { sendData } from "../services/api";

export const useDataStream = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const interval = setInterval(async () => {
      const value = Math.random().toString(36).slice(2, 7);

      setData(prev => [{ id: Date.now(), value }, ...prev]);

      const result = await sendData(value);

      if (result?.error) {
        setError(result.error);
      } else {
        setError(null); 
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return { data, error };
};
