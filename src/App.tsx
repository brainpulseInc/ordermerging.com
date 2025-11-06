import { useState } from 'react';
import svgPaths from "./imports/svg-k27n95pde8";
import imgRectangle30 from "figma:asset/3bd11fb2d71ea6c7f29e2958dc20d589ef1bbb25.png";
import imgRectangle31 from "figma:asset/9b5f7fa1327703732ce10486fa292edc7291aa60.png";
import imgRectangle32 from "figma:asset/03c33423312bda685289c203bdb4d8cd265f1739.png";
import imgRectangle38 from "figma:asset/5dedffd4071a4ea3807789f0af5570081fe4f28a.png";
import imgFooter from "figma:asset/73f1af10cf4c9fee37a627d59e845f19fb382e23.png";
import imgHero from "figma:asset/e9e3c466882f2c16619a185e1aea99a93db491c0.png";
import imgQuickSetup from "figma:asset/03eb9e8d0886b4cd9597e52a6e2394ce31b9f19f.png";
import imgFeature1 from "figma:asset/4fe5d333d2d9fbbf29f7c95d9ee90d9e89ba0133.png";
import imgFeature2 from "figma:asset/eb41b858633defb58b350b7ed31ef04b2bf019f6.png";
import imgFeature3 from "figma:asset/1dfc955e98145cb0ab8be4a28d46e887565120bd.png";
import imgFeature4 from "figma:asset/199f579c9f7ccfae3a9e0a4603b040e2a3bae9b8.png";
import imgLogo from "figma:asset/15106adcb4efe1c32eadcae3b3e8b7588bac328d.png";
import { Menu, X, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';


export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
useEffect(() => {
  const contactUsLink = document.querySelector('.contact-us');
  
  if (contactUsLink) {
    contactUsLink.addEventListener('click', (e) => {
      e.preventDefault();
      if (typeof window.Intercom === 'function') {
        window.Intercom('show'); // Opens Intercom Messenger
      } else {
        console.warn('Intercom not loaded yet');
      }
    });
  }

  // Cleanup: prevent multiple event bindings during hot reloads
  return () => {
    if (contactUsLink) {
      contactUsLink.replaceWith(contactUsLink.cloneNode(true));
    }
  };
}, []);

  return (
    <div className="bg-white flex flex-col items-center w-full min-h-screen">
      {/* Top Navigation */}
      <nav className="w-full border-b border-[#e3e3e3] relative z-50">
        <div className="max-w-[1200px] mx-auto py-6 md:py-[40px] px-6">
          <div className="flex items-center justify-between">
            {/* Logo - Left */}
            <div className="flex-shrink-0">
              <img src={imgLogo} alt="OrderMerging.com" className="h-12 md:h-15" />
            </div>

            {/* Desktop Nav - Center */}
            <div className="hidden md:flex items-center gap-[40px] text-[24px] text-[#1e1e1e] absolute left-1/2 transform -translate-x-1/2">
              <a href="#features" className="cursor-pointer hover:text-[#cc6251] transition-colors">Features</a>
              <a href="#pricing" className="cursor-pointer hover:text-[#cc6251] transition-colors">Pricing</a>
            </div>

            {/* Desktop CTA - Right */}
            <button className="hidden md:flex bg-[#cc6251] text-white px-5 py-[14px] rounded-xl hover:bg-[#b55545] transition-colors">
              <p className="font-bold text-[21px]">Get Started</p>
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              <a href="#features" className="text-lg cursor-pointer hover:text-[#cc6251]" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#pricing" className="text-lg cursor-pointer hover:text-[#cc6251]" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <button className="bg-[#cc6251] text-white px-5 py-3 rounded-xl text-center w-auto">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto py-12 md:py-[60px] px-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center">
            {/* Content */}
            <div className="flex-1 flex flex-col gap-4 md:gap-[22px] text-center lg:text-left lg:max-w-[50%]">
              <h1 className="text-2xl md:text-[36px] leading-tight text-black">
                OrderMerge helps you <span className="font-bold text-[#cc6251]">save shipping costs</span> and{' '}
                <span className="font-bold text-[#cc6251]">reduce operational overhead</span> by{' '}
                <span className="font-bold text-[#cc6251]">merging multiple orders</span> from the same customer within a time window you control.
              </h1>
              
              <p className="font-bold text-lg md:text-[21px] text-black">
                Fewer shipments. Faster fulfillment. Better margins.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-col gap-2 md:gap-[10px] items-center lg:items-start">
                <div className="bg-[rgba(247,223,219,0.34)] border border-[#f7dfdb] rounded-[11px] px-4 py-2 text-center w-fit">
                  <p className="text-base md:text-[24px] text-[#1e1e1e]">⭐ Trusted by growing Shopify brands</p>
                </div>
                <div className="bg-[rgba(247,223,219,0.34)] border border-[#f7dfdb] rounded-[11px] px-4 py-2 text-center w-fit">
                  <p className="text-base md:text-[24px] text-[#1e1e1e]">🛍️ Built for all order volumes</p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col gap-3 items-center lg:items-start">
                <button className="bg-[#cc6251] text-white px-5 py-[14px] rounded-xl hover:bg-[#b55545] transition-colors w-fit">
                  <p className="font-bold text-[21px]">Get Started</p>
                </button>
                <p className="text-lg md:text-[21px] text-black">Instant setup. No code required.</p>
              </div>
            </div>

            {/* Hero Image - Below content on mobile, side by side on desktop */}
            <div className="flex-1 flex relative w-full lg:max-w-[50%] lg:h-[542px] h-[300px] items-center justify-center">
              <HeroVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Setup Section */}
      <section className="w-full flex justify-center px-4 md:px-8 py-8 md:py-12">
        <div className="bg-[#fcf4f3] rounded-[20px] p-6 md:p-[50px_100px_100px] max-w-[1200px] w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-8 items-center">
            <div className="flex-1 flex flex-col gap-4">
              <p className="font-bold text-lg md:text-[21px] text-[#1e1e1e]">Quick Setup</p>
              <h2 className="font-bold text-2xl md:text-[36px] text-[#1e1e1e] leading-tight">
                Simple setup. Powerful automation.
              </h2>
              <button className="bg-[#cc6251] text-white px-5 py-[14px] rounded-xl hover:bg-[#b55545] transition-colors w-fit">
                <p className="font-bold text-[21px]">Start Free Trial</p>
              </button>
            </div>
            <div className="flex-1 relative min-h-[327px] w-full">
              <QuickSetupVisualization />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full px-4 md:px-8 lg:px-[100px] py-12 md:py-20">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12 md:gap-[70px]">
          <h2 className="font-semibold text-2xl md:text-[36px] text-[#303030] text-center">Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px]">
            {/* Feature 1 */}
            <FeatureCard
              title="Manual or Automatic Merging"
              description="Choose how you work. Auto-merge using smart rules or manually merge only when needed."
              visual={<Feature1Visual />}
            />

            {/* Feature 2 */}
            <FeatureCard
              title="Smart Order Management"
              description="Decide whether to merge into the original order or generate a fresh consolidated order for fulfillment."
              visual={<Feature2Visual />}
            />

            {/* Feature 3 */}
            <FeatureCard
              title="Remove or Archive Merged Orders"
              description="Keep your Shopify dashboard clean. No duplicate fulfillment. No confusion."
              visual={<Feature3Visual />}
            />

            {/* Feature 4 */}
            <FeatureCard
              title="Analytics That Show Real Impact"
              description="Track how much money and time you save through merged orders. See shipping costs saved per month and fulfillment efficiency gains."
              visual={<Feature4Visual />}
            />
          </div>
        </div>
      </section>

      {/* Get Started CTA Section */}
      <section className="w-full flex justify-center px-4 md:px-8 py-8 md:py-12">
        <div className="bg-[#cc6251] rounded-[20px] p-8 md:p-[50px] max-w-[1200px] w-full">
          <div className="flex flex-col gap-8 md:gap-12 items-center text-center">
            <div className="flex flex-col gap-4 md:gap-6 max-w-[897px]">
              <h2 className="font-semibold text-2xl md:text-[36px] text-[#fcf4f3]">
                Missing a workflow?
              </h2>
              <p className="text-lg md:text-[24px] text-[#fcf4f3]">
                We build merchant-driven features with priority support.<br className="hidden md:block" />
                Most improvements go live within 7 days.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <button className="bg-[#fcf4f3] text-[#cc6251] px-5 py-[14px] rounded-xl hover:bg-white transition-colors">
                <p className="font-bold text-[21px]">Get Started</p>
              </button>
              <p className="text-lg md:text-[24px] text-[#fcf4f3]">
                Instant Setup. No Action Needed. Free Trial
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="w-full px-4 md:px-8 py-12 md:py-[90px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-8 md:gap-[30px] items-center">
          <h2 className="font-semibold text-2xl md:text-[36px] text-[#303030] text-center">Pricing</h2>
          
          <div className="flex flex-col gap-5 items-center">
            <p className="font-bold text-xl md:text-[28px] text-[#cc6251] text-center">
              Free for Early Users 🎉
            </p>
            
            <div className="bg-[#fcf4f3] rounded-[20px] overflow-hidden max-w-[409px] w-full">
              <div className="border-b border-[#e3e3e3] p-6 md:p-[30px] text-center">
                <h3 className="font-bold text-2xl md:text-[28px] text-[#1e1e1e] mb-2">Free</h3>
                <p className="text-lg md:text-[20px] text-[#1e1e1e]">Simple pricing. Full access.</p>
              </div>
              
              <div className="p-6 md:p-[30px] flex flex-col gap-4">
                <div className="text-base md:text-[16px] text-[#1e1e1e] leading-relaxed">
                  <p>✅ Auto + Manual merging</p>
                  <p>✅ Merge to original or new order</p>
                  <p>✅ Remove/archive merged orders</p>
                  <p>✅ Detailed analytics dashboard</p>
                </div>
                <p className="text-base md:text-[16px] text-[#1e1e1e]">No contracts. Cancel anytime.</p>
              </div>
              
              <div className="p-6 md:p-[30px] flex flex-col gap-4 items-center text-center">
                <h4 className="font-bold text-xl md:text-[28px] text-[#1e1e1e]">
                  Stop losing profits to unnecessary shipping
                </h4>
                <button className="bg-[#cc6251] text-white px-5 py-[14px] rounded-xl hover:bg-[#b55545] transition-colors w-auto">
                  <p className="font-bold text-[21px]">Get Started Free</p>
                </button>
                <p className="text-base md:text-[16px] text-[#1e1e1e]">
                  Instant activation. No coding needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#e3e3e3] bg-white">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      

            {/* Center: Copyright */}
            <div className="order-last md:order-none">
              <p className="text-[#0066ff] text-sm md:text-base">
                © OrderMerging.com, All rights reserved
              </p>
            </div>

            {/* Right: Navigation Links */}
            <div className="flex items-center gap-6 md:gap-8">
              <a href="#" className="text-black hover:text-[#cc6251] transition-colors text-sm md:text-base">
                Terms
              </a>
            <a 
  href="#" 
  className="contact-us text-black hover:text-[#cc6251] transition-colors text-sm md:text-base">
  Contact Us
</a>

              <a href="#" className="text-black hover:text-[#cc6251] transition-colors text-sm md:text-base">
                App Store
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({ title, description, visual }: { title: string; description: string; visual: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#fcf4f3] rounded-[20px] h-[300px] md:h-[383px] overflow-hidden relative">
        {visual}
      </div>
      <div className="flex flex-col gap-2 p-2">
        <h3 className="font-bold text-xl md:text-[24px] text-black text-left">{title}</h3>
        <p className="text-base md:text-[24px] text-[#616161] text-left leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Simplified visualizations
function HeroVisualization() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img src={imgHero} alt="Order merging visualization" className="w-full object-contain" />
    </div>
  );
}

function QuickSetupVisualization() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <img src={imgQuickSetup} alt="Quick setup process" className="max-w-full max-h-full object-contain" />
    </div>
  );
}

function Feature1Visual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={imgFeature1} alt="Manual or automatic merging" className="max-w-full max-h-full object-contain" />
    </div>
  );
}

function Feature2Visual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={imgFeature2} alt="Smart order management" className="max-w-full max-h-full object-contain" />
    </div>
  );
}

function Feature3Visual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={imgFeature3} alt="Remove or archive merged orders" className="max-w-full max-h-full object-contain" />
    </div>
  );
}

function Feature4Visual() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={imgFeature4} alt="Analytics that show real impact" className="max-w-full max-h-full object-contain" />
    </div>
  );
}
