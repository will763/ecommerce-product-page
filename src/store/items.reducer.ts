interface items {
    title : string
    price : string
    pcr : number
    total : number
}

export default function(state :items[] = [],action: any) {
     switch(action.type) {
         case "ADD" :
 
             const data =[{
                title : "Fall Limited Edition Sneakers",
                price : "$125.00 x ",
                pcr :   action.payload,
                total : 125.00 * action.payload
             }]

             const oldstate = state;
             const newState = data.concat(oldstate);

         
             return newState ;

         case "REMOVE" : 

          return state.filter((value,index)=>{
              return index ^ action.payload
          })       

        default:
            return state
     }
}