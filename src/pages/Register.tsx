import { useState } from "react";
import { Input } from "../components/common/Input";
import { Button } from "../components/common/Button";
import { Divider } from "../components/common/Divider";
import { GoogleIcon } from "../components/common/GoogleIcon";
// import "../styles/Register.css";
import { LeftPanel } from "../components/layout/LeftPanel";

interface FormData {
  email: string;
  fullName: string;
  nin: string;
  password: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    fullName: "",
    nin: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleGoogleSignup = () => {
    console.log("Google signup clicked");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] max-h-screen px-5 py-2">
      {/* Left Panel - Fixed width of 600px with peach background */}
      <LeftPanel />

      {/* Right Panel - White background */}
      <div className="bg-white rounded-4xl flex items-center justify-center rounded-b-4xl lg:rounded-4xl overflow-y-auto">
        <div className="w-full max-w-130 py-3 px-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Create an account
            </h2>

            <Button variant="google" onClick={handleGoogleSignup}>
              Create account with Google
              <GoogleIcon />
            </Button>

            <Divider />

            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                label="Email Address"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
              />

              <Input
                type="text"
                name="fullName"
                label="Full Name"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
              />

              <Input
                type="text"
                name="nin"
                label="NIN (National Identity Number)"
                placeholder="Enter your NIN"
                value={formData.nin}
                onChange={handleChange}
              />

              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              <Button type="submit" variant="primary">
                Create an account
              </Button>
            </form>

            <p className="mt-4 text-center text-sm text-[#49475A]">
              Already have an account?{" "}
              <a href="/login" className="text-[#FF4726] text-base">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
