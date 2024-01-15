export enum SelectedPage {
    Home='home',
    OurClasses='ourClasses',
    Benefits="benefits",
    ContactUs="contactUs",

}

export interface BenefitType{
    icon:JSX.Element,
    title:string,
    description:string
}

export interface ClassType{
name:string,
description?:string,
image:string
}