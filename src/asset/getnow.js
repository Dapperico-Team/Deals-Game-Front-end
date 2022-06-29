const pol = ({ theme }) => {
  return (
    <svg
      width="698"
      height="617"
      viewBox="0 0 698 617"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M443.669 0.769946C462.254 -1.17984 480.605 6.15657 492.724 20.3807L684.086 244.993C697.727 261.004 701.379 283.254 693.571 302.785L594.694 550.114C586.886 569.646 568.903 583.246 547.983 585.441L254.517 616.23C235.933 618.18 217.581 610.843 205.463 596.619L14.1004 372.007C0.459007 355.996 -3.19243 333.746 4.61589 314.214L103.492 66.8859C111.3 47.3541 129.284 33.7536 150.204 31.5588L443.669 0.769946Z"
        fill="url(#paint0_linear_180_12052)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_180_12052"
          x1="470.621"
          y1="4.5101"
          x2="227.565"
          y2="612.49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={theme === "light" ? " #FFE68D" : "#D410CC"} />
          <stop
            offset="1"
            stopColor={theme === "light" ? "#D9A913" : "#1D0E34"}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default pol;
