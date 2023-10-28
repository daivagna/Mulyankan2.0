
/**
 * <auto-generated>
 *     This code was generated by a tool.
 *
 *     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * </auto-generated>
 */ 

// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { Sitecore } from "./_.Sitecore.Override"
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { ComponentRendering, RouteData, Field, ImageField, FileField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { DefaultComponentProps } from '@/lib/component-props';


export namespace CrossTraining.Base.Fields {
    export type Description = { 
        fields?: { 
            /**
            * Represents the Description field (bcdcf1f2-ac93-41b4-bc96-7f44f97867e4).
            */
            BodyCopy: Field<string>;
 
        }
 }; 
}

export namespace CrossTraining.Base.Fields {
    export type Headline = { 
        fields?: { 
            /**
            * Represents the Heading field (c177f5c1-03e4-4eaa-812e-64818088203f).
            */
            Heading: Field<string>;
 
        }
 }; 
}

export namespace CrossTraining.Base.Fields {
    export type Icon = { 
        fields?: { 
            /**
            * Represents the ClassName field (14535228-46de-4017-849b-12dfc21ea5d1).
            */
            ClassName: Field<string>;

            /**
            * Represents the Link field (69bb00b0-9a4c-4956-af22-e332e0051f8e).
            */
            Link: LinkField;

            /**
            * Represents the Title field (22935af9-ed95-4f2c-bbc9-97566b993f9d).
            */
            Title: Field<string>;
 
        }
 }; 
}


