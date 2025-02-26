import { useRef } from "react";

export const useUploadFile = (accept: string, onFileSelected: (file: File) => void) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const openFileDialog = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      onFileSelected(event.target.files[0]);
    }
  };

  return {
    inputRef,
    openFileDialog,
    handleFileChange,
    accept,
  };
};
