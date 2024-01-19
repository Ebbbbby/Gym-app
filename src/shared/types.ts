export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclases",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon:JSX.Element;
  title:string;
  description:string;
}
export interface ClassType {
  image:string;
  name:string;
  description?:string;
}
