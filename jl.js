export default ({ children }) => (
    <span>
        {children}
        <style jsx>
            {`
            @font-face{
                @font-family: juliamo-print;
                src:url("https://dl.dropboxusercontent.com/s/5me44aeb19mxm6e/juliamo.woff");
            }
            span{
                font-family: juliamo-print;
            }
            `}
        </style>
    </span>)