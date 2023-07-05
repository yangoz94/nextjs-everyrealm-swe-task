import React, { useEffect, useState } from "react";

type ToastProps = {
  type?: "info" | "success" | "warning" | "error";
  duration?: number;
  isOpen: boolean;
  onClose?: () => void;
  className?: string;
};

export default function Toast({
  type = "info",
  duration = 3000,
  isOpen,
  onClose,
  className,
}: ToastProps) {
  const [isToastVisible, setIsToastVisible] = useState(isOpen);

  useEffect(() => {
    setIsToastVisible(isOpen);
    const timer = setTimeout(() => {
      setIsToastVisible(false);
      if (onClose) {
        onClose();
      }
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [isOpen, duration, onClose]);

  const handleClose = () => {
    setIsToastVisible(false);
    if (onClose) {
      onClose();
    }
  };

  const toastConfig = {
    info: {
      color: "bg-blue-200 text-blue-800",
      icon: "ℹ️",
      message: "This is an info message",
    },
    success: {
      color: "bg-green-200 text-green-800",
      icon: "✅",
      message: "This is a success message",
    },
    warning: {
      color: "bg-yellow-200 text-yellow-800",
      icon: "⚠️",
      message: "This is a warning message",
    },
    error: {
      color: "bg-red-800 text-white",
      icon: "❌",
      message: "This is an error message",
    },
  };

  if (!isToastVisible) return null;

  const { color, icon, message } = toastConfig[type];

  return (
    <div
      className={`fixed right-5 top-5 z-50 flex max-w-sm items-center justify-between rounded-lg p-3 shadow-lg ${color} ${className}`}
    >
      <div className="flex items-center gap-2">
        <div className="h-5 w-5">{icon}</div>
        <div className="text-sm">{message}</div>
      </div>
      <button className="p-1" onClick={handleClose}>
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
  );
}
