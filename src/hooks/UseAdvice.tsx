import { useEffect, useState } from "react";
import type { AdviceSlip, AdviceResponse } from "../types/advice";

export default function UseAdvice() {
  const [advice, setAdvice] = useState<AdviceSlip | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAdvice = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.adviceslip.com/advice", {
        cache: "no-store",
      });

      const data: AdviceResponse = await response.json();

      setAdvice(data.slip);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Une erreur inattendue est survenue.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return {
    advice,
    loading,
    error,
    fetchAdvice,
  };

}
