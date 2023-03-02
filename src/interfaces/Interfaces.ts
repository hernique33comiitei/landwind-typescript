import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  classPersonalization?: string;
}

export interface ButtonBlueProps {
  text: string;
  classPersonalization?: string;
}

export interface ButtonOpenProjectOtherProps {
  imageLink: string;
  text: string;
}

export interface GraphicsProps {
  title: string;
  textGenericOne: string;
  textGenericTwo: string;
  rowOrRowReverse: string;
  tasksArray: string[];
  image: string;
}

export interface ItensCheckedProps {
  arrayTask: string[];
}

export interface TextArrowLinkProps {
  text: string;
}

export interface TrustedIconProps {
  icon: ReactNode;
  textMain: string;
  textGeneric: string;
}
