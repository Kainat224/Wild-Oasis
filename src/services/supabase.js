import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://xnppcnvkjrdeokjlvqit.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhucHBjbnZranJkZW9ramx2cWl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgxNjMwMjUsImV4cCI6MjAxMzczOTAyNX0.CV0EH6C-Y2YXd8ftFF3IYk9Dzh4hSIbTDOaBZgsntGk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
