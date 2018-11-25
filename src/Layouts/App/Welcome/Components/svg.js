import React from 'react';

const SvgComponent = props => (
    <svg viewBox="-1 -0.823 644 643.823" width={150} height={150} {...props}>
        <defs>
            <path
                d="M640 640L68.98 144.24v125.55l281.68 243.86v85.3L68.98 354.29V640H0V.18l570.06 494.15V.18H640V640z"
                id="prefix__a"
            />
            <linearGradient id="prefix__b" gradientUnits="userSpaceOnUse" x1={338.18} y1={-496.79} x2={320} y2={640}>
                <stop offset="0%" stopColor="#000000" />
                <stop offset="100%" stopColor="#ad974f" />
            </linearGradient>
        </defs>
        <use xlinkHref="#prefix__a" fill="url(#prefix__b)" />
        <use xlinkHref="#prefix__a" fillOpacity={0} stroke="#000" strokeWidth={1.56} strokeOpacity={0} />
    </svg>
);

export default SvgComponent;
