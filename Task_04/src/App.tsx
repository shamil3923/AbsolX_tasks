import React, { useState } from "react";
import {
  Activity,
  BarChart2,
  Heart,
  Menu,
  X,
  ArrowRight,
  Users,
  Trophy,
  Check,
  Mail,
  Lock,
  User,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    fitnessGoal: "",
    experienceLevel: "",
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking on a navigation link
  const handleNavClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Handle Start Journey button click
  const handleStartJourney = () => {
    setShowModal(true);
    // Close mobile menu if open
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  // Close modal function
  const closeModal = () => {
    setShowModal(false);
    setFormStep(0);
  };

  // Handle form input changes
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (formStep === 0) {
      setFormStep(1);
    } else {
      // Process form submission
      console.log("Form submitted:", formData);

      // In a real app, this would send data to a server
      // For now, we'll just show a success message and close
      alert("Welcome to FitFlow! Your journey has begun.");
      closeModal();
    }
  };

  // Custom experience levels and fitness goals
  const experienceLevels = ["Beginner", "Intermediate", "Advanced"];
  const fitnessGoals = [
    "Weight Loss",
    "Muscle Gain",
    "Endurance",
    "General Fitness",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Activity
                className="h-8 w-8 text-indigo-600"
                aria-hidden="true"
              />
              <span className="ml-2 text-xl font-bold text-gray-900">
                FitFlow
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  className="text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Pricing
                </a>
                <button
                  onClick={handleStartJourney}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-gray-900 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
              <a
                href="#features"
                onClick={handleNavClick}
                className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
              >
                Features
              </a>
              <a
                href="#testimonials"
                onClick={handleNavClick}
                className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                onClick={handleNavClick}
                className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-indigo-600 rounded-md"
              >
                Pricing
              </a>
              <button
                onClick={handleStartJourney}
                className="w-full mt-2 bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Fitness Journey with
              <span className="text-indigo-600"> FitFlow</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Track your workouts, monitor your progress, and achieve your
              fitness goals with our intelligent fitness companion.
            </p>
            <div className="mt-10">
              <button
                onClick={handleStartJourney}
                className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-20">
            <div className="bg-gray-200 rounded-xl shadow-2xl w-full h-96 md:h-[32rem] flex items-center justify-center overflow-hidden">
              {/* Using placeholder instead of external image */}
              <div className="text-gray-500 flex flex-col items-center">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Fitness tracking dashboard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Why Choose FitFlow?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to reach your fitness goals
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <BarChart2
                className="h-12 w-12 text-indigo-600"
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Advanced Analytics
              </h3>
              <p className="mt-4 text-gray-600">
                Track your progress with detailed insights and personalized
                recommendations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Heart className="h-12 w-12 text-indigo-600" aria-hidden="true" />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Health Monitoring
              </h3>
              <p className="mt-4 text-gray-600">
                Keep track of your vital signs and overall wellness with
                real-time monitoring.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <Trophy
                className="h-12 w-12 text-indigo-600"
                aria-hidden="true"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                Goal Setting
              </h3>
              <p className="mt-4 text-gray-600">
                Set and achieve your fitness goals with our smart goal-tracking
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Loved by Fitness Enthusiasts
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of satisfied users worldwide
            </p>
          </div>

          <div className="mt-20 flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users
                    className="h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-600">Fitness Coach</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "FitFlow has revolutionized how I track my clients' progress.
                The analytics are incredible!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm max-w-md w-full">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <Users
                    className="h-6 w-6 text-indigo-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold">Michael Chen</h4>
                  <p className="text-gray-600">Marathon Runner</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">
                "The goal-setting features have helped me stay motivated and
                achieve my personal bests."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the plan that works best for you
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Basic</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  $9
                </span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-6 text-gray-500">
                Perfect for beginners just starting their fitness journey.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">Workout tracking</span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">Basic analytics</span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">Goal setting</span>
                </li>
              </ul>
              <button
                onClick={handleStartJourney}
                className="mt-8 w-full bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get Started
              </button>
            </div>

            {/* Pro Plan - Highlighted */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border-2 border-indigo-600 relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-indigo-600 text-white text-xs font-semibold py-1 px-3 rounded-full">
                Popular
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  $19
                </span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-6 text-gray-500">
                For dedicated fitness enthusiasts looking to optimize their
                training.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">All Basic features</span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">Advanced analytics</span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">
                    Personalized training plans
                  </span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">Nutrition tracking</span>
                </li>
              </ul>
              <button
                onClick={handleStartJourney}
                className="mt-8 w-full bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get Started
              </button>
            </div>

            {/* Elite Plan */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Elite</h3>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">
                  $39
                </span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <p className="mt-6 text-gray-500">
                For athletes and professionals requiring comprehensive fitness
                solutions.
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">All Pro features</span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">1-on-1 coaching</span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">Priority support</span>
                </li>
                <li className="flex">
                  <Check
                    className="h-5 w-5 text-green-500 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span className="ml-3 text-gray-500">API access</span>
                </li>
              </ul>
              <button
                onClick={handleStartJourney}
                className="mt-8 w-full bg-white text-indigo-600 border border-indigo-600 px-6 py-3 rounded-full font-medium hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="mt-4 text-xl text-indigo-100">
            Join FitFlow today and take control of your health and fitness
            goals.
          </p>
          <button
            onClick={handleStartJourney}
            className="mt-8 bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-indigo-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Activity
                  className="h-8 w-8 text-indigo-400"
                  aria-hidden="true"
                />
                <span className="ml-2 text-xl font-bold">FitFlow</span>
              </div>
              <p className="mt-4 text-gray-400">
                Transform your fitness journey with intelligent tracking and
                analytics.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 FitFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Start Journey Modal */}
      {showModal && (
        <div className="fixed inset-0 overflow-y-auto z-50 flex items-center justify-center">
          {/* Modal Backdrop */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal}
            aria-hidden="true"
          ></div>

          {/* Modal Content */}
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg w-full m-4 z-10">
            <div className="relative">
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                aria-label="Close"
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Modal Header */}
              <div className="bg-indigo-600 px-6 py-4">
                <h3 className="text-lg font-medium text-white">
                  {formStep === 0
                    ? "Create Your Account"
                    : "Tell Us About Yourself"}
                </h3>
              </div>

              {/* Modal Body */}
              <div className="px-6 py-4">
                <form onSubmit={handleSubmit}>
                  {formStep === 0 ? (
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email Address
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2"
                            placeholder="you@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            type="password"
                            name="password"
                            id="password"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md p-2"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleInputChange}
                            required
                            minLength={8}
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          Minimum 8 characters
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div>
                        <label
                          htmlFor="fitnessGoal"
                          className="block text-sm font-medium text-gray-700"
                        >
                          What's your primary fitness goal?
                        </label>
                        <select
                          id="fitnessGoal"
                          name="fitnessGoal"
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md p-2"
                          value={formData.fitnessGoal}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled>
                            Select a goal
                          </option>
                          {fitnessGoals.map((goal) => (
                            <option key={goal} value={goal}>
                              {goal}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="experienceLevel"
                          className="block text-sm font-medium text-gray-700"
                        >
                          What's your fitness experience level?
                        </label>
                        <div className="mt-2 space-y-2">
                          {experienceLevels.map((level) => (
                            <div key={level} className="flex items-center">
                              <input
                                id={level}
                                name="experienceLevel"
                                type="radio"
                                value={level}
                                checked={formData.experienceLevel === level}
                                onChange={handleInputChange}
                                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 p-2"
                              />
                              <label
                                htmlFor={level}
                                className="ml-3 block text-sm font-medium text-gray-700"
                              >
                                {level}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-6">
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {formStep === 0 ? "Continue" : "Start Your Journey"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
