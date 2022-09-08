import React from "react";
import { withRouter } from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            where: '',
            near: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value}) 
    }
   
    handleSubmit(e){
        e.preventDefault()
        let where = this.state.where;
        let near = this.state.near;
        this.props.history.push(`/search?where=${where}&near=${near}`)
    }

    render(){
        return(
            <form className="search-bar" onSubmit={this.handleSubmit}>
                <span className="input-label find">Find</span>
                <input className="search-input" type="text" placeholder="Boba, Ramen, Chinese..." onChange={this.update("where")}/>
                <span className="input-label">Near</span>
                <input className="search-input" type="text" placeholder="San Francisco, SF" onChange={this.update("near")}/>
                <button type="submit" className="search-submit"><i className="fas fa-search fa-2x"></i></button>
            </form>
        )
    }
   


}

export default withRouter(Search)