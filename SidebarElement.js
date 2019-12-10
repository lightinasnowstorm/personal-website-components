import FancyMultiLang from '../Text/FancyMultiLang'
import Link from 'next/link'


export default (props) => {
    var color = props.color || "white"
    var sColor = props.sColor || "white"
    var noChildren = props.children == null
    return (


        <Link href={props.href}>

            <a>
                <div>
                    {
                        noChildren ? "" :
                            <FancyMultiLang color={color}>
                                {props.children}
                            </FancyMultiLang>

                    }
                </div>

                <style jsx>
                    {`
                a{
                    border:3px solid ${color};
                    box-shadow: 0 0 0 2px silver;
                    width:10vh;
                    height:10vh;
                    border-radius:38%;
                    background: #000000A0;
                    background: url("/static/img/mask.png");
                    text-decoration:none;
                    color:${color};
                    text-align:center;
                    font-weight: bold;
                    font-size:2.5vh;
                    text-shadow: 0 0 3px ${sColor},0 0 3px ${sColor},0 0 2px ${sColor},0 0 2px ${sColor};
                }

                div{
                    position:static;
                    top:-20px;
                    user-select:none;
                }

                a:hover{
                    box-shadow:0 0 20px 10px ${color};
                    
                }
            `}
                </style>
            </a>

        </Link >

    )
}
