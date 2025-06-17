'use client';
import { atom, useAtomValue, useSetAtom } from 'jotai';
import { useLanguage } from '../context/LanguageContext';

export type DrawerPlacements = 'left' | 'right' | 'top' | 'bottom';

type DrawerTypes = {
  view: React.ReactNode;
  isOpen: boolean;
  placement?: DrawerPlacements;
};

const drawerAtom = atom<DrawerTypes>({
  isOpen: false,
  view: null,
  placement: 'right',
});

export function useDrawer() {
  const state = useAtomValue(drawerAtom);
  const setState = useSetAtom(drawerAtom);
  const { lang } = useLanguage();

  const openDrawer = ({
    view,
  }: {
    view: React.ReactNode;
    placement: DrawerPlacements;
  }) => {
    setState({
      ...state,
      isOpen: true,
      view,
      placement: lang === 'ar' ? 'right' : 'left',
    });
  };

  const closeDrawer = () => {
    setState({
      ...state,
      isOpen: false,
    });
  };

  return {
    ...state,
    openDrawer,
    closeDrawer,
  };
}