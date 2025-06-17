   declare module 'simplebar-react' {
     import { ComponentType } from 'react';

     interface SimpleBarProps {
       style?: React.CSSProperties;
       className?: string;
       children?: React.ReactNode;
     }

     const SimpleBar: ComponentType<SimpleBarProps>;
     export default SimpleBar;
   }
   