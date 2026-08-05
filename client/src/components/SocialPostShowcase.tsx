import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

interface SocialPostShowcaseProps {
  color: string;
}

export default function SocialPostShowcase({ color }: SocialPostShowcaseProps) {
  return (
    <section className="nf-section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="nf-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Engaging Content That Converts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We create compelling social media content tailored to your brand's voice and audience, driving engagement and building community across all major platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Post 1 */}
          <div className="bg-[#0a0f0c] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span className="text-sm font-medium uppercase tracking-widest">Campaign Visual</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">BR</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Brand Name</h4>
                  <p className="text-xs text-gray-500">Sponsored • 2h</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                Ready to take your business to the next level? Discover how our data-driven strategies can help you reach new audiences and drive real growth. 🚀 #DigitalMarketing #Growth
              </p>
              <div className="flex items-center justify-between text-gray-500 text-xs border-t border-white/10 pt-4">
                <span>1.2k Likes</span>
                <span>84 Comments</span>
                <span>245 Shares</span>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="bg-[#0a0f0c] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors">
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span className="text-sm font-medium uppercase tracking-widest">Product Showcase</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">BR</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Brand Name</h4>
                  <p className="text-xs text-gray-500">Organic • 5h</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                The wait is over. Introducing our latest innovation designed to streamline your workflow and boost productivity. Available now. ✨ Link in bio to learn more.
              </p>
              <div className="flex items-center justify-between text-gray-500 text-xs border-t border-white/10 pt-4">
                <span>856 Likes</span>
                <span>42 Comments</span>
                <span>112 Shares</span>
              </div>
            </div>
          </div>

          {/* Post 3 */}
          <div className="bg-[#0a0f0c] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-colors md:hidden lg:block">
            <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 relative">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                <span className="text-sm font-medium uppercase tracking-widest">Behind the Scenes</span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center">
                  <span className="text-xs font-bold text-white">BR</span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Brand Name</h4>
                  <p className="text-xs text-gray-500">Organic • 1d</p>
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                Meet the team making it all happen! We're passionate about delivering excellence and pushing boundaries every single day. Drop a 👋 to say hi!
              </p>
              <div className="flex items-center justify-between text-gray-500 text-xs border-t border-white/10 pt-4">
                <span>2.4k Likes</span>
                <span>156 Comments</span>
                <span>48 Shares</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 mb-6 uppercase tracking-widest font-semibold">Connect With Us Across Platforms</p>
          <div className="flex items-center gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" aria-label="Facebook" style={{ hover: { color: color } } as any}>
              <Facebook size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" aria-label="Instagram" style={{ hover: { color: color } } as any}>
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" aria-label="Twitter" style={{ hover: { color: color } } as any}>
              <Twitter size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all" aria-label="LinkedIn" style={{ hover: { color: color } } as any}>
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
