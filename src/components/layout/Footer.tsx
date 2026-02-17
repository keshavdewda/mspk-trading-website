import Link from 'next/link'
import { Twitter, Github, Linkedin, Instagram, ArrowRight, Zap } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="w-full bg-white dark:bg-black border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">

            {/* Subtle Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-gradient-to-b from-amber-500/5 via-transparent to-transparent -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">

                {/* CTA Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10 pb-8 border-b border-slate-200 dark:border-white/5">

                    <div className="text-center md:text-left">
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                            Ready to modernize your trading?
                        </h3>
                        <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                            Join 10,000+ traders running on our infrastructure.
                        </p>
                    </div>

                    <Link href="/trial">
                        <button className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold hover:from-amber-600 hover:to-yellow-600 transition-all shadow-md">
                            Start Free Trial <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 text-sm">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-amber-400 to-yellow-600 flex items-center justify-center text-white">
                                <Zap className="w-4 h-4 fill-current" />
                            </div>
                            <span className="text-lg font-bold text-slate-900 dark:text-white">
                                MSPK
                            </span>
                        </Link>

                        <p className="text-xs leading-relaxed mb-4 max-w-xs text-slate-600 dark:text-slate-400">
                            Institutional-grade infrastructure for modern traders.
                        </p>

                        <div className="flex gap-3">
                            {[Twitter, Github, Linkedin, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="p-2 rounded-full bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors">
                                    <Icon className="w-4 h-4 text-slate-700 dark:text-white" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Platform */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                            Platform
                        </h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li><Link href="/features" className="hover:text-amber-500">Features</Link></li>
                            <li><Link href="/pricing" className="hover:text-amber-500">Pricing</Link></li>
                            <li><Link href="/api" className="hover:text-amber-500">API</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                            Company
                        </h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li><Link href="/about" className="hover:text-amber-500">About</Link></li>
                            <li><Link href="/blog" className="hover:text-amber-500">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-amber-500">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="font-semibold mb-4 text-slate-900 dark:text-white">
                            Legal
                        </h4>
                        <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                            <li><Link href="/privacy" className="hover:text-amber-500">Privacy</Link></li>
                            <li><Link href="/terms" className="hover:text-amber-500">Terms</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <p>Â© 2026 MSPK Trading Technologies</p>

                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        All Systems Operational
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
