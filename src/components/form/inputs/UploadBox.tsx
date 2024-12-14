import React from 'react';
import { Upload } from 'lucide-react';

interface UploadBoxProps {
  title: string;
  subtitle?: string;
  actionText?: string;
  compact?: boolean;
  fullHeight?: boolean;
  onUpload?: (file: File) => void;
}

export default function UploadBox({
  title,
  subtitle,
  actionText,
  compact = false,
  fullHeight = false,
  onUpload,
}: UploadBoxProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0 && onUpload) {
      onUpload(files[0]);
    }
  };

  return (
    <div
      className={`border-2 border-dashed border-gray-200 rounded-lg text-center ${
        compact ? 'p-4' : 'p-8'
      } ${fullHeight ? 'h-full' : ''}`}
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
    >
      <Upload className={`mx-auto mb-2 text-blue-600 ${compact ? 'w-4 h-4' : 'w-6 h-6'}`} />
      <p className={`text-gray-600 ${compact ? 'text-xs' : 'text-sm'} mb-2`}>{title}</p>
      {subtitle && (
        <p className={`text-gray-400 ${compact ? 'text-xs' : 'text-sm'}`}>{subtitle}</p>
      )}
      {actionText && (
        <button className="text-blue-600 text-sm mt-2">{actionText}</button>
      )}
    </div>
  );
}