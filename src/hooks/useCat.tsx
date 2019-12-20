import { useState, useEffect } from "react";

const useCat = () => {
  const [loading, setLoading] = useState(false);
  const [innerID, setInnerID] = useState();
  const [catID, setcatID] = useState();
  const [catPic, setcatPic] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://api.thecatapi.com/v1/images/search", {
      headers: new Headers({
        "Content-Type": "application/json",
        "x-api-key": "1ba1a3a7-485f-4ec5-95d7-a436ceecde2a"
      })
    })
      .then(response => response.json())
      .then(result => {
        setcatID(result[0].id);
        setcatPic(result[0].url);
        setLoading(false);
      });
  }, [innerID]);

  const switchCat = () => {
    const innerID = Math.round(Math.random() * 10000);
    setInnerID(innerID);
  };

  return { catID, catPic, switchCat, loading };
};

export default useCat;
