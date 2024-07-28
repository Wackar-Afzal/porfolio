import { create } from 'zustand'

export const useCursorStore = create((set) => ({
  isHovered: false,
  isMenu: false,
  isScrollToExplore:false,
  isStudio:false,
  setHoverTrue: () => set((state) => ({ isHovered: true })),
  setHoverFalse: () => set((state) => ({ isHovered: false })),
  setMenuHoverTrue: () => set((state) => ({ isMenu: true })),
  setMenuHoverFalse: () => set((state) => ({ isMenu: false })),
  setIsScrollToExploreHoverTrue: () => set((state) => ({ isScrollToExplore: true })),
  setIsScrollToExploreHoverFalse: () => set((state) => ({ isScrollToExplore: false })),
  setIsStudioHoverTrue: () => set((state) => ({ isStudio: true })),
  setIsStudioHoverFalse: () => set((state) => ({ isStudio: false })),
}))