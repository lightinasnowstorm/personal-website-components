//DESCRIPTION:
// Text animation like the loading for the otherside picnic website.
// (othersidepicnic.com)
// However, it should work with any text given to it
// At any width.
//
// to make it look perfect you might have to fiddle with the time displacement and the scaling.
// remember, less time is faster

//positioning is... a bit of a pain? idk.
//in the original it's centered but I didn't bother.

export default (props) => {

    //width in pixels
    var width = props.width || 800;
    //text shadow colour
    var shColor = props.textShadow || "#35c4f0";
    //size for the font, also controls size of container
    var textSize = props.textSize || 40;
    var time = props.time || 2;
    //takes more time the wider it is
    time *= (width / 800);
    //movement...
    var top = props.top | 0;

    //the text is the children, if it isn't text bad things happen
    var displayText = props.children

    //initial start is at 0s
    var timeDisplacement = 0;
    //less dark magic version - const scaling based on text size
    var scale = textSize / 24 * 3.5;
    var delayFunction = (c) => {
        var curr = timeDisplacement;
        //shorter than normal
        if ("ilj ".includes(c)) {
            timeDisplacement += .01 * scale;
        }
        //these are longer than normal
        else if ("mw　".includes(c)) {
            timeDisplacement += .03 * scale;
        }
        //match japanese characters
        else if (c.match(/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/)) {
            timeDisplacement += .05 * scale;
        }
        //everything else is "normal"
        else {
            timeDisplacement += .02 * scale;
        }
        //but all that above's for the next char, do what i was at the start
        return curr;
    }

    return (<div className="otherside-text">

        {displayText.split("").map((c) => (
            <div key={c + timeDisplacement} className="text-char" style={{ animationDelay: `${delayFunction(c)}s` }}>{c}</div>
        ))}

        <style jsx>
            {`
            .text-char{
                position:absolute;
                animation: move ${time}s linear infinite;
                left:-10%;
            }

            .otherside-text{
                color:white;
                font-size: ${textSize}pt;
                font-family: 'Geo', Sans-serif;
                user-select:none;
                width:${width}px;
                height:${textSize * 1.5}pt;
                left:0%;
                top:${top}%;     
                overflow: hidden;
                position:absolute;
            }

            @keyframes move{
                0% {
                    left: 100%;
                    opacity: 0;
                    text-shadow: 0 0 10px ${shColor};
                    transform:rotate(180deg);
                }
                35%{
                    left:59%;
                    opacity:1;
                    transform:rotate(0);
                    text-shadow:0 0 20px ${shColor}, 0 0 20px ${shColor};
                }
                65%{
                    left:41%;
                    opacity:1;
                    transform:rotate(0);
                    text-shadow:0 0 20px ${shColor}, 0 0 20px ${shColor};
                }

                100% {
                    opacity:0;
                    left: 0;
                    transform:rotate(-180deg);
                    text-shadow: 0 0 10px ${shColor};
                }
                
            }
        `}
        </style>
    </div>)
}
