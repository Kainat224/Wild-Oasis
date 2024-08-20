import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://wcpsbdjzjwwerogrhshf.supabase.co'

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjcHNiZGp6and3ZXJvZ3Joc2hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQwNzgxMjMsImV4cCI6MjAzOTY1NDEyM30.zHf1Emy2RpewEVWsGytplPq5QJERazyJ9qbIF3w_h-0"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;

// import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://xnppcnvkjrdeokjlvqit.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucHBjbnZranJkZW9ramx2cWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNjMwMjUsImV4cCI6MjAxMzczOTAyNX0.CV0EH6C-Y2YXd8ftFF3IYk9Dzh4hSIbTDOaBZgsntGk";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;
