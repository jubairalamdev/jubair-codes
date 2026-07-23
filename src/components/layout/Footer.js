import { siteConfig } from "@/constants/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 text-center">
      <p className="text-sm text-secondary">
        &copy; {year} {siteConfig.name}. All rights reserved.
      </p>
    </footer>
  );
}
