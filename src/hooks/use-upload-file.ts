import { useRef, useState } from "react";

type FilePreview = {
  file: File;
  previewUrl: string | null;
  type: "image" | "video" | "other";
};

export const useUploadFile = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FilePreview[]>([]);

  const openFileDialog = () => {
    inputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const newFiles = Array.from(event.target.files).map((file): FilePreview => ({
        file,
        previewUrl: file.type.startsWith("image/") || file.type.startsWith("video/") ? URL.createObjectURL(file) : null,
        type: file.type.startsWith("image/")
          ? "image"
          : file.type.startsWith("video/")
          ? "video"
          : "other",
      }));

      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  return {
    inputRef,
    openFileDialog,
    handleFileChange,
    files, // List of files with their preview and type
    setFiles
  };
};
