import React from 'react'
import SidebarElement from './SidebarElement'
import JA from '../Text/JA.js'
import EN from '../Text/EN.js'

class Sidebar extends React.Component {
    state = {
        displayed: false
    };

    delayFunction = (n, maxN, squishFactor, diffFactor) => {
        var squishN = n / squishFactor;
        var squishReverseN = (maxN - n) / squishFactor;
        var delayStage = diffFactor * Math.sin((Math.PI / 7) * (squishReverseN + Math.log(squishReverseN) + .001 * Math.exp(squishReverseN / 3.77)))
        return (delayStage * .2 + .01 * squishN).toFixed(10) + "s";
    }

    getImage = (n) => {
        return `url('/static/img/baseimg.png') 0 -${n}px`
    }

    render = () => {
        var imageHeightPx = 1650;
        var imageWidthPx = 308;
        var numInnerDivs = imageHeightPx
        var innerDivs = [...Array(numInnerDivs).keys()];

        return (
            <div className={"sidebar-container"}>
                {innerDivs.map((n) => (
                    <div className={`ripple-effect`} style={{ animationDelay: this.delayFunction(n, imageHeightPx, 32, .4), background: this.getImage(n) }} key={n}></div>
                ))}
                <div className={"sidebar"}>
                    <div /><div />
                    <SidebarElement color="orange" sColor="#b8deff" href="/">
                        <EN>Hello</EN>
                        <JA>こんにちは</JA>
                    </SidebarElement>
                    <SidebarElement color="cyan" sColor="#ffafb2" href="/about-me">
                        <EN>About Me</EN>
                        <JA>私について</JA>
                    </SidebarElement>
                    <SidebarElement color="fuchsia" href="#">
                        <EN>Cosplay</EN>
                        <JA>コスプレ</JA>
                    </SidebarElement>
                    <SidebarElement color="#d081ff" href="/translations">
                        <EN>Translation</EN>
                        <JA>翻訳</JA>
                    </SidebarElement>
                    <SidebarElement color="yellow" sColor="#9886d9" href="#">
                        <EN>Programs</EN>
                        <JA>プログラム</JA>
                    </SidebarElement>
                    <SidebarElement color="aquamarine" sColor="#ffb7eb" href="#">
                        <EN>About Site</EN>
                        <JA>サイトについて</JA>
                    </SidebarElement>
                    <div /><div /><div />
                </div>
                <style jsx>
                    {`
                    .sidebar-container
                    {
                        position:relative;
                        width:${100 / imageHeightPx * imageWidthPx}vh;
                        background-image:url("/static/img/transparencyimg.png");
                        background-size:cover;
                        background-repeat: no-repeat;
                        top:0;
                        height:100%;
                        z-index:1;
                    }
                    .ripple-effect
                    {
                        position:relative;
                        display:none;
                        background-color:#000000A0;
                        height:1px;
                        width:${100 / imageHeightPx * imageWidthPx}vh;
                        background-repeat: no-repeat !important;
                        background-size:cover !important;
                        background-scroll:scroll;

                    }
                    @keyframes ripple {
                        from{left:-150%;}
                        to{left:0;}
                    }
                    :hover .ripple-effect
                    {
                        position:relative;
                        display: inherit;
                        animation-name:ripple;
                        animation-duration:.7s;
                        animation-fill-mode: both;
                    }

                    :hover .sidebar
                    {
                        display:flex;
                        flex-direction:column;
                        animation-name:ripple;
                        animation-duration:.7s;
                        animation-fill-mode:both;
                    }

                    .sidebar
                    {
                        display:none;
                        width:${100 / imageHeightPx * imageWidthPx}vh;
                        height:100%;
                        left:0;
                        top:0;
                        position:absolute;
                        text-align:center;
                        justify-content:space-between;
                        align-items:center;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Sidebar
