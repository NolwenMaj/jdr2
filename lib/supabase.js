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

const supabaseUrl = "https://rwamfmudexgndvdhauxv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3YW1mbXVkZXhnbmR2ZGhhdXh2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQxNTc0NzgsImV4cCI6MTk5OTczMzQ3OH0.5ulQULR_ul5l2hCB5R24JKb7dCL956F1RIRGKMaxShI";

const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: ExpoSecureStoreAdapter,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

export { supabase };
