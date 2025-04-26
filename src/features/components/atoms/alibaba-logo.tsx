export function AlibabaLogo({ className }: { className?: string }) {
    return (
      <div className={className}>
        <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 15 C15 15, 10 20, 10 25 C10 30, 15 35, 20 35 L30 35 C35 35, 40 30, 40 25 C40 20, 35 15, 30 15 Z"
            fill="#ff6a00"
          />
          <path d="M50 15 H190 V35 H50 Z" fill="none" />
          <text x="50" y="30" fontSize="18" fill="#ff6a00" fontFamily="Arial, sans-serif" fontWeight="bold">
            Alibaba Cloud
          </text>
        </svg>
      </div>
    )
  }
  