import React from "react"
import {withRouter} from "react-router-dom"
@withRouter
class Buy extends React.Component{
    main(){
        console.log(111)
        this.props.history.push("/movie/soon")
    }
    render(){
        return(
            <div>
                <p onClick={this.main.bind(this)}>返回</p>
            </div>
        )
    }
}
export default Buy