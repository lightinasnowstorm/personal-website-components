import React from 'react'
import JL from './jl'
import Comment from './comment'

class Test extends React.Component {

    allLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    currText = ""
    state = {
        cyclePeriod: "NyuuRyoku",//NyuuRyoku, SeikaiHyouji
        currLetter: this.allLetters[Math.floor(Math.random() * this.allLetters.length)]
    }
    onTextboxChange = (event) => {
        this.currText = event.target.value;
    }
    onClickButton = () => {
        this.setState((prevState) => {
            var newCycle = ""
            if (prevState.cyclePeriod == "NyuuRyoku") newCycle = "SeikaiHyouji"
            if (prevState.cyclePeriod == "SeikaiHyouji") newCycle = "NyuuRyoku"
            var letter = ""
            //New letter if new cycle
            if (newCycle == "NyuuRyoku") letter = this.allLetters[Math.floor(Math.random() * this.allLetters.length)]
            if (newCycle == "SeikaiHyouji") letter = prevState.currLetter
            return {
                cyclePeriod: newCycle,
                currLetter: letter
            }
        })
    }
    render = () => {
        console.log("rendering")
        const cyclePeriod = this.state.cyclePeriod
        var currLetter = this.state.currLetter
        var displayCorrect = cyclePeriod == "SeikaiHyouji"
        var buttonText = ""
        if (cyclePeriod == "NyuuRyoku") buttonText = "Submit"
        if (cyclePeriod == "SeikaiHyouji") buttonText = "Next >"
        var correct = this.currText == currLetter;

        return (<div className="outside">
            <div className="letter inner">
                <JL>{currLetter}</JL>
            </div>
            <div className="inner">
                <input type="text" maxLength="1" className="letterInput" onChange={this.onTextboxChange} disabled={displayCorrect} />
            </div>
            <div className="inner">
                <input type="submit" value={buttonText} className="mainButton" onClick={this.onClickButton} />
            </div>
            <div className="showResult">
                <JL>{correct ? "Correct" : "Incorrect: "}</JL>{correct?"":currLetter}
            </div>
            <style jsx>
                {`
                    .outside{
                        display: flex;
                        justify-content:center;
                        align-items:center;
                        height:40vh;
                        width:40vh;
                        box-shadow: 0 0 5px gray;
                        padding:5px;
                        flex-direction:column;
                    }
                    .inner{
                        margin:5%;
                    }
                    .letter{
                        font-size:60pt;
                        margin:5%;
                    }
                    .letterInput{
                        width:40pt;
                        font-size:30pt;
                        text-align:center;
                    }
                    .mainButton{
                        font-size:20pt;
                        margin:0;
                    }
                    .showResult{
                        display:${displayCorrect ? "inline" : "none"};
                        color: ${correct ? "limegreen" : "red"};
                        border-radius:5px;
                        border:2px solid ${correct ? "limegreen" : "red"};
                        padding:3px 7px;
                        font-size:20pt;
                }
                        `}
            </style>
        </div>)
    }
}
export default Test