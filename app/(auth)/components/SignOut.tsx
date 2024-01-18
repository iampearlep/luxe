import createSupabaseSeverClient from "@/app/lib/supabase/server"
import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"
import { RiUserReceived2Line } from "react-icons/ri";

export default function SignOut() {

    const Logout = async() => {
        "use server"
    const supabase = await createSupabaseSeverClient()

    await supabase.auth.signOut()

    redirect("/login")
    }

    return (
        <div>
            <form action={Logout}>
           <button><RiUserReceived2Line /></button>
            </form>
        </div>
    )
}