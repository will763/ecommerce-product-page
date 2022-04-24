import { useSelector } from "react-redux"

interface items {
    title : string
    price : string
    pcr : number
    total : number
  }
  
interface state {
    items : items[]
  }
  

export const useSelectAllItems = () => {
    const items:items[] = useSelector((state:state) => state.items)
    return items;

}