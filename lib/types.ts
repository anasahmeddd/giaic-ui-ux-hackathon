interface GridBannerProps {
    imageUrl: string;
    imageSize: number;
    gridColumn?: string
    gridRow?: string
    ariaLabel?: string;
  }
   interface SocialIconProps {
    src: string;
    alt: string;
  }
  
   interface FooterLinkGroupProps {
    title: string;
    links: string[];
  }
  
   interface SubscribeFormProps {
    onSubmit: (email: string) => void;
  }