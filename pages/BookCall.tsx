import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FormData {
  firstName: string;
  lastName: string;
  companyName: string;
  role: string;
  email: string;
  phone: string;
  headcount: string;
  revenue: string;
  projectStage: string;
  budget: string;
  timeline: string;
  message: string;
  document: File | null;
}

interface FormErrors {
  [key: string]: string;
}

export const BookCall: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    companyName: '',
    role: '',
    email: '',
    phone: '',
    headcount: '',
    revenue: '',
    projectStage: '',
    budget: '',
    timeline: '',
    message: '',
    document: null
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.role.trim()) newErrors.role = 'Role is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Business email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.headcount) newErrors.headcount = 'Please select headcount';
    if (!formData.revenue) newErrors.revenue = 'Please select revenue';
    if (!formData.projectStage) newErrors.projectStage = 'Please select project stage';
    if (!formData.budget) newErrors.budget = 'Please select budget';
    if (!formData.timeline) newErrors.timeline = 'Please select timeline';
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your needs';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitted(true);
        setIsSubmitting(false);
        window.scrollTo(0, 0);
      }, 1500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, document: file }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-6">
        <div className="bg-[#111] p-12 rounded-2xl border border-white/10 max-w-lg w-full text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Booked your appointment!</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Thank you for reaching out. A member of the Tangent Labs team will review your details and send a calendar invitation to <span className="text-white font-medium">{formData.email}</span> shortly.
          </p>
          <Link to="/" className="inline-block px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors">
            Return Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full space-y-8 animate-fade-in-up">
        <div className="text-center md:text-left mb-10">
          <Link to="/" className="text-2xl font-medium tracking-tight text-white hover:opacity-80 transition-opacity mb-8 inline-block">
            tangent.
          </Link>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Get Started With Our Free Consultation.
          </h2>
          <div className="mt-4 text-gray-400 text-sm leading-relaxed space-y-2 max-w-3xl">
            <p className="font-medium text-white">Why We Ask For These Details:</p>
            <p>We're not here to waste your time or ours. This intake form helps us understand your business, challenges, and goals so we can come fully prepared to your consultation call with tailored insights and recommendations.</p>
            <p>By taking the time to complete this form thoughtfully, you're showing us you're serious about transformation, not just tire-kicking. In return, here's our commitment:</p>
            <ul className="space-y-1 mt-2">
              <li className="flex items-start gap-2">
                <span className="text-white">✓ If we're a good fit:</span> We'll personally show up to your meeting with a clear plan for how AI agents can solve your specific challenges and drive real results.
              </li>
              <li className="flex items-start gap-2">
                 <span className="text-white">✓ If we're not a good fit:</span> We'll be upfront about it and point you toward resources or partners who can better serve your needs.
              </li>
            </ul>
          </div>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">First Name*</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter text"
                className={`block w-full rounded-md border ${errors.firstName ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
              />
              {errors.firstName && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.firstName}</p>}
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">Last Name*</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter text"
                className={`block w-full rounded-md border ${errors.lastName ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
              />
              {errors.lastName && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.lastName}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-2">Company Name*</label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter text"
                className={`block w-full rounded-md border ${errors.companyName ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
              />
              {errors.companyName && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.companyName}</p>}
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-300 mb-2">Your Role*</label>
              <input
                type="text"
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Enter text"
                className={`block w-full rounded-md border ${errors.role ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
              />
              {errors.role && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.role}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Business Email*</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className={`block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
              />
              {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Business Contact Number</label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-400 text-sm">📞</span>
                </div>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="block w-full rounded-md border border-white/20 bg-[#1A1A1A] pl-10 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                  placeholder="Enter phone"
                />
              </div>
            </div>

            {/* Headcount */}
            <div>
              <label htmlFor="headcount" className="block text-sm font-medium text-gray-300 mb-2">Current Headcount*</label>
              <div className="relative">
                <select
                  name="headcount"
                  id="headcount"
                  value={formData.headcount}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border ${errors.headcount ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
                >
                  <option value="" disabled>Select option...</option>
                  <option value="1-10">1-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                  <option value="201-500">201-500</option>
                  <option value="500+">500+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.headcount && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.headcount}</p>}
            </div>

            {/* Revenue */}
            <div>
              <label htmlFor="revenue" className="block text-sm font-medium text-gray-300 mb-2">Your Annual Revenue*</label>
              <div className="relative">
                <select
                  name="revenue"
                  id="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border ${errors.revenue ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
                >
                  <option value="" disabled>Select option...</option>
                  <option value="Pre-revenue">Pre-revenue</option>
                  <option value="$0 - $1M">$0 - $1M</option>
                  <option value="$1M - $10M">$1M - $10M</option>
                  <option value="$10M - $50M">$10M - $50M</option>
                  <option value="$50M+">$50M+</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.revenue && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.revenue}</p>}
            </div>

            {/* Project Stage */}
            <div>
              <label htmlFor="projectStage" className="block text-sm font-medium text-gray-300 mb-2">Project Stage*</label>
              <div className="relative">
                <select
                  name="projectStage"
                  id="projectStage"
                  value={formData.projectStage}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border ${errors.projectStage ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
                >
                  <option value="" disabled>Select option...</option>
                  <option value="Idea/Concept">Idea/Concept</option>
                  <option value="Prototype/MVP">Prototype/MVP</option>
                  <option value="Live Product">Live Product</option>
                  <option value="Scaling">Scaling</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.projectStage && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.projectStage}</p>}
            </div>

            {/* File Upload */}
            <div>
               <label className="block text-sm font-medium text-gray-300 mb-2">Attach a relevant document (if any), to help us understand your idea better.</label>
               <label className="flex justify-center px-6 pt-5 pb-6 border border-white/20 border-dashed rounded-md bg-[#1A1A1A] hover:bg-[#202020] transition-colors cursor-pointer">
                  <div className="space-y-1 text-center">
                     <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                     <div className="flex text-sm text-gray-400 justify-center">
                        {formData.document ? (
                           <span className="text-purple-400">{formData.document.name}</span>
                        ) : (
                           <>
                              <span className="relative rounded-md font-medium text-purple-400 hover:text-purple-300">
                                 Click to upload
                              </span>
                              <p className="pl-1">or drag and drop</p>
                           </>
                        )}
                     </div>
                     <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                  <input
                     type="file"
                     name="document"
                     className="hidden"
                     accept=".pdf,.doc,.docx"
                     onChange={handleFileChange}
                  />
               </label>
            </div>

            {/* Budget */}
            <div>
              <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">What is your estimated budget for this project?*</label>
              <div className="relative">
                <select
                  name="budget"
                  id="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border ${errors.budget ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
                >
                  <option value="" disabled>Select option...</option>
                  <option value="$1k - $5k">$1k - $5k</option>
                  <option value="$5k - $10k">$5k - $10k</option>
                  <option value="$10k - $25k">$10k - $25k</option>
                  <option value="$25k - $50k">$25k - $50k</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.budget && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.budget}</p>}
            </div>

            {/* Timeline */}
            <div>
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">What is your ideal timeline for launching this software?*</label>
              <div className="relative">
                <select
                  name="timeline"
                  id="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={`block w-full appearance-none rounded-md border ${errors.timeline ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all`}
                >
                  <option value="" disabled>Select option...</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 months">1-2 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                  <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>
              {errors.timeline && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.timeline}</p>}
            </div>
            
            {/* Message - Full Width */}
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Please tell us a bit about what you're looking to solve*</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter text"
                className={`block w-full rounded-md border ${errors.message ? 'border-red-500' : 'border-white/20'} bg-[#1A1A1A] px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none`}
              />
              {errors.message && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12}/> {errors.message}</p>}
            </div>

          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-4 px-4 border border-transparent rounded-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Processing...' : 'Book a Slot'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
