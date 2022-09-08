import { connect } from "react-redux";
import Navbar from "./navbar";

const mapStateToProps = state =>{

    return{
        currentUser:state.session
    }
}

export default connect(
    mapStateToProps
)(Navbar)