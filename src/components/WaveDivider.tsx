interface WaveDividerProps {
  color?: string;
}

const WaveDivider = ({ color = "#A7D3EB" }: WaveDividerProps) => {
  return (
    <div className="w-full leading-none">
      {/* Top wave - concave bottom */}
      <svg 
        viewBox="0 0 1440 320" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full -mb-[1px]"
        style={{ display: "block", height: "80px" }}
        preserveAspectRatio="none"
      >
        <path 
          fill={color}
          d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,106.7C1120,85,1280,75,1360,69.3L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
      </svg>
      
      {/* Bottom wave - same path rotated 180 degrees */}
      <svg 
        viewBox="0 0 1440 320" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full rotate-180 -mt-[1px]"
        style={{ display: "block", height: "80px" }}
        preserveAspectRatio="none"
      >
        <path 
          fill={color}
          d="M0,96L80,112C160,128,320,160,480,160C640,160,800,128,960,106.7C1120,85,1280,75,1360,69.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
