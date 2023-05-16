import "react-native-url-polyfill/auto";
const SecureStore = require("expo-secure-store");
const createClient = require("@supabase/supabase-js").createClient;

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key);
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value);
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key);
  },
};

const supabaseUrl = "https://quwgpyboaazwkvnopsqv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF1d2dweWJvYWF6d2t2bm9wc3F2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNDA4NjgsImV4cCI6MTk5OTgxNjg2OH0.iDlOaIpRmoCYBI95HN2BmpiPj_zqYP3sSBj_wlpFlG8";

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export { supabase };
