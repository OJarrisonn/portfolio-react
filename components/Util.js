export function Separator({ size, orientation }) {
    return <div style={orientation === 'horizontal' ? {marginTop: size + "em"} : {marginLeft: size + "em"}}></div>
}