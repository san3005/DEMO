function Badge(props){
    return (
        <button type="button" className="btn btn-primary">
  {props.title} <span className="badge bg-secondary">4</span>
</button>
    )
}
export default Badge;