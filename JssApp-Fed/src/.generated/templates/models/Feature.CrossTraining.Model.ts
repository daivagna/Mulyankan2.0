
/**
 * <auto-generated>
 *     This code was generated by a tool.
 *
 *     Changes to this file may cause incorrect behavior and will be lost if the code is regenerated.
 * </auto-generated>
 */ 

// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { Sitecore } from "./_.Sitecore.Override"
import { CrossTraining } from "./Foundation.CrossTraining.model"
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { ComponentRendering, RouteData, Field, ImageField, FileField, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';
// @ts-ignore Prevent noUnusedLocals from triggering an error, we import all core field types to minimize changing to code generation.
import { DefaultComponentProps } from '@/lib/component-props';


export namespace CrossTraining.Banner.Fields {
    export type Banner = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.Description & 
            CrossTraining.Base.Fields.HeadlineTag & { 
        fields?: { 
            /**
            * Represents the Background Color field (eaccab0a-4a50-44cf-8b9d-d9758ecefaea).
            */
            BackgroundColor: Field<string>;

            /**
            * Represents the Banner Image field (bcefbad7-0013-4e00-ae9f-e14beba2ff61).
            */
            Image: ImageField;

            /**
            * Represents the Primary CTA field (05e303df-1d7d-46ab-8ee2-98e4d74e438e).
            */
            PrimaryCTA: LinkField;

            /**
            * Represents the Primary CTA Text field (823a5f43-883d-4a3a-b3c1-97c3bd110461).
            */
            PrimaryCTAText: Field<string>;

            /**
            * Represents the Secondary CTA field (9b9a2fa5-59fb-48f5-addc-cd87cf477170).
            */
            SecondaryCTA: LinkField;

            /**
            * Represents the Secondary CTA Text field (53cfdc9d-c393-4026-bb93-0ce951980f74).
            */
            SecondaryCTAText: Field<string>;
 
        }
 }; 
}

export namespace CrossTraining.CardGrid.Fields {
    export type Card = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.Description & 
            CrossTraining.Base.Fields.HeadlineTag & { 
        fields?: { 
            /**
            * Represents the Card Image field (fa5330b6-1854-4649-8ffc-d3f2b27c4c8a).
            */
            CardImage: ImageField;
 
        }
 }; 
}

export namespace CrossTraining.CardGrid.Fields {
    export type CardGrid = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.Description & 
            CrossTraining.Base.Fields.HeadlineTag & { 
        fields?: { 
            /**
            * Represents the Cards field (f7872135-6bbd-4f08-a57e-0834be2627b0).
            */
            Cards: Sitecore.Override.ItemEx[];
 
        }
 }; 
}

export namespace CrossTraining.CardGrid.Fields {
    export type CardsFolder = { 
        fields?: {  
        }
 }; 
}

export namespace CrossTraining.ContentBlock.Fields {
    export type ContentBlock = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.Description & 
            CrossTraining.Base.Fields.HeadlineTag & { 
        fields?: {  
        }
 }; 
}

export namespace CrossTraining.Navigation.Footer.Fields {
    export type Footer = { 
        fields?: { 
            /**
            * Represents the Copyright Text field (5f66a9b7-51cc-4b46-b3f7-4ed5a06c38d1).
            */
            CopyRightText: Field<string>;

            /**
            * Represents the Footer Description field (af77708e-8ee0-446e-b1d9-8e3c6b99ac25).
            */
            Description: Field<string>;

            /**
            * Represents the Privacy Policy Link field (b4d733a3-54e3-4f9c-8934-41a142079b41).
            */
            PrivarcyPolicyLink: LinkField;

            /**
            * Represents the Privacy Policy Title field (73aa3ab2-502a-44ea-a650-930c5adbf525).
            */
            PrivarcyPolicyTitle: Field<string>;

            /**
            * Represents the Social Icon field (42083723-db92-49e7-8a9b-163331515b21).
            */
            SocialIcon: Sitecore.Override.ItemEx[];

            /**
            * Represents the Terms and Conditions Link field (31585ef3-d311-4f70-bbc6-11985049b41a).
            */
            TermsAndConditionLink: LinkField;

            /**
            * Represents the Terms and Conditions Title field (6fc007ad-c85d-4422-80b1-9c14fd1c99e3).
            */
            TermsAndConditionTitle: Field<string>;
 
        }
 }; 
}

export namespace CrossTraining.Navigation.Header.Fields {
    export type Header = { 
        fields?: { 
            /**
            * Represents the Logo field (73ce6680-4193-457b-9a90-d12684227e70).
            */
            Logo: ImageField;

            /**
            * Represents the Logo Link field (681d74f7-8585-475f-93ab-9d57dbf26098).
            */
            LogoLink: LinkField;

            /**
            * Represents the Navigation Links field (a8a06d9d-b646-473e-8fa7-48fe9d3423a1).
            */
            NavigationLinks: Sitecore.Override.ItemEx[];
 
        }
 }; 
}

export namespace CrossTraining.Navigation.Header.Fields {
    export type NavigationLink = { 
        fields?: { 
            /**
            * Represents the Link field (3b16d8f0-6433-4513-8647-5691d711ae08).
            */
            Link: LinkField;

            /**
            * Represents the SubNavigationLink field (863237e8-803a-4d07-9479-fb9e56140d45).
            */
            SubNavigationLink: Sitecore.Override.ItemEx[];

            /**
            * Represents the Title field (5305493c-31d2-4d9e-bdc4-2d45b433f79d).
            */
            Title: Field<string>;
 
        }
 }; 
}

export namespace CrossTraining.Slider.Fields {
    export type Slider = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.HeadlineTag & 
            CrossTraining.Base.Fields.Description & { 
        fields?: { 
            /**
            * Represents the SliderCards field (023962d9-1364-44ac-a3a8-30bef0eb88f7).
            */
            SliderCards: Sitecore.Override.ItemEx[];
 
        }
 }; 
}

export namespace CrossTraining.Tab.Fields {
    export type TabDetails = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.Description & 
            CrossTraining.Base.Fields.HeadlineTag & { 
        fields?: { 
            /**
            * Represents the AdditionalInfo field (e6a08e5a-e3ce-4eb0-baca-4e7089f017f1).
            */
            AdditionalInfo: Field<string>;

            /**
            * Represents the Image field (60626f7c-e081-4b3f-b4fb-e74be3fb9320).
            */
            Image: ImageField;

            /**
            * Represents the Link field (468f5211-913d-4c34-b005-de0aacc7eacf).
            */
            Link: LinkField;

            /**
            * Represents the Role field (c4fd37d6-cf25-4807-b92c-fed75255d35f).
            */
            Role: Field<string>;

            /**
            * Represents the Skills field (16566a71-60d1-4e9c-a716-ed73b0f46eb8).
            */
            Skills: Field<string>;
 
        }
 }; 
}

export namespace CrossTraining.Tab.Fields {
    export type TabsFolder = { 
        fields?: {  
        }
 }; 
}

export namespace CrossTraining.Tab.Fields {
    export type TabsList = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.Description & 
            CrossTraining.Base.Fields.HeadlineTag & { 
        fields?: { 
            /**
            * Represents the Tabs field (e648cbda-67a6-4ee8-b3b1-ebce3f5dc779).
            */
            Tabs: Sitecore.Override.ItemEx[];
 
        }
 }; 
}

export namespace CrossTraining.Slider.Fields {
    export type Testimonial = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.HeadlineTag & 
            CrossTraining.Base.Fields.Description & { 
        fields?: { 
            /**
            * Represents the Image field (969183ba-e849-4a01-a758-8645c7004f74).
            */
            Image: ImageField;
 
        }
 }; 
}

export namespace CrossTraining.Slider.Fields {
    export type TestimonialsFolder = { 
        fields?: {  
        }
 }; 
}

export namespace CrossTraining.Video.Fields {
    export type Video = 
            CrossTraining.Base.Fields.Headline & 
            CrossTraining.Base.Fields.HeadlineTag & 
            CrossTraining.Base.Fields.Description & { 
        fields?: { 
            /**
            * Represents the VideoUrl field (27db2356-0476-422f-9b38-e88bc22a64c8).
            */
            VideoUrl: Field<string>;
 
        }
 }; 
}


