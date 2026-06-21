import { footerLinkGroups, socialLinks } from "../data/mockData";

/** Site footer — quick links, social channels, and legal line. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-bg-secondary border-t border-border">
      <div className="container py-14 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2 w-fit">
              <span className="flex items-center justify-center w-9 h-9 bg-red-arena">
                <span className="font-display font-bold text-lg text-text-white">B</span>
              </span>
              <span className="font-display font-bold text-xl tracking-wide uppercase">
                Bot<span className="text-red-arena">League</span>
              </span>
            </a>
            <p className="text-sm text-text-gray leading-relaxed max-w-xs">
              India's national platform for robotics competition — structured
              events, verified rankings, and a clear path from first build to
              the league.
            </p>
            <div className="flex items-center gap-3 mt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex items-center justify-center w-9 h-9 border border-border text-text-gray hover:text-text-white hover:border-red-arena transition-colors duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {footerLinkGroups.map((group) => (
              <div key={group.id} className="flex flex-col gap-3">
                <span className="font-display text-sm font-semibold uppercase tracking-wide text-text-white">
                  {group.title}
                </span>
                <ul className="flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-text-gray hover:text-red-arena transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-gray font-mono">
            © {year} BotLeague. All rights reserved.
          </p>
          <p className="text-xs text-text-gray font-mono">Made for builders, across India.</p>
        </div>
      </div>
    </footer>
  );
}
