import React from "react"
import {withRouter} from "react-router-dom"
import { getItemss,getItems } from "../../api/index";
import './detailed.css'
@withRouter
class Juzhao extends React.Component{
    // constructor() {
    //     super()
    //     this.state = {
    //       data: []
    //     }
    //   }
    componentDidMount(){
        console.log(this.props.location.state)
        // getItemss().then(res=>{
        //     console.log(res)
        // })
    }
    main(){
        this.props.history.push("/movie/soon")
    }
    render(){
        console.log(this)
        let ooo = this.props.location.state;
        
        return(
            <div>

                <p onClick={this.main.bind(this)} style={{color:"red"}}>返回</p>
                <ul>
                    {this.props.location.state.map(item => {
                        return (
                            <li className = 'juao_li'><img src={item} alt=""/></li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default Juzhao