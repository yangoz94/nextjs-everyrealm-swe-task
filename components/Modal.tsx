// html dialog box would also be great but it has low browser support for now
import React, { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  children: ReactNode;
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
      <div className="relative min-h-[150px] min-w-[300px] max-w-lg rounded-lg bg-white p-3 shadow-lg">
        {children}
        <div className="absolute bottom-5 right-5 flex flex-col items-end">
          <button
            className="px-2 text-gray-700 hover:text-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
