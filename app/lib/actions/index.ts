import createSupabaseSeverClient from "../supabase/server"

export default async function readUserSession(){

    const supabase = await createSupabaseSeverClient()

    return supabase.auth.getSession()

}