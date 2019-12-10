import React from 'react'
import JA from './JA'
import EN from './EN'

const SimpleMultiLang = (props) => {

    var ja;
    var en;
    React.Children.forEach(props.children, (child) => {
        if (child.type === JA) {
            ja = child;
        }
        if (child.type === EN) {
            en = child;
        }
    })

    var color = props.color || "white";

    return (
        <div className="outer">
            <div className="secondary inner">
                {ja}
            </div>
            <div className="primary inner">
                {en}
            </div>
            <style jsx>
                {`
                    .outer{
                        white-space: nowrap;
                        position:relative;
                        color:${color};
                        
                    }
                    .inner{
                        position: absolute;
                        right:0;
                        left:1vh;
                        text-shadow: 0 0 3px white;
                    }
                    .primary{
                        top:8pt;
                    }
                    .secondary{
                        top:0;
                        filter: brightness(60%);
                    }
                `}
            </style>
        </div>)
}


export default SimpleMultiLang