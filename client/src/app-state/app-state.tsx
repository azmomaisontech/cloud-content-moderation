import create from "zustand";

export type ImageType = {
  src: string;
  alt: string;
}

export type AppState = {
  image: ImageType | null,
  setImage: (image: ImageType) => void;
}

export const useAppState = create<AppState>((set => {
  return {
    image: null,
    setImage(image: ImageType) {
      set({image})
    }
  }
}))
