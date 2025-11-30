import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

export default function RequireAuth({ children }) {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for login/logout changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup subscription
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  if (loading) return <p>Loading...</p>;

  // ❌ If NO session → redirect to login
  if (!session) return <Navigate to="/login" replace />;

  // ✔ Logged in → allow access
  return children;
}
