import create from "zustand";

export type ImageType = {
  src: string;
  alt: string;
};

export type AppState = {
  image: ImageType | null;
  setImage: (image: ImageType) => void;
  reviewed: boolean;
  setReviewed: (reviewing: boolean) => void;
  uploadProgress: number;
  setUploadProgress: (uploadProgress: number) => void;
  uploading: boolean;
  setUploading: (uploading: boolean) => void;
  uploaded: boolean;
  setUploaded: (uploading: boolean) => void;
};

export const useAppState = create<AppState>((set) => {
  return {
    image: { src: "/assets/images/placeholder.png", alt: "Placeholder" },
    setImage(image: ImageType) {
      set({ image });
    },
    reviewed: false,
    setReviewed(reviewed: boolean) {
      set({ reviewed });
    },
    uploadProgress: 0,
    setUploadProgress(uploadProgress: number) {
      set({ uploadProgress });
    },
    uploading: false,
    setUploading(uploading: boolean) {
      set({ uploading });
    },
    uploaded: false,
    setUploaded(uploaded: boolean) {
      set({ uploaded });
    },
  };
});
