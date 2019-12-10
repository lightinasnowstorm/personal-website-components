import React from 'react'
import JA from './JA'
import EN from './EN'

const FancyMultiLang = (props) => {

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
                        text-align:center;
                        white-space: nowrap;
                        position:relative;
                    }
                    .inner{
                        position: absolute;
                        text-align:center;
                        right:0;
                        left:-1vh;
                        margin-left: auto;
                        margin-right: auto;
                    }
                    .primary{
                        top:3vh;
                    }
                    .secondary{
                        top:1.5vh;
                        filter: brightness(80%);
                    }
                `}
            </style>
        </div>)
}


export default FancyMultiLang