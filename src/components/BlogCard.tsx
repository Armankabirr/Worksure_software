import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  title: string;
  description: string;
  alt: string;
}

const BlogCard = ({ image, category, date, title, description, alt }: BlogCardProps) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="text-primary font-medium">{category}</span>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground leading-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;