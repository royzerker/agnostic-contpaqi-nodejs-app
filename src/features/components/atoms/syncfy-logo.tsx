export function SyncfyLogo({ className }: { className?: string }) {
    return (
      <div className={className}>
        <svg viewBox="0 0 200 50" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="15" width="10" height="20" fill="#ff00ff" rx="2" />
          <rect x="25" y="15" width="10" height="20" fill="#00ffff" rx="2" />
          <rect x="40" y="15" width="10" height="20" fill="#ffff00" rx="2" />
          <text x="60" y="30" fontSize="18" fill="#333" fontFamily="Arial, sans-serif" fontWeight="bold">
            Syncfy
          </text>
        </svg>
      </div>
    )
  }
  