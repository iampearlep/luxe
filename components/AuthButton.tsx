"use client"
import React,{useState, useEffect} from 'react'
import { createClient ,  AuthChangeEvent} from '@supabase/supabase-js';
import { Button } from './ui/button';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


const AuthButton = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<true | false>(false);
    const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
    const router = useRouter();

   
    useEffect(() => {
        console.log('useEffect triggered');
         supabase.auth.onAuthStateChange((event: AuthChangeEvent) => {
            console.log('Auth state change event:', event);
            if (event === 'INITIAL_SESSION') {
               setIsLoggedIn(false)
              } else if (event === 'SIGNED_IN') {
              setIsLoggedIn(true);
            } else if (event === 'SIGNED_OUT') {
                      setIsLoggedIn(true);
                    }
          });
      
    }, [])

    const handleLogin = () => {
        console.log('Login button clicked');
    //     console.log("was clicked")
    //    return redirect("/login")
    router.push('/login');
    }
    const handleSignOut = () => {
        console.log('Sign Out button clicked');
        supabase.auth.signOut()
       return redirect("/")
   
    }

  return (
    <div>
       {
        isLoggedIn === true ? (
        <div>
             <Button className="text-[9px] md:text-xs font-extrabold" onClick={handleSignOut}>
          Sign Out
        </Button>
        </div>
        ) : (
        <div>
             
        <Button className="text-[9px] md:text-xs font-extrabold"onClick={handleLogin} >
               Login
        </Button>

        </div>
        )
       }
    </div>
  )
}

export default AuthButton