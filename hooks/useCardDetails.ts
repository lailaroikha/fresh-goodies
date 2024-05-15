import {useState, useEffect, use} from "react";

interface Card {
    image: string;
    name: string;
    weight: string;
    information: string;
}

const useCardDetails = (cardName:string) => {
    const [cardDetail, setCardDetail] = useState<Card | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        const fetchCardDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8080/products/${cardName}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch card detail");
                }
                const data = await response.json();
                console.log(data);
                setCardDetail(data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            } 
        };

        fetchCardDetails();
    }, []);
}

export default useCardDetails;
