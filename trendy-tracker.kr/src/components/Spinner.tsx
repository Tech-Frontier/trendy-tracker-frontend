export function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      style={{
        margin: 'auto',
        background: 'rgba(255, 255, 255, 0)',
        display: 'block',
        shapeRendering: 'auto',
      }}
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#49a078"
        strokeWidth="10"
        r="35"
        strokeDasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
}
