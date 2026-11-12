import React from 'react';

export function MayuraInnLogo({
  className = 'w-[120px] h-auto',
  variant = 'white',
}: {
  className?: string;
  variant?: 'white' | 'dark';
}) {
  return (
    <img
      src="/assets/text.png"
      alt="Kodai Mayura Inn Hotels"
      referrerPolicy="no-referrer"
      className={`${className} select-none object-contain ${
        variant === 'white' ? 'brightness-0 invert' : 'brightness-0'
      }`}
    />
  );
}

export function HamburgerIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3.86763 6.93926C9.29115 7.23107 14.7497 6.35346 20.1359 6.78146C21.2915 6.87441 21.2845 5.2035 20.1359 5.11271C14.7497 4.68472 10.7387 5.64014 3.86763 5.27051C2.70962 5.20782 2.71196 6.87657 3.86763 6.93926Z"
        fill="currentColor"
      />
      <path
        d="M20.1324 12.9393C14.7088 13.2311 9.2503 12.3535 3.86414 12.7815C2.70846 12.8744 2.71546 11.2035 3.86414 11.1127C9.2503 10.6847 13.2613 11.6401 20.1324 11.2705C21.2904 11.2078 21.288 12.8766 20.1324 12.9393Z"
        fill="currentColor"
      />
      <path
        d="M20.1324 18.9393C14.7088 19.2311 9.2503 18.3535 3.86414 18.7815C2.70846 18.8744 2.71546 17.2035 3.86414 17.1127C9.2503 16.6847 13.2613 17.6401 20.1324 17.2705C21.2904 17.2078 21.288 18.8766 20.1324 18.9393Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HandDrawnArrowLeft({ className = 'w-5 h-4' }: { className?: string }) {
  return (
    <svg
      height="15.476"
      viewBox="0 0 22.032 15.476"
      width="22.032"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m.465 7.724c3.98 2.52 7.91 5.06 11.89 7.59 1.07.69 2.11-1.02 1.03-1.71-3.28-2.09-6.52-4.18-9.79-6.26 5.82-.07 11.63-.11 17.45-.18 1.28-.03 1.33-2.04.05-2.01-5.58.07-11.14.1-16.72.16 1.54-1.22 3.14-2.35 4.81-3.37 1.08-.64.15-2.48-.92-1.79-2.8 1.76-5.48 3.73-7.94 5.95-.5.44-.39 1.27.14 1.62z"
        fill="currentColor"
      />
    </svg>
  );
}

export function HandDrawnArrowRight({ className = 'w-5 h-4' }: { className?: string }) {
  return (
    <svg
      height="15.476"
      viewBox="0 0 22.032 15.476"
      width="22.032"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="m21.569 7.724c-3.98 2.52-7.91 5.06-11.89 7.59-1.07.69-2.11-1.02-1.03-1.71 3.28-2.09 6.52-4.18 9.79-6.26-5.82-.07-11.63-.11-17.45-.18-1.28-.03-1.33-2.04-.05-2.01 5.58.07 11.14.1 16.72.16-1.54-1.22-3.14-2.35-4.81-3.37-1.08-.64-.15-2.48.92-1.79 2.8 1.76 5.48 3.73 7.94 5.95.5.44.39 1.27-.14 1.62z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PinIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function CalendarIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className={className}
      aria-hidden="true"
    >
      <rect x="3.5" y="5" width="17" height="15" rx="1" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </svg>
  );
}

export function StarOutlineIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
