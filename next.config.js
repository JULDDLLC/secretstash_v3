@@ .. @@
 /** @type {import('next').NextConfig} */
 const nextConfig = {
   output: 'export',
   eslint: {
     ignoreDuringBuilds: true,
   },
   images: { unoptimized: true },
-  webpack: (config) => {
-config.optimization.minimize = false;
-return config;
-},
+  trailingSlash: true,
+  webpack: (config, { isServer }) => {
+    // Disable webpack optimization for better compatibility
+    config.optimization.minimize = false;
+    
+    // Handle module resolution issues
+    config.resolve.fallback = {
+      ...config.resolve.fallback,
+      fs: false,
+      net: false,
+      tls: false,
+    };
+    
+    // Fix for potential module issues
+    config.module.rules.push({
+      test: /\.m?js$/,
+      type: 'javascript/auto',
+      resolve: {
+        fullySpecified: false,
+      },
+    });
+    
+    return config;
+  },
 };
 
 module.exports = nextConfig;