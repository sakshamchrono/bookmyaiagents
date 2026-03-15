import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { 
  Bot, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

// --- SEO Component ---
const SectionSEO = ({ id, className, title, description, keywords, children }: any) => {
  const { ref, inView } = useInView({ threshold: 0.4 });
  
  return (
    <section id={id} className={className} ref={ref}>
      {inView && (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
        </Helmet>
      )}
      {children}
    </section>
  );
};

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">BookMyAIAgents</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#demos" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Demos</a>
            <a href="#process" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Process</a>
            <a href="#contact" className="px-5 py-2.5 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-colors shadow-sm hover:shadow-md">
              Get Started
            </a>
          </div>

          <button className="md:hidden text-slate-600" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col">
              <a href="#features" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 p-2">Features</a>
              <a href="#demos" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 p-2">Demos</a>
              <a href="#process" onClick={() => setIsOpen(false)} className="text-base font-medium text-slate-600 p-2">Process</a>
              <a href="#contact" onClick={() => setIsOpen(false)} className="text-base font-medium text-indigo-600 p-2">Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium mb-6 border border-indigo-100">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              Next-Gen AI for High-Ticket Businesses
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-8">
              Automate Sales & Support with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Custom AI Agents</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              We build intelligent, conversational AI agents that qualify leads, book appointments, and close high-ticket deals 24/7. Never miss an opportunity again.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full transition-all shadow-lg hover:shadow-indigo-200 flex items-center justify-center gap-2">
                Build My AI Agent <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demos" className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 rounded-full transition-all flex items-center justify-center">
                View Demos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-indigo-600" />,
      title: "24/7 Lead Qualification",
      description: "Engage website visitors instantly. Our AI asks the right questions to qualify high-ticket prospects while you sleep."
    },
    {
      icon: <Calendar className="w-6 h-6 text-indigo-600" />,
      title: "Automated Booking",
      description: "Seamlessly integrate with your calendar. The AI agent schedules qualified leads directly into your pipeline."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-indigo-600" />,
      title: "Increased Conversions",
      description: "Stop losing leads to slow response times. Instant, intelligent replies dramatically boost your conversion rates."
    }
  ];

  return (
    <SectionSEO 
      id="features" 
      className="py-24 bg-white"
      title="Features | BookMyAIAgents"
      description="Discover why high-ticket businesses need AI. Our custom AI agents offer 24/7 availability, automated booking, and increased conversions."
      keywords="AI features, automated booking, AI conversion, 24/7 AI agents, business automation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why High-Ticket Businesses Need AI</h2>
          <p className="text-lg text-slate-600">In premium markets, speed and personalization are everything. Our agents deliver both, flawlessly.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-lg hover:shadow-indigo-50 transition-all"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionSEO>
  );
};

const ChatSimulation = ({ messages }: { messages: { text: string, isBot: boolean }[] }) => {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleMessages(prev => {
        if (prev < messages.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 1500);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col h-[400px]">
      <div className="bg-slate-50 border-b border-slate-200 p-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 text-sm">AI Assistant</h4>
          <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Online
          </p>
        </div>
      </div>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-slate-50/50">
        <AnimatePresence>
          {messages.slice(0, visibleMessages).map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                msg.isBot 
                  ? 'bg-white border border-slate-200 text-slate-700 self-start rounded-tl-sm' 
                  : 'bg-indigo-600 text-white self-end rounded-tr-sm'
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
          {visibleMessages < messages.length && visibleMessages % 2 !== 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white border border-slate-200 text-slate-400 self-start rounded-2xl rounded-tl-sm p-3 text-sm flex gap-1"
            >
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Demos = () => {
  const realEstateDemo = [
    { text: "Hi! I'm looking for luxury properties in Miami.", isBot: false },
    { text: "Hello! I can help with that. Are you looking for a condo or a single-family home?", isBot: true },
    { text: "A waterfront condo, budget around $2.5M.", isBot: false },
    { text: "Perfect. We have 3 exclusive off-market listings matching that criteria. Shall I schedule a private viewing with our senior broker this week?", isBot: true },
    { text: "Yes, Thursday afternoon works.", isBot: false },
    { text: "Great! I've booked a call for Thursday at 2 PM EST. You'll receive a calendar invite shortly.", isBot: true }
  ];

  const consultingDemo = [
    { text: "I need help scaling my agency.", isBot: false },
    { text: "Welcome! To ensure we're the right fit, what is your current monthly recurring revenue (MRR)?", isBot: true },
    { text: "We're currently at $50k/mo, aiming for $150k.", isBot: false },
    { text: "Excellent. Our 'Scale' program is designed exactly for agencies in the $30k-$80k range. Would you like to book a strategy session to see our framework?", isBot: true },
    { text: "Sure, let's do it.", isBot: false },
    { text: "Awesome. Here is the link to our calendar: [Calendar Link]. Looking forward to speaking with you!", isBot: true }
  ];

  return (
    <SectionSEO 
      id="demos" 
      className="py-24 bg-slate-900 text-white overflow-hidden"
      title="Interactive AI Demos | BookMyAIAgents"
      description="Try our interactive AI demos for Real Estate, E-commerce, and SaaS. See how custom AI agents can transform your customer interactions."
      keywords="AI demos, real estate AI, ecommerce AI, SaaS AI, interactive AI agent, AI examples"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Agents in Action</h2>
          <p className="text-lg text-slate-400">Experience how our AI handles complex, high-ticket conversations naturally and drives them toward a conversion.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Demo 1 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Globe className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold">Real Estate Agent</h3>
            </div>
            <p className="text-slate-400">Qualifies buyers based on budget and preferences, then seamlessly books high-value property viewings.</p>
            
            {/* Simulated GIF / Chat Interface */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20"></div>
              <div className="relative text-slate-900">
                <ChatSimulation messages={realEstateDemo} />
              </div>
            </div>
          </div>

          {/* Demo 2 */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold">B2B Consulting Agent</h3>
            </div>
            <p className="text-slate-400">Acts as a gatekeeper, ensuring only qualified leads with the right budget reach your calendar.</p>
            
            {/* Simulated GIF / Chat Interface */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl blur opacity-20"></div>
              <div className="relative text-slate-900">
                <ChatSimulation messages={consultingDemo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionSEO>
  );
};

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We analyze your sales process, FAQs, and ideal customer profile to design an agent that speaks your brand's language."
    },
    {
      number: "02",
      title: "Custom Development",
      description: "We build and train your AI using advanced LLMs, integrating it with your CRM, calendar, and website."
    },
    {
      number: "03",
      title: "Deployment & Optimization",
      description: "We launch the agent and continuously monitor its conversations, refining its responses to maximize your conversion rate."
    }
  ];

  return (
    <SectionSEO 
      id="process" 
      className="py-24 bg-slate-50"
      title="Our 14-Day Process | BookMyAIAgents"
      description="Learn about our proven 14-day process to build and deploy custom AI agents. From discovery to deployment, we handle everything."
      keywords="AI implementation process, 14 day AI deployment, AI development process, custom AI timeline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Work</h2>
          <p className="text-lg text-slate-600">A streamlined process to get your AI agent live and generating ROI quickly.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-indigo-100 -z-10"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative pt-8">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-4 border-indigo-50 rounded-full flex items-center justify-center text-xl font-bold text-indigo-600 shadow-sm">
                {step.number}
              </div>
              <div className="bg-white p-8 pt-12 rounded-2xl shadow-sm border border-slate-100 text-center h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionSEO>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', requirements: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(formState.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    
    setEmailError('');
    setIsSubmitting(true);
    setError('');

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

      if (!accessKey || accessKey.trim() === '') {
        setError("Web3Forms Access Key is missing. Please add it to your AI Studio Secrets and restart the server.");
        setIsSubmitting(false);
        return;
      }

      // Add a 10-second timeout to prevent the form from hanging forever
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey.trim(),
          subject: "New Lead from BookMyAIAgents.com",
          from_name: "BookMyAIAgents Website",
          ...formState
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const result = await response.json();
      if (response.ok && result.success) {
        setSubmitted(true);
        setFormState({ name: '', email: '', company: '', requirements: '' });
      } else {
        setError(result.message || "Invalid Access Key or server error. Please check your Web3Forms key.");
      }
    } catch (err: any) {
      console.error("Form submission error:", err);
      if (err.name === 'AbortError') {
        setError("Request timed out. Please try again.");
      } else {
        setError("Something went wrong. Please check your internet connection and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionSEO 
      id="contact" 
      className="py-24 bg-white"
      title="Contact Us | BookMyAIAgents"
      description="Ready to automate your business? Contact BookMyAIAgents today to discuss your custom AI agent requirements."
      keywords="contact BookMyAIAgents, hire AI developer, custom AI consultation, AI automation contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to automate your high-ticket sales?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Tell us about your business and what you want to achieve. We'll get back to you within 24 hours with a custom strategy.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Email Us</h4>
                  <p className="text-slate-600">saksham@bookmyaiagents.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">Fast Turnaround</h4>
                  <p className="text-slate-600">Agents built and deployed in 14 days.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Received!</h3>
                <p className="text-slate-600 mb-8">We'll be in touch shortly to discuss your custom AI agent.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-indigo-600 font-medium hover:text-indigo-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100">
                    {error}
                  </div>
                )}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formState.email}
                      onChange={(e) => {
                        setFormState({...formState, email: e.target.value});
                        if (emailError) setEmailError('');
                      }}
                      className={`w-full px-4 py-3 rounded-xl border ${emailError ? 'border-red-500 focus:ring-red-500' : 'border-slate-200 focus:ring-indigo-600'} focus:ring-2 focus:border-transparent outline-none transition-all`}
                      placeholder="john@company.com"
                    />
                    {emailError && <p className="mt-1 text-sm text-red-500">{emailError}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                      placeholder="Company Name"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="requirements" className="block text-sm font-medium text-slate-700 mb-2">Your Requirements</label>
                  <textarea 
                    id="requirements" 
                    rows={4}
                    required
                    value={formState.requirements}
                    onChange={(e) => setFormState({...formState, requirements: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your current sales process and what you'd like to automate..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? 'Sending...' : 'Request Custom Strategy'} <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionSEO>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-indigo-600 p-1.5 rounded-lg">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">BookMyAIAgents</span>
            </div>
            <p className="max-w-sm">
              Empowering high-ticket businesses with intelligent, conversational AI agents that drive revenue 24/7.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demos" className="hover:text-white transition-colors">Demos</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} BookMyAIAgents.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demos />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
