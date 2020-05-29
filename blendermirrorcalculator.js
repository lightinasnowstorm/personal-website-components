import React from 'react'

class BlenderMirrorCalculator extends React.Component {
    constructor(props) {
        super(props)

        var tmpState = {}
        for (var cat of this.categories) {
            if (cat != "-br-")
                tmpState[cat] = {
                    "mirror": "",
                    "input": "",
                    "output": ""
                }
        }
        this.state = tmpState

    }

    categories = ["head x", " head y", "head z", "-br-", "tail x", "tail y", "tail z", "-br-", "roll"]

    state = {

    }

    onAnyValueChange = (event) => {


        const trimID = (id, t) => id.substring(t.length)

        const recalcOutput = (mirror, input) => {
            return 2 * mirror - input;
        }

        if (event.target.classList.contains("mirroring-point")) {
            var category = trimID(event.target.id, "mirror ")
            var toMirror = event.target.value
            this.setState((state) => {
                var inputVal = state[category].input
                var mirrorVal = toMirror

                state[category].mirror = mirrorVal
                state[category].output = recalcOutput(mirrorVal, inputVal)
                return state;
            })
        }
        else if (event.target.classList.contains("input-point")) {
            var category = trimID(event.target.id, "input ")
            var toInput = event.target.value
            this.setState((state) => {
                var inputVal = toInput
                var mirrorVal = state[category].mirror

                state[category].input = inputVal
                state[category].output = recalcOutput(mirrorVal, inputVal)
                return state;
            })
        }


    }



    onOutputClick = (event) => {
        navigator.clipboard.writeText(event.target.textContent)
    }

    render = () => {


        return <div className="outer">
            <div className="label"></div>
            <div className="col-val mirroring-point header">Mirroring Point</div>
            <div className="col-val input-point header">Input Point</div>
            <div className="col-val output header">Output</div>
            {this.categories.map((val => {
                if (val == "-br-") return <div className="spacer" />
                else return (<>
                    <p className="label">{val}</p>
                    <input type="text" className="col-val mirroring-point" id={`mirror ${val}`} onChange={this.onAnyValueChange} />
                    <input type="text" className="col-val input-point" id={`input ${val}`} onChange={this.onAnyValueChange} />
                    <p className="col-val output fakebox" disabled={true} id={`out ${val}`} onClick={this.onOutputClick}>{this.state[val].output}</p>

                </>)
            }))}
            <style jsx>
                {`
                .outer{
                    display:grid;
                    width:500px;
                }

                .header{
                    text-align:center;
                }

                .col-val{
                    width:100px;
                    margin: 5px 5px;
                    text-align:center;
                }

                p{
                    margin:0;
                }

                .label{
                    grid-column:1;
                    text-align:center;
                }
                .mirroring-point{
                    grid-column:2;
                }
                .input-point{
                    grid-column:3;
                }
                .output{
                    grid-column:4;
                    
                }
                .fakebox{
                    border: 1px solid #cccccc;
                    background-color: #f0f0f0;
                    font-size:10pt;
                    font-size:10pt;
                }

                .spacer{
                    grid-column-start:1;
                    grid-column-end:3;
                    height:20px;
                }
            `}
            </style>
        </div>
    }
}

export default BlenderMirrorCalculator