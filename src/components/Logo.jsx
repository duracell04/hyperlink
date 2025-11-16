import React from 'react';
import PropTypes from 'prop-types';

const SIZE_MAP = {
  sm: 24,
  md: 32,
  lg: 48,
};

const GRADIENT_START = 'hsl(45, 100%, 71%)';
const GRADIENT_END = 'hsl(25, 100%, 62%)';

const wordmarkGradient = {
  backgroundImage: `linear-gradient(180deg, ${GRADIENT_START}, ${GRADIENT_END})`,
  WebkitBackgroundClip: 'text',
  color: 'transparent',
};

const Logo = ({ className = '', showWordmark = true, size = 'md' }) => {
  const dimension = SIZE_MAP[size] || SIZE_MAP.md;
  const wrapperClass = ['d-inline-flex align-items-center gap-2', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClass}>
      <div style={{ height: dimension, width: dimension }}>
        <svg
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: '100%', width: '100%', transform: 'rotate(45deg)' }}
        >
          <defs>
            <linearGradient
              id="legacy-logo-gradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stopColor={GRADIENT_START} />
              <stop offset="100%" stopColor={GRADIENT_END} />
            </linearGradient>
            <g id="legacy-logo-arm">
              <path
                d="M312 372 V256 H432"
                strokeWidth="44"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke="url(#legacy-logo-gradient)"
                fill="none"
              />
              <circle
                cx="470"
                cy="256"
                r="26"
                strokeWidth="20"
                fill="none"
                stroke="url(#legacy-logo-gradient)"
              />
              <rect
                x="344"
                y="284"
                width="56"
                height="24"
                rx="12"
                fill="url(#legacy-logo-gradient)"
              />
            </g>
          </defs>
          <use href="#legacy-logo-arm" transform="rotate(0 256 256)" />
          <use href="#legacy-logo-arm" transform="rotate(90 256 256)" />
          <use href="#legacy-logo-arm" transform="rotate(180 256 256)" />
          <use href="#legacy-logo-arm" transform="rotate(270 256 256)" />
        </svg>
      </div>
      {showWordmark && (
        <span
          className="fw-bold"
          style={{ fontSize: '1.1rem', letterSpacing: '0.04em' }}
        >
          <span className="text-dark">Hyper</span>
          <span style={wordmarkGradient}>link</span>
        </span>
      )}
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  showWordmark: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
};

Logo.defaultProps = {
  className: '',
  showWordmark: true,
  size: 'md',
};

export default Logo;
