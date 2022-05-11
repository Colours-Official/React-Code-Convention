import { useState, useEffect } from "react";

const useListState = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const init = () => {
      setList([
        {
          title:"test1",
          size:"large", 
          color:"blue",
          fullWidth:true
        },
        {
          title:"test2",
          size:"small", 
          color:"pink",
          fullWidth:true
        },
        {
          title:"test3",
          size:"small", 
          color:"blue",
          fullWidth:true
        },
        {
          title:"test4",
          size:"medium", 
          color:"grey",
          fullWidth:true
        }
      ]);
    };
    
    if(list.length == 0)
      init();

  },[]);

  return list;
};

export default useListState;