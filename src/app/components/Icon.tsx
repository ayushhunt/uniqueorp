export default function Icon() {
    return (
      <div className="relative w-20 h-20 rounded-full bg-black flex items-center justify-center">
        <div className="relative w-3/4 h-3/4 mt-3">
          {/* Gradient border triangle */}
          <div 
            className="absolute inset-0"
            style={{
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
              background: 'linear-gradient(135deg, #40E0D0, #FFD700)',
            }}
          />
          {/* Inner black triangle */}
          <div 
            className="absolute inset-0.5"
            style={{
              clipPath: 'polygon(50% 100%, 0 0, 100% 0)',
              backgroundColor: 'black',
            }}
          />
          {/* Centered "U" */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white font-bold text-3xl" style={{ transform: 'translateY(-2px)' }}>U</span>
          </div>
        </div>
      </div>
    )
  }