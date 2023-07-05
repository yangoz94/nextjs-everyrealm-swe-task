import React, { useEffect, useState } from "react";

export function useToast( isOpen: boolean, duration: number, onClose: (() => void) | undefined) {
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

  return { isToastVisible, handleClose };
}
