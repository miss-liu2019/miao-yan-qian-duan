import React from "react"
import {withRouter} from "react-router-dom"
@withRouter
class Xq extends React.Component{
    main(){
        console.log(111)
        this.props.history.push("/movie/soon")
    }
    render(){
        return(
            <div>
                <h1 style={{color :'red'}}>看了对身体不好,少年不看为好 </h1>
                <p onClick={this.main.bind(this)}>返回</p>
            </div>
        )
    }
}
export default Xq