export function SidebarFooter() {
    const links = ["Help", "Status", "About", "Careers", "Privacy", "Terms"];

    return (
        <footer className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted font-medium">
            {links.map((link) => (
                <a key={link} href="#" className="hover:text-foreground transition-colors">
                    {link}
                </a>
            ))}
        </footer>
    );
}
