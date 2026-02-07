import { useState, ChangeEvent } from 'react';
import { User, Mail, Phone, Building2, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  attendeeType: string;
  dietaryPreferences: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  organization?: string;
  attendeeType?: string;
}

export function RegistrationForm({ onSuccess }: { onSuccess: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    attendeeType: '',
    dietaryPreferences: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time validation functions
  const validateFirstName = (value: string): string | undefined => {
    if (!value.trim()) return 'First name is required';
    if (value.trim().length < 2) return 'First name must be at least 2 characters';
    if (!/^[a-zA-Z\s-]+$/.test(value)) return 'First name can only contain letters';
    return undefined;
  };

  const validateLastName = (value: string): string | undefined => {
    if (!value.trim()) return 'Last name is required';
    if (value.trim().length < 2) return 'Last name must be at least 2 characters';
    if (!/^[a-zA-Z\s-]+$/.test(value)) return 'Last name can only contain letters';
    return undefined;
  };

  const validateEmail = (value: string): string | undefined => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email address';
    return undefined;
  };

  const validatePhone = (value: string): string | undefined => {
    if (!value.trim()) return 'Phone number is required';
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(value)) return 'Please enter a valid phone number';
    if (value.replace(/\D/g, '').length < 10) return 'Phone number must be at least 10 digits';
    return undefined;
  };

  const validateOrganization = (value: string): string | undefined => {
    if (!value.trim()) return 'Organization is required';
    if (value.trim().length < 2) return 'Organization name must be at least 2 characters';
    return undefined;
  };

  const validateAttendeeType = (value: string): string | undefined => {
    if (!value) return 'Please select an attendee type';
    return undefined;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation
    if (touched[name]) {
      let error: string | undefined;
      switch (name) {
        case 'firstName':
          error = validateFirstName(value);
          break;
        case 'lastName':
          error = validateLastName(value);
          break;
        case 'email':
          error = validateEmail(value);
          break;
        case 'phone':
          error = validatePhone(value);
          break;
        case 'organization':
          error = validateOrganization(value);
          break;
        case 'attendeeType':
          error = validateAttendeeType(value);
          break;
      }
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({ ...prev, [fieldName]: true }));
    
    // Validate on blur
    let error: string | undefined;
    switch (fieldName) {
      case 'firstName':
        error = validateFirstName(formData.firstName);
        break;
      case 'lastName':
        error = validateLastName(formData.lastName);
        break;
      case 'email':
        error = validateEmail(formData.email);
        break;
      case 'phone':
        error = validatePhone(formData.phone);
        break;
      case 'organization':
        error = validateOrganization(formData.organization);
        break;
      case 'attendeeType':
        error = validateAttendeeType(formData.attendeeType);
        break;
    }
    setErrors(prev => ({ ...prev, [fieldName]: error }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {
      firstName: validateFirstName(formData.firstName),
      lastName: validateLastName(formData.lastName),
      email: validateEmail(formData.email),
      phone: validatePhone(formData.phone),
      organization: validateOrganization(formData.organization),
      attendeeType: validateAttendeeType(formData.attendeeType)
    };

    setErrors(newErrors);
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      organization: true,
      attendeeType: true
    });

    return !Object.values(newErrors).some(error => error !== undefined);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    onSuccess();
  };

  // Calculate form completion progress
  const calculateProgress = (): number => {
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'organization', 'attendeeType'];
    const filledFields = requiredFields.filter(field => {
      const value = formData[field as keyof FormData];
      return value && value.trim() !== '';
    });
    return Math.round((filledFields.length / requiredFields.length) * 100);
  };

  const progress = calculateProgress();

  return (
    <section id="registration" className="py-16 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4">Register for the Event</h2>
          <p className="text-center text-gray-600 mb-8">
            Fill out the form below to secure your spot at the Annual Tech Summit 2026
          </p>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Form Completion</span>
            <motion.span
              className="text-sm font-medium text-purple-700"
              key={progress}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
            >
              {progress}%
            </motion.span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-indigo-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-2xl p-6 md:p-8 border border-purple-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="firstName" className="block text-sm mb-2 text-gray-700">
                First Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('firstName')}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.firstName && touched.firstName
                      ? 'border-red-500 focus:ring-red-500'
                      : formData.firstName && !errors.firstName
                      ? 'border-green-500 focus:ring-green-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  placeholder="John"
                />
                {formData.firstName && !errors.firstName && touched.firstName && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <CheckCircle2 className="size-5 text-green-500" />
                  </div>
                )}
              </div>
              {errors.firstName && touched.firstName && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="size-4" />
                  {errors.firstName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm mb-2 text-gray-700">
                Last Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="size-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('lastName')}
                  className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    errors.lastName && touched.lastName
                      ? 'border-red-500 focus:ring-red-500'
                      : formData.lastName && !errors.lastName
                      ? 'border-green-500 focus:ring-green-500'
                      : 'border-gray-300 focus:ring-blue-500'
                  }`}
                  placeholder="Doe"
                />
                {formData.lastName && !errors.lastName && touched.lastName && (
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                    <CheckCircle2 className="size-5 text-green-500" />
                  </div>
                )}
              </div>
              {errors.lastName && touched.lastName && (
                <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="size-4" />
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
              Email Address <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="size-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={() => handleBlur('email')}
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.email && touched.email
                    ? 'border-red-500 focus:ring-red-500'
                    : formData.email && !errors.email
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="john.doe@example.com"
              />
              {formData.email && !errors.email && touched.email && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <CheckCircle2 className="size-5 text-green-500" />
                </div>
              )}
            </div>
            {errors.email && touched.email && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="size-4" />
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone className="size-5 text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                onBlur={() => handleBlur('phone')}
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.phone && touched.phone
                    ? 'border-red-500 focus:ring-red-500'
                    : formData.phone && !errors.phone
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="(555) 123-4567"
              />
              {formData.phone && !errors.phone && touched.phone && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <CheckCircle2 className="size-5 text-green-500" />
                </div>
              )}
            </div>
            {errors.phone && touched.phone && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="size-4" />
                {errors.phone}
              </p>
            )}
          </div>

          {/* Organization Field */}
          <div className="mb-6">
            <label htmlFor="organization" className="block text-sm mb-2 text-gray-700">
              Organization <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Building2 className="size-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                onBlur={() => handleBlur('organization')}
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.organization && touched.organization
                    ? 'border-red-500 focus:ring-red-500'
                    : formData.organization && !errors.organization
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
                placeholder="Your Company Name"
              />
              {formData.organization && !errors.organization && touched.organization && (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <CheckCircle2 className="size-5 text-green-500" />
                </div>
              )}
            </div>
            {errors.organization && touched.organization && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="size-4" />
                {errors.organization}
              </p>
            )}
          </div>

          {/* Attendee Type */}
          <div className="mb-6">
            <label htmlFor="attendeeType" className="block text-sm mb-2 text-gray-700">
              Attendee Type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Users className="size-5 text-gray-400" />
              </div>
              <select
                id="attendeeType"
                name="attendeeType"
                value={formData.attendeeType}
                onChange={handleInputChange}
                onBlur={() => handleBlur('attendeeType')}
                className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                  errors.attendeeType && touched.attendeeType
                    ? 'border-red-500 focus:ring-red-500'
                    : formData.attendeeType && !errors.attendeeType
                    ? 'border-green-500 focus:ring-green-500'
                    : 'border-gray-300 focus:ring-blue-500'
                }`}
              >
                <option value="">Select Type</option>
                <option value="student">Student</option>
                <option value="professional">Professional</option>
                <option value="speaker">Speaker</option>
                <option value="sponsor">Sponsor</option>
              </select>
              {formData.attendeeType && !errors.attendeeType && touched.attendeeType && (
                <div className="absolute inset-y-0 right-8 pr-3 flex items-center pointer-events-none">
                  <CheckCircle2 className="size-5 text-green-500" />
                </div>
              )}
            </div>
            {errors.attendeeType && touched.attendeeType && (
              <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                <AlertCircle className="size-4" />
                {errors.attendeeType}
              </p>
            )}
          </div>

          {/* Dietary Preferences (Optional) */}
          <div className="mb-6">
            <label htmlFor="dietaryPreferences" className="block text-sm mb-2 text-gray-700">
              Dietary Preferences (Optional)
            </label>
            <textarea
              id="dietaryPreferences"
              name="dietaryPreferences"
              value={formData.dietaryPreferences}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Any dietary restrictions or preferences..."
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || progress < 100}
            className={`w-full py-3 rounded-lg transition-all ${
              isSubmitting || progress < 100
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 shadow-lg hover:shadow-xl'
            } text-white`}
            whileHover={isSubmitting || progress < 100 ? {} : { scale: 1.02 }}
            whileTap={isSubmitting || progress < 100 ? {} : { scale: 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Complete Registration'
            )}
          </motion.button>

          {progress < 100 && (
            <p className="mt-3 text-sm text-gray-500 text-center">
              Please fill in all required fields to submit the form
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}