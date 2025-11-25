import BlogCard from "./BlogCard";
import blogCleaning from "@/assets/blog-cleaning.jpg";
import blogFood from "@/assets/blog-food.jpg";
import blogTech from "@/assets/blog-tech.jpg";

const Blog = () => {
  const posts = [
    {
      image: blogCleaning,
      category: "Lifestyle",
      date: "November 20, 2024",
      title: "Eco-Friendly Cleaning: How We Keep Your Home Green",
      description: "Discover how WorkSure is committed to using eco-friendly cleaning products and sustainable practices to create a healthier environment for your home.",
      alt: "Woman reading about eco-friendly cleaning tips on smartphone"
    },
    {
      image: blogFood,
      category: "Lifestyle",
      date: "November 18, 2024",
      title: "Food Service Excellence: A Memorable Dining Experience",
      description: "Experience culinary excellence with our professional catering services. We bring restaurant-quality food and service directly to your events.",
      alt: "Gourmet food presentation"
    },
    {
      image: blogTech,
      category: "Technology",
      date: "November 15, 2024",
      title: "Tech in Service: A New Way Of Learning",
      description: "The evolution of modern technology is revolutionizing the service industry. Discover how WorkSure integrates cutting-edge solutions for better customer experiences.",
      alt: "Modern technology devices and gadgets"
    }
  ];

  return (
    <section className="container mx-auto px-6 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none"></div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 relative">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            Stay Updated with Our Tips & Service News!
          </h2>
        </div>
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-3xl font-bold text-foreground">Our Blog</h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Here's the best and hottest news from us here at WorkSure. Find out what we are doing to keep you informed about the latest services and tips!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative">
        {posts.map((post, index) => (
          <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.15}s` }}>
            <BlogCard {...post} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;