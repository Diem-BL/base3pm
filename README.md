 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 6e24d63888f587f18c54353083523f91cb038f42..91d6f9cec55a2443f62d963ec14ca8b713c7ac4a 100644
--- a/README.md
+++ b/README.md
@@ -1,20 +1,24 @@
 # Base44 App
 
 
 This app was created automatically by Base44.
 It's a Vite+React app that communicates with the Base44 API.
 
 ## Running the app
 
 ```bash
 npm install
 npm run dev
 ```
 
 ## Building the app
 
 ```bash
 npm run build
 ```
 
-For more information and support, please contact Base44 support at app@base44.com.
\ No newline at end of file
+For more information and support, please contact Base44 support at app@base44.com.
+
+## Contributing / sharing updates
+
+You do not need to copy-and-paste these files into GitHub manually. Make your changes in this repository, commit them on a branch, and open a pull request in GitHub so reviewers can see the diff.
 
EOF
)
