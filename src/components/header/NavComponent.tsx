import Link from "next/link"

const linkObjects = [
    { href: "about", label: "About Us" },
    { href: "campaigns", label: "Campaigns" },
    { href: "#gallery", label: "Gallery" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
]

export default function NavComponent() {
  return (
        <ul>
            {linkObjects.map((link) => (
                <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                </li>
            ))}	
        </ul>
  )
}
