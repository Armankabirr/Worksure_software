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
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
      <div className="aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
          <span className="text-primary font-semibold">Read More →</span>
        </div>
        <img 
          src={image} 
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-primary font-semibold px-3 py-1 bg-primary/10 rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">{category}</span>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full shadow-md hover:shadow-lg transition-all duration-300">
          Read More
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;