import { Component } from "react";
import TicTacToeCell from "./TicTacToeCell";
import  "./style.css";
export default class TicTacToeGrid extends Component{
    constructor(props){
        super(props)
        this.state = {
            turn : 0,
            winner : null,
            gameOver : 0,
            myArr : Array(9).fill(null),

        }
    }


    gameCompleteLogic = (myArr) => {
        let winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
        for(let i=0;i<winningConditions.length;i++){
            const [a,b,c] = winningConditions[i]
            
            if(myArr[a]!== null && myArr[b] === myArr[a] && myArr[c] === myArr[a]){
                this.setState({
                    gameOver : 1,
                    winner : this.state.turn,
                })
                
                return 
            }else if(myArr.find(element => element === null) === undefined){
                console.log(winningConditions[i]);
                this.setState({
                    gameOver:1
                })
            }
        }
        return 
    }

    changeCellVal = (idx) => {
        let myArr = this.state.myArr.slice()
        
        if(this.state.gameOver===0){
            myArr[idx] = this.state.turn?"O":"X"
            // console.log(myArr);
            this.setState({
                myArr : myArr,
                turn : 1 - this.state.turn,
            })
            this.gameCompleteLogic(myArr)
        }
        return
    }
    // printStates = () => {
    //     console.log(this.state)
    // }
    

    getGrid = () => {
        let gridElements = []
        for(let i =0; i<3; i++){
            let gridRowElements = []
            for(let j = 0;j<3; j++){
                gridRowElements.push(
                    <TicTacToeCell 
                    turn={this.state.turn} 
                    changeCellVal={() => this.changeCellVal(3*j + i)}
                    gameOver={this.state.gameOver}
                    />
                )
            }
            gridElements.push(
                <div className="row" >
                    {[...gridRowElements]}
                </div>
            )
        }
        return [...gridElements]
    }

    getWinner = () => {
        if(this.state.gameOver === 0) {
            return " "
        }else if(this.state.gameOver === 1 && this.state.winner === null){
            return "It's a Tie"
        }else if(this.state.gameOver === 1 && this.state.winner !== null){
            return this.state.winner===0?"Player 1 wins":"Player 2 wins"
        }

    }

    render(){
        return(
            <div>
                <h1 id="result"> {this.getWinner()} </h1>
                <div className="mycl" id="grid">
                    {this.getGrid()}
                </div>
                {/* <button onClick={this.printStates}>test</button> */}
            </div>
            
        )
    }
}