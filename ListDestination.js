import { connect } from "react-redux";
function ListDestination(props){
let destinationList = props.destionations.map((destination,i) =>{
    <li key={i}>{destination.content}</li>
})
return(
    <>
    <h2>list component</h2>
    <ul>{destinationList}</ul></>
)
}
const mapst=(state)=>{
    console.log(state);
    return{
        destinations:state.destinations
    }
    
}
export default conect(mapst)(ListDestination);