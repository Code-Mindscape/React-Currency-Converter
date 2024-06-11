const { useEffect } = require("react");
const { useState } = require("react");



function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(()=>{
        fetch(`https://cdn.hsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
       .then(res=>res.json())
       .then(res => setData(res[currency]))
       console.log(data)
    },[])
    return data;
}

export default useCurrencyInfo;