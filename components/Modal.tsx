import React, { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  children: ReactNode; // I normally prefer to use props like title, description etc but this is more flexible for the task
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export default function Modal({
  children,
  isOpen,
  onClose,
  className,
}: ModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.target === overlayRef.current) {
        onClose();
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  // I prefer this over conditional rendering in the return statement for readability
  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ${className}`}
    >
      <div className="max-w-lg rounded-lg bg-white p-3 shadow-lg">
        <div className="flex flex-col items-end">
          <button
            className="px-2 text-gray-400 hover:text-gray-600"
            onClick={onClose}
          >
            {/* X icon to close */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
