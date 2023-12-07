interface LogoProps {
    width?: number;
    height?: number;
}

export const Logo: React.FC<LogoProps> = ({ width = 70, height = 70 }) => {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 528.65 316.48">
    <defs>
        <style>
            {`.cls-1{fill:url(#Degradado_sin_nombre_90);}.cls-2{fill:url(#Degradado_sin_nombre_90-2);}.cls-3{fill:url(#Degradado_sin_nombre_90-3);}.cls-4{fill:url(#Degradado_sin_nombre_90-4);}`}
        </style>
        <linearGradient id="Degradado_sin_nombre_90" x1="-103.54" y1="387.45" x2="617.13" y2="-119.33" gradientUnits="userSpaceOnUse">
            <stop offset="0.36" stopColor="#01a8d4"/>
            <stop offset="0.59" stopColor="#5fb130"/>
        </linearGradient>
        <linearGradient id="Degradado_sin_nombre_90-2" x1="-116.19" y1="369.47" x2="604.48" y2="-137.32" xlinkHref="#Degradado_sin_nombre_90"/>
        <linearGradient id="Degradado_sin_nombre_90-3" x1="-144.99" y1="328.51" x2="575.68" y2="-178.27" xlinkHref="#Degradado_sin_nombre_90"/>
        <linearGradient id="Degradado_sin_nombre_90-4" x1="-46.94" y1="467.95" x2="673.73" y2="-38.84" xlinkHref="#Degradado_sin_nombre_90"/>
    </defs>
    <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
            <path className="cls-1" d="M124.46,0V23.13H279.73s22.52-.61,22.52,24.28,2.37,43.86-22.52,43.86h-64V115h94.82c17.23,0,45,34.37,45,59.26v29.63c0,19.48-26.07,46.23-46.22,54.53-40.3,16.59-83,30.82-179-4.74-3.51-1.31,54.53,62.82,125.65,62.82,107.86,0,145.79-56.9,145.79-115,0-48.6-33.19-109-90.08-109-8.3,0,27.26,4.76,27.26-43.85,0-9.48-1.19-47.41-27.26-47.41C259.57,1.19,124.46,0,124.46,0Z"/>
            <path className="cls-2" d="M186.09,36.74h19c2.37,0,2.37,2.38,2.37,5.93V169.5s0,15.41,16.59,15.41h56.9c8.3,0,10.67-8.3,10.67-8.3v23.71c0,4.19-13,11.85-14.23,11.85H202.69s-19-2.37-19-14.22V42.67C183.72,39.12,184.77,36.74,186.09,36.74Z"/>
            <polygon className="cls-3" points="116.16 46.49 116.16 96.8 64.99 147.97 116.16 179.77 116.16 243.25 0 148.16 116.16 46.49"/>
            <polygon className="cls-4" points="412.49 46.49 412.49 96.8 463.65 147.97 412.49 179.77 412.49 243.25 528.65 148.16 412.49 46.49"/>
        </g>
    </g>
    </svg>
  )
}
