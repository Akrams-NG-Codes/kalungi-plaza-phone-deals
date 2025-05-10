import Layout from "@/components/layout/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">About Tyga Gadget Store</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted destination for premium smartphones at the best prices in Uganda.
          </p>
        </div>

        {/* Our Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              Founded in 2015, Tyga Gadget Store began as a small mobile phone shop in the heart of Kampala.
              Our founder, Tyga, had a vision to provide high-quality smartphones at affordable prices while
              offering exceptional customer service.
            </p>
            <p className="mb-4">
              What started as a modest shop has now grown into one of the most trusted mobile phone retailers in Uganda.
              We pride ourselves on our extensive selection of the latest models, competitive pricing, and a team of
              knowledgeable experts who are passionate about mobile technology.
            </p>
            <p>
              Our commitment to customer satisfaction has been the cornerstone of our success. We believe in building
              lasting relationships with our customers, ensuring they always receive honest advice and the best value for their money.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/images/iphone 16.jpg" 
              alt="iPhone 16" 
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We only sell genuine products with full manufacturer warranties and after-sales support.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Fair Pricing</h3>
              <p className="text-muted-foreground">
                We believe in transparent pricing without hidden costs or unnecessary markups.
              </p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">Expert Support</h3>
              <p className="text-muted-foreground">
                Our team of knowledgeable professionals is always ready to assist with any questions or issues.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "John Tyga", role: "Founder & CEO", image: "/placeholder.svg" },
              { name: "Sarah Namirembe", role: "Sales Manager", image: "/placeholder.svg" },
              { name: "David Okello", role: "Technical Support", image: "/placeholder.svg" },
              { name: "Mary Atim", role: "Customer Service", image: "/placeholder.svg" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Avatar className="w-32 h-32 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                </Avatar>
                <h3 className="font-medium text-lg">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visit Us */}
        <div className="bg-gray-50 rounded-lg p-8 border">
          <h2 className="text-2xl font-bold mb-6 text-center">Visit Our Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="/images/samsung s24 ultra.jpg" 
                alt="Samsung Galaxy S24 Ultra" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-muted-foreground">Tyga Gadget Store, Kalungi Plaza</p>
                  <p className="text-muted-foreground">Main Street, Kampala, Uganda</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Business Hours</h3>
                  <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 10:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Contact</h3>
                  <p className="text-muted-foreground">Phone: +256742088424</p>
                  <p className="text-muted-foreground">WhatsApp: +256742088424</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground"><a href="mailto:tygaofficial790@gmail.com" className="hover:text-primary underline">tygaofficial790@gmail.com</a></p>
                  <p className="text-muted-foreground"><a href="mailto:tygaofficial790@gmail.com" className="hover:text-primary underline">tygaofficial790@gmail.com</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
