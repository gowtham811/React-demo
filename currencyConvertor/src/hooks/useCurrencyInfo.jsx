import { useEffect, useState } from "react";

function useCurrencyInfo() {
    const [rates, setRates] = useState({});

    useEffect(() => {
        Promise.all([
            fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json")
                .then((res) => res.json())
                .then((res) => ({ usd: res.usd })),
            
            fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/inr.json")
                .then((res) => res.json())
                .then((res) => ({ inr: res.inr }))
        ])
        .then(([usdData, inrData]) => {
            setRates({ ...usdData, ...inrData });
        })
        .catch((err) => console.error("Error fetching currency data:", err));
    }, []);

    return rates;
}

export default useCurrencyInfo;
