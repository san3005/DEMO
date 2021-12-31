import react,{Component} from 'react'


class BadgeWithClass extends Component{

    render(){
        return (
            <button type="button" className="btn btn-primary">
      {this.props.title} <span className="badge bg-secondary">4</span>
    </button>
        )
    }
}
export default BadgeWithClass;