// File: supabaseClient.js

import { createClient } from "@supabase/supabase-js";

// ⚠️ THAY THẾ bằng thông tin dự án Supabase CỦA BẠN ⚠️
const supabaseUrl = "https://nkynjeccemwryiiqtfyz.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5reW5qZWNjZW13cnlpaXF0Znl6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMzE4NzQsImV4cCI6MjA3NzkwNzg3NH0.gRofhV88ag96uAO0I2FQsHprltQMwyMlF4kK9cStFBE";

// Tạo client kết nối duy nhất
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Bạn cũng cần cài đặt dependency: npm install @supabase/supabase-js
