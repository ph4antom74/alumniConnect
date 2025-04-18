import { Modal } from '@/components/ui/modal';
import { GraduationCap, Briefcase, User, BookOpen, Hash, Mail, Lock, Calendar, BriefcaseBusiness } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRoleSelect: (role: 'student' | 'mentor') => void;
  showStudentForm: boolean;
  showMentorForm: boolean;
  studentFormData: {
    fullName: string;
    registrationNumber: string;
    email: string;
    password: string;
    year: string;
    section: string;
    program: string;
  };
  mentorFormData: {
    fullName: string;
    email: string;
    password: string;
    graduationYear: string;
    program: string;
    currentPosition: string;
    company: string;
  };
  onFormInputChange: (formType: 'student' | 'mentor', e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onFormSubmit: (formType: 'student' | 'mentor') => void;
  onGoogleAuth: () => void;
}

export const JoinModal = ({ 
  isOpen, 
  onClose, 
  onRoleSelect,
  showStudentForm,
  showMentorForm,
  studentFormData,
  mentorFormData,
  onFormInputChange,
  onFormSubmit,
  onGoogleAuth
}: JoinModalProps) => {
  const renderRoleSelection = () => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Join Our Community"
      showFooter={false}
      size="md"
    >
      <div className="space-y-6">
        <p className="text-sm text-gray-600">
          Please select your role to continue with registration:
        </p>

        <div className="grid grid-cols-1 gap-4">
          <button
            onClick={() => onRoleSelect('student')}
            className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-900">I'm a Student</h4>
                <p className="text-sm text-gray-500">Currently enrolled in the institution</p>
              </div>
            </div>
            <span className="text-gray-400 group-hover:text-blue-500">→</span>
          </button>

          <button
            onClick={() => onRoleSelect('mentor')}
            className="group flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-full bg-purple-100 text-purple-600">
                <Briefcase className="h-5 w-5" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-gray-900">I'm a Mentor/Alumni</h4>
                <p className="text-sm text-gray-500">Graduate or industry professional</p>
              </div>
            </div>
            <span className="text-gray-400 group-hover:text-purple-500">→</span>
          </button>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            Already have an account?{' '}
            <button 
              onClick={onClose}
              className="font-medium text-phthalo hover:text-phthalo-dark"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </Modal>
  );

  const renderStudentForm = () => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Student Registration"
      onSubmit={() => onFormSubmit('student')}
      submitText="Create Account"
      size="lg"
    >
      <form className="space-y-4">
        <FormInput
          icon={<User className="h-5 w-5 text-gray-500" />}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={studentFormData.fullName}
          onChange={(e) => onFormInputChange('student', e)}
          required
        />

        <FormInput
          icon={<Hash className="h-5 w-5 text-gray-500" />}
          type="text"
          name="registrationNumber"
          placeholder="Registration Number"
          value={studentFormData.registrationNumber}
          onChange={(e) => onFormInputChange('student', e)}
          required
        />

        <FormInput
          icon={<Mail className="h-5 w-5 text-gray-500" />}
          type="email"
          name="email"
          placeholder="Email Address"
          value={studentFormData.email}
          onChange={(e) => onFormInputChange('student', e)}
          required
        />

        <FormInput
          icon={<Lock className="h-5 w-5 text-gray-500" />}
          type="password"
          name="password"
          placeholder="Create Password"
          value={studentFormData.password}
          onChange={(e) => onFormInputChange('student', e)}
          required
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <BookOpen className="h-5 w-5 text-gray-500" />
            <select
              name="year"
              value={studentFormData.year}
              onChange={(e) => onFormInputChange('student', e)}
              className="flex-1 bg-transparent focus:outline-none"
              required
            >
              <option value="">Select Year</option>
              {[1, 2, 3, 4].map(year => (
                <option key={year} value={year}>Year {year}</option>
              ))}
            </select>
          </div>

          <FormInput
            icon={<Hash className="h-5 w-5 text-gray-500" />}
            type="text"
            name="section"
            placeholder="Section"
            value={studentFormData.section}
            onChange={(e) => onFormInputChange('student', e)}
            required
          />
        </div>

        <FormInput
          icon={<GraduationCap className="h-5 w-5 text-gray-500" />}
          type="text"
          name="program"
          placeholder="Program of Study"
          value={studentFormData.program}
          onChange={(e) => onFormInputChange('student', e)}
          required
        />

        <SocialAuthSection onGoogleAuth={onGoogleAuth} />
      </form>
    </Modal>
  );

  const renderMentorForm = () => (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Mentor Registration"
      onSubmit={() => onFormSubmit('mentor')}
      submitText="Create Account"
      size="lg"
    >
      <form className="space-y-4">
        <FormInput
          icon={<User className="h-5 w-5 text-gray-500" />}
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={mentorFormData.fullName}
          onChange={(e) => onFormInputChange('mentor', e)}
          required
        />

        <FormInput
          icon={<Mail className="h-5 w-5 text-gray-500" />}
          type="email"
          name="email"
          placeholder="Email Address"
          value={mentorFormData.email}
          onChange={(e) => onFormInputChange('mentor', e)}
          required
        />

        <FormInput
          icon={<Lock className="h-5 w-5 text-gray-500" />}
          type="password"
          name="password"
          placeholder="Create Password"
          value={mentorFormData.password}
          onChange={(e) => onFormInputChange('mentor', e)}
          required
        />

        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Calendar className="h-5 w-5 text-gray-500" />
          <select
            name="graduationYear"
            value={mentorFormData.graduationYear}
            onChange={(e) => onFormInputChange('mentor', e)}
            className="flex-1 bg-transparent focus:outline-none"
            required
          >
            <option value="">Graduation Year</option>
            {Array.from({length: 20}, (_, i) => new Date().getFullYear() - i).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <FormInput
          icon={<GraduationCap className="h-5 w-5 text-gray-500" />}
          type="text"
          name="program"
          placeholder="Program Studied"
          value={mentorFormData.program}
          onChange={(e) => onFormInputChange('mentor', e)}
          required
        />

        <FormInput
          icon={<BriefcaseBusiness className="h-5 w-5 text-gray-500" />}
          type="text"
          name="currentPosition"
          placeholder="Current Position"
          value={mentorFormData.currentPosition}
          onChange={(e) => onFormInputChange('mentor', e)}
          required
        />

        <FormInput
          icon={<Briefcase className="h-5 w-5 text-gray-500" />}
          type="text"
          name="company"
          placeholder="Company/Organization"
          value={mentorFormData.company}
          onChange={(e) => onFormInputChange('mentor', e)}
        />

        <SocialAuthSection onGoogleAuth={onGoogleAuth} />
      </form>
    </Modal>
  );

  if (!isOpen) return null;

  if (showStudentForm) return renderStudentForm();
  if (showMentorForm) return renderMentorForm();
  return renderRoleSelection();
};

const FormInput = ({ icon, type, name, placeholder, value, onChange, required }: {
  icon: ReactNode;
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) => (
  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
    {icon}
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="flex-1 bg-transparent focus:outline-none"
      required={required}
    />
  </div>
);

const SocialAuthSection = ({ onGoogleAuth }: { onGoogleAuth: () => void }) => (
  <>
    <div className="relative my-6">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      <div className="relative flex justify-center text-sm">
        <span className="px-2 bg-white text-gray-500">
          Or sign up with
        </span>
      </div>
    </div>

    <Button
      type="button"
      variant="outline"
      className="w-full justify-center gap-2"
      onClick={onGoogleAuth}
    >
      <GoogleIcon />
      Sign up with Google
    </Button>
  </>
);

const GoogleIcon = () => (
  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
    <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd"/>
  </svg>
);