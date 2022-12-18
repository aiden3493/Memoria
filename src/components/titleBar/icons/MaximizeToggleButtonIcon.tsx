interface MaximizeToggleButtonIconProps {
  isMaximized: boolean;
}

const MaximizeToggleButtonIcon: React.FC<MaximizeToggleButtonIconProps> = ({
  isMaximized,
}) => {
  if (isMaximized) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M15 19v-2a2 2 0 0 1 2 -2h2" />
        <path d="M15 5v2a2 2 0 0 0 2 2h2" />
        <path d="M5 15h2a2 2 0 0 1 2 2v2" />
        <path d="M5 9h2a2 2 0 0 0 2 -2v-2" />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="27"
        height="27"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
        <path d="M4 16v2a2 2 0 0 0 2 2h2" />
        <path d="M16 4h2a2 2 0 0 1 2 2v2" />
        <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
      </svg>
    );
  }
};

export default MaximizeToggleButtonIcon;
