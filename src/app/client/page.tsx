import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { ClientPortal } from "./ClientPortal";

export default async function ClientPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return <ClientPortal user={user} />;
}
