import { Component } from "react";

export default class TicTacToeCell extends Component{
    constructor(props){
        super(props)
        this.state = {
            clicked : -1,
        }
    }

    changedClick = () => {
        if(this.props.gameOver===0){
            if(this.state.clicked === -1){
                this.setState({
                    clicked : this.props.turn,
                })
                this.props.changeCellVal();
            }
        }
    }
    
    getCellContents = () => {
        if(this.state.clicked === -1) {
            return <span> </span>
        }else if(this.state.clicked === 0){
            return <span>X</span>
        }else if(this.state.clicked === 1) {
            return <span>O</span>
        }
    }

    

    render(){
        return(
            <div className="col" onClick={this.changedClick}>{this.getCellContents()}</div>
        )
    }
}