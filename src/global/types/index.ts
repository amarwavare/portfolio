import { ReactNode } from "react";

export type JOURNEYROADMAP = {
  fromTo: string;
  at: string;
  as?: string;
  description: string[];
  icon?: ReactNode;
  url: string | undefined;
}[];

export type MENUPAGES = {
  route: string;
  label: string;
}