"use client";

import { User } from "@supabase/supabase-js";
import Link from "next/link";
import { signOut } from "@/app/login/actions";
import { FileText, Calendar, MessageSquare, Settings, LogOut, ChevronRight, Bell } from "lucide-react";

interface ClientPortalProps {
  user: User;
}

export function ClientPortal({ user }: ClientPortalProps) {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <nav className="bg-white border-b border-[#e5e5e5] px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] rounded-sm flex items-center justify-center">
              <span className="text-white font-medium text-lg">V</span>
            </div>
            <span className="text-xl font-medium tracking-tight text-[#1a1a1a]">
              Vision Craft
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <button className="p-2 text-[#6b6b6b] hover:text-[#c9a962] transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#c9a962] rounded-full"></span>
            </button>
            <div className="h-6 w-px bg-[#e5e5e5]"></div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-gradient-to-br from-[#c9a962] to-[#d4bc7e] rounded-full flex items-center justify-center">
                <span className="text-white font-medium text-sm">
                  {user.email?.charAt(0).toUpperCase()}
                </span>
              </div>
              <span className="text-sm text-[#2c2c2c] hidden sm:block">{user.email}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-[#1a1a1a] mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Welcome back
          </h1>
          <p className="text-[#6b6b6b]">
            Manage your projects and communications in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            icon={<FileText className="w-6 h-6" />}
            title="Documents"
            description="View and download project files"
            count={3}
          />
          <DashboardCard
            icon={<Calendar className="w-6 h-6" />}
            title="Appointments"
            description="Schedule and manage meetings"
            count={1}
          />
          <DashboardCard
            icon={<MessageSquare className="w-6 h-6" />}
            title="Messages"
            description="Communication with your advisor"
            count={5}
          />
          <DashboardCard
            icon={<Settings className="w-6 h-6" />}
            title="Settings"
            description="Account preferences"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-[#e5e5e5] p-6">
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">Recent Activity</h2>
            <div className="space-y-4">
              <ActivityItem
                title="Document uploaded"
                description="Q4 Financial Analysis Report"
                time="2 hours ago"
              />
              <ActivityItem
                title="Meeting scheduled"
                description="Strategy Review - Dec 20, 2025"
                time="1 day ago"
              />
              <ActivityItem
                title="New message"
                description="From your advisor regarding market trends"
                time="2 days ago"
              />
            </div>
          </div>

          <div className="bg-white border border-[#e5e5e5] p-6">
            <h2 className="text-lg font-semibold text-[#1a1a1a] mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <QuickAction label="Schedule a meeting" />
              <QuickAction label="Upload document" />
              <QuickAction label="Send a message" />
              <QuickAction label="View reports" />
            </div>

            <div className="mt-6 pt-6 border-t border-[#e5e5e5]">
              <form action={signOut}>
                <button
                  type="submit"
                  className="flex items-center gap-2 text-sm text-[#6b6b6b] hover:text-red-500 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({
  icon,
  title,
  description,
  count,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  count?: number;
}) {
  return (
    <div className="bg-white border border-[#e5e5e5] p-6 hover:border-[#c9a962] transition-colors cursor-pointer group">
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 bg-[#fafafa] text-[#6b6b6b] group-hover:text-[#c9a962] transition-colors">
          {icon}
        </div>
        {count !== undefined && (
          <span className="px-2 py-1 bg-[#c9a962]/10 text-[#c9a962] text-xs font-medium rounded-full">
            {count} new
          </span>
        )}
      </div>
      <h3 className="font-medium text-[#1a1a1a] mb-1">{title}</h3>
      <p className="text-sm text-[#6b6b6b]">{description}</p>
    </div>
  );
}

function ActivityItem({
  title,
  description,
  time,
}: {
  title: string;
  description: string;
  time: string;
}) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b border-[#e5e5e5] last:border-0 last:pb-0">
      <div className="w-2 h-2 mt-2 bg-[#c9a962] rounded-full flex-shrink-0"></div>
      <div className="flex-1">
        <p className="text-sm font-medium text-[#1a1a1a]">{title}</p>
        <p className="text-sm text-[#6b6b6b]">{description}</p>
        <p className="text-xs text-[#9ca3af] mt-1">{time}</p>
      </div>
    </div>
  );
}

function QuickAction({ label }: { label: string }) {
  return (
    <button className="w-full flex items-center justify-between p-3 text-sm text-[#2c2c2c] bg-[#fafafa] hover:bg-[#f0f0f0] transition-colors">
      {label}
      <ChevronRight className="w-4 h-4 text-[#9ca3af]" />
    </button>
  );
}
