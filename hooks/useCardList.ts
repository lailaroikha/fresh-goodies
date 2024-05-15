import { useState, useEffect } from "react";

interface Card {
  name: string;
  image: string;
  price: string;
  weight: string;
} 

const useCardList = () => {
  const [cardList, setCardList] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<string>("");
  const [error, setError] = useState<unknown>(null);
    

  useEffect(() => {
    const fetchCardList = async () => {
      try {
        const response = await fetch("http://localhost:8080/products");
        if (!response.ok) {
          throw new Error("Failed to fetch card list");
        }
        const data = await response.json();
        const filteredData = data.filter((card: Card) => card.name === category);
        console.log(data);
        setCardList(data);
        setLoading(false);
        setCategory(filteredData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCardList();
  }, []);

  return { cardList, loading,error };
};

export default useCardList;