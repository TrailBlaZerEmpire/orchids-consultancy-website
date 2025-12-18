"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { login, signup } from "./actions";

export function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setError(null);
    startTransition(async () => {
      const result = isLogin 
        ? await login(formData) 
        : await signup(formData);
      if (result?.error) {
        setError(result.error);
      }
    });
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
        <nav className="px-8 py-6">
          <Link href="/" className="flex items-center gap-3 w-fit">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] rounded-sm flex items-center justify-center">
              <span className="text-white font-medium text-lg">V</span>
            </div>
            <span className="text-xl font-medium tracking-tight text-[#1a1a1a]">
              Vision Craft
            </span>
          </Link>
        </nav>

      <div className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white border border-[#e5e5e5] p-8 shadow-sm">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-semibold text-[#2c2c2c] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <p className="text-[#6b6b6b]">
                {isLogin 
                  ? "Sign in to access your client portal" 
                  : "Join us to get started"}
              </p>
            </div>

            <form action={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2c2c2c] mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-[#e5e5e5] bg-white text-[#2c2c2c] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:border-transparent transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-[#2c2c2c] mb-2">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  minLength={6}
                  className="w-full px-4 py-3 border border-[#e5e5e5] bg-white text-[#2c2c2c] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:border-transparent transition-all"
                  placeholder="••••••••"
                />
              </div>

              {error && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full py-3 px-4 bg-[#2c2c2c] text-white font-medium hover:bg-[#3d3d3d] focus:outline-none focus:ring-2 focus:ring-[#c9a962] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all btn-beam"
              >
                {isPending 
                  ? "Please wait..." 
                  : isLogin 
                    ? "Sign In" 
                    : "Create Account"}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError(null);
                }}
                className="text-sm text-[#6b6b6b] hover:text-[#c9a962] transition-colors"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : "Already have an account? Sign in"}
              </button>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-[#9ca3af]">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
