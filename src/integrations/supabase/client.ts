// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ztrhsjihbmsbgeobjwct.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0cmhzamloYm1zYmdlb2Jqd2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzczOTUwNTUsImV4cCI6MjA1Mjk3MTA1NX0.0xJMhsqLAd2Bo8oSurTqrGgqZsLr_qvEWrccejoWT-o";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);