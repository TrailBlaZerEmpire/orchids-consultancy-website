"use client";

import Link from "next/link";
import type { User } from "@supabase/supabase-js";
import { signOut } from "@/app/login/actions";

interface ClientDashboardProps {
  user: User;
}

export function ClientDashboard({ user }: ClientDashboardProps) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <nav className="px-8 py-6 border-b border-[#e5e5e5] bg-white flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#2c2c2c] flex items-center justify-center">
            <span className="text-[#c9a962] font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>O</span>
          </div>
          <span className="text-xl font-semibold text-[#2c2c2c]" style={{ fontFamily: 'Playfair Display, serif' }}>
            Orchids
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <span className="text-sm text-[#6b6b6b]">{user.email}</span>
          <form action={signOut}>
            <button
              type="submit"
              className="text-sm text-[#2c2c2c] hover:text-[#c9a962] transition-colors"
            >
              Sign Out
            </button>
          </form>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#2c2c2c] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Welcome back
          </h1>
          <p className="text-[#6b6b6b]">
            Here&apos;s your client dashboard overview.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#e5e5e5] p-6">
            <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Documents
            </h3>
            <p className="text-sm text-[#6b6b6b]">Access your project documents and reports.</p>
          </div>

          <div className="bg-white border border-[#e5e5e5] p-6">
            <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Meetings
            </h3>
            <p className="text-sm text-[#6b6b6b]">Schedule and manage your consultation sessions.</p>
          </div>

          <div className="bg-white border border-[#e5e5e5] p-6">
            <div className="w-12 h-12 bg-[#c9a962]/10 flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-[#2c2c2c] mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
              Analytics
            </h3>
            <p className="text-sm text-[#6b6b6b]">View performance metrics and insights.</p>
          </div>
        </div>

        <div className="mt-8 bg-white border border-[#e5e5e5] p-6">
          <h2 className="text-xl font-semibold text-[#2c2c2c] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm">
              <div className="w-2 h-2 bg-[#c9a962] rounded-full"></div>
              <span className="text-[#6b6b6b]">No recent activity yet. Your updates will appear here.</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
