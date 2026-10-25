-- ========================================================
-- BE GENIUS (be-genius) - Complete Supabase Setup Schema
-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/_/sql/new
-- ========================================================

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users ON DELETE CASCADE PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. User Roles Table (for Admin access)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users ON DELETE CASCADE NOT NULL,
  role TEXT CHECK (role IN ('admin', 'staff', 'customer')) DEFAULT 'customer',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, role)
);

-- 3. Store Settings Table
CREATE TABLE IF NOT EXISTS public.store_settings (
  id TEXT PRIMARY KEY DEFAULT 'default',
  store_name TEXT DEFAULT 'BE GENIUS',
  tagline TEXT DEFAULT 'Genius, by design.',
  logo_url TEXT,
  favicon_url TEXT,
  contact_email TEXT DEFAULT 'contact@begenius.com',
  contact_phone TEXT DEFAULT '+8801707197808',
  whatsapp_number TEXT DEFAULT '+8801707197808',
  address TEXT DEFAULT 'Dhaka, Bangladesh',
  facebook_url TEXT,
  instagram_url TEXT,
  tiktok_url TEXT,
  youtube_url TEXT,
  inside_dhaka_fee INTEGER DEFAULT 70,
  outside_dhaka_fee INTEGER DEFAULT 130,
  free_shipping_threshold INTEGER DEFAULT 2000,
  announcement_text TEXT DEFAULT 'Free Shipping Over ৳2000 | Cash On Delivery | 3-Day Easy Return | Premium Oversized Fit',
  announcement_active BOOLEAN DEFAULT TRUE,
  hero_title TEXT,
  hero_subtitle TEXT,
  hero_image_url TEXT,
  active_theme TEXT DEFAULT 'default',
  theme_config JSONB DEFAULT '{}'::jsonb,
  cart_upsell JSONB DEFAULT '{}'::jsonb,
  combo_discounts JSONB DEFAULT '{"mode": "tiers", "pants": 300, "hoodie": 200, "t-shirt": 100}'::jsonb,
  cost_tshirt INTEGER DEFAULT 0,
  cost_pant INTEGER DEFAULT 0,
  cost_hoodie INTEGER DEFAULT 0,
  cost_packing INTEGER DEFAULT 0,
  cost_return_penalty INTEGER DEFAULT 0,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default store settings if not exist
INSERT INTO public.store_settings (id, store_name, tagline, contact_phone, whatsapp_number)
VALUES ('default', 'BE GENIUS', 'Genius, by design.', '+8801707197808', '+8801707197808')
ON CONFLICT (id) DO NOTHING;

-- 4. Orders Table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_number TEXT,
  customer_name TEXT,
  customer_phone TEXT,
  customer_email TEXT,
  district TEXT,
  address TEXT,
  notes TEXT,
  subtotal NUMERIC DEFAULT 0,
  discount NUMERIC DEFAULT 0,
  delivery_fee NUMERIC DEFAULT 70,
  total NUMERIC DEFAULT 0,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'unpaid',
  payment_method TEXT DEFAULT 'cod',
  source TEXT DEFAULT 'web',
  pathao_consignment_id TEXT,
  steadfast_consignment_id TEXT,
  ip_address TEXT,
  shipped_at TIMESTAMPTZ,
  deleted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Order Items Table
CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  order_id UUID REFERENCES public.orders ON DELETE CASCADE,
  product_id TEXT,
  product_name TEXT,
  size TEXT,
  color TEXT,
  quantity INTEGER DEFAULT 1,
  unit_price NUMERIC DEFAULT 0,
  total_price NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Customer Reviews Table
CREATE TABLE IF NOT EXISTS public.customer_reviews (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  customer_name TEXT,
  rating INTEGER DEFAULT 5,
  comment TEXT,
  product_id TEXT,
  status TEXT DEFAULT 'approved',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Coupons Table
CREATE TABLE IF NOT EXISTS public.coupons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  code TEXT UNIQUE,
  discount_type TEXT DEFAULT 'percentage',
  discount_value NUMERIC DEFAULT 0,
  min_order_value NUMERIC DEFAULT 0,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Contact & Feedback Messages
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT,
  email TEXT,
  phone TEXT,
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. Trigger to automatically create profile on sign up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, created_at)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', split_part(NEW.email, '@', 1)),
    NOW()
  )
  ON CONFLICT (id) DO UPDATE
  SET email = EXCLUDED.email,
      full_name = COALESCE(EXCLUDED.full_name, public.profiles.full_name);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 10. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.store_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customer_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.coupons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 11. RLS Policies
-- Allow public read of store settings
CREATE POLICY "Public Read Store Settings" ON public.store_settings FOR SELECT USING (true);
CREATE POLICY "Public Read Reviews" ON public.customer_reviews FOR SELECT USING (true);
CREATE POLICY "Public Read Coupons" ON public.coupons FOR SELECT USING (active = true);

-- Allow public to place orders and submit messages
CREATE POLICY "Public Insert Orders" ON public.orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Order Items" ON public.order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Insert Messages" ON public.contact_messages FOR INSERT WITH CHECK (true);

-- Allow users to read and update their own profile
CREATE POLICY "Users can view own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Allow users to read their own user role
CREATE POLICY "Users can view own roles" ON public.user_roles FOR SELECT USING (auth.uid() = user_id);

-- Helper function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = auth.uid() AND role = 'admin'
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Admin Full Access Policies
CREATE POLICY "Admin Full Access Profiles" ON public.profiles FOR ALL USING (public.is_admin());
CREATE POLICY "Admin Full Access User Roles" ON public.user_roles FOR ALL USING (public.is_admin());
CREATE POLICY "Admin Full Access Store Settings" ON public.store_settings FOR ALL USING (public.is_admin());
CREATE POLICY "Admin Full Access Orders" ON public.orders FOR ALL USING (public.is_admin());
CREATE POLICY "Admin Full Access Order Items" ON public.order_items FOR ALL USING (public.is_admin());
CREATE POLICY "Admin Full Access Reviews" ON public.customer_reviews FOR ALL USING (public.is_admin());
CREATE POLICY "Admin Full Access Coupons" ON public.coupons FOR ALL USING (public.is_admin());
CREATE POLICY "Admin Full Access Messages" ON public.contact_messages FOR ALL USING (public.is_admin());
