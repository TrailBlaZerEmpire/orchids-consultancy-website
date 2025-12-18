import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ClientDashboard } from "./ClientDashboard";

export default async function ClientPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <ClientDashboard user={user} />;
}
