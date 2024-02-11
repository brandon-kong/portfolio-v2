type NumberedList = {
    title: string;
    content: string;
  };
  
  type Tool = {
    name: string;
    image: string;
  };
  
  type Testimonial = {
    name: string;
    title: string;
    content: string;
  };
  
  type Content = {
    content: string;
  }

  type Links = {
    github: string;
    live?: string;
  }
  
  type Project = {
    tags: string[];
    name: string;
    description: string;
    preview_link: string;
    slug: string;
    head_image: string;
    background: Content;
    goals: NumberedList[];
    secondary_image: string;
    solutions: NumberedList[];
    tools: Tool[];
    testimonial: Testimonial;
    conclusion: Content;
    links: Links;
};

export type { Project, NumberedList, Tool, Testimonial, Content };