"use client";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Lock, Zap, Shield, BarChart3, Clock, CheckCircle2, Wallet, Users } from "lucide-react";
import { MOCK_SIGNALS, MOCK_STATS } from "@/lib/mock";
import { MarketTicker } from "@/components/market-ticker";


export default function Home() {
  const backgrounds = [
    "/images/a.jpg",
    "/images/b.jpg",
    "/images/c.jpg",
  ];

  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const signals = MOCK_SIGNALS.slice(0, 3);
  const fullText = "Make Informed Decisions.";
  const typingSpeed = 70;
  const pauseTime = 1500;

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && index <= fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, index));
        setIndex(index + 1);
      }, typingSpeed);
    }
    else if (!isDeleting && index > fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    }
    else if (isDeleting && index >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.substring(0, index));
        setIndex(index - 1);
      }, typingSpeed / 2);
    }
    else {
      setIsDeleting(false);
      setIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);


  return (
    <div className="flex flex-col min-h-screen font-sans">
      <MarketTicker />

      {/* Hero Section - Fintech Style */}
      <section className="pt-28 md:pt-36 pb-20 md:pb-32">

        {/* Background Layer */}
        {/* HERO BACKGROUND */}
        <div className="absolute inset-0 z-0 overflow-hidden">

          {backgrounds.map((bg, i) => (
            <div
              key={bg}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === bgIndex ? "opacity-100" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transform: "scale(1.05)",
              }}
            />
          ))}

          {/* LIGHT MODE OVERLAY */}
          <div className="absolute inset-0 bg-white/70 backdrop-blur-sm dark:hidden" />

          {/* DARK MODE OVERLAY */}
          <div className="absolute inset-0 hidden dark:block bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

        </div>

        {/* Background Grid & Spotlights */}
        {/* <div className="absolute inset-0 z-0 w-full h-full bg-background">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-[0.2]"></div>
          <div className="absolute top-0 left-0 right-0 h-[500px] w-full bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl opacity-40"></div>
        </div> */}
        <div className="relative min-h-[80vh] overflow-hidden">

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-8 items-start">

            {/* Left Column: Text & CTAs */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

              {/* Social Proof Pill (Left Aligned) */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider animate-in fade-in slide-in-from-bottom-4 duration-500">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Trusted by 10,000+ Traders
              </div>

              {/* Main Heading */}
              {/* Main Heading */}
              <div className="relative">

                <h1 className="font-heading font-bold tracking-tight text-foreground leading-tight max-w-4xl">

                  {/* First Line */}
                  <span className="block text-4xl sm:text-6xl md:text-7xl">
                    Trade Smarter.
                  </span>

                  {/* Second Line Animated */}
                  <span className="block mt-2 h-[1.2em] overflow-hidden text-3xl sm:text-5xl md:text-6xl">

                    <span className="inline-flex items-center whitespace-nowrap">
                      <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {displayText}
                      </span>
                      <span className="ml-2 w-[3px] h-[1em] bg-primary animate-pulse"></span>
                    </span>

                  </span>

                </h1>

                {/* Curvy Underline */}
                <svg
                  className="hidden lg:block absolute w-[120%] h-4 -bottom-2 -left-4 text-primary/20 -z-10"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 15 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>

              </div>


              {/* Subtext */}
              <p className="max-w-[35rem] text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Institutional-grade signals delivered to your dashboard and mobile.
                <span className="text-foreground font-medium"> 85% Win Rate</span> verified.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/trial" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full bg-primary text-primary-foreground font-bold shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all">
                    Start Free Trial
                  </Button>
                </Link>
                <Link href="/market" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 rounded-full border-border/50 bg-background/50 backdrop-blur-sm hover:bg-muted font-semibold group">
                    View Performance <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Live Tech Stats Strip */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-[10px] uppercase tracking-widest text-muted-foreground font-mono opacity-80 border-t border-border/50 pt-6 w-full">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  System Latency: 12ms
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse delay-75"></span>
                  AI Scanning: Active
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/50"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.74 1.18 0 2.21-.93 3.69-.93.95 0 1.88.34 2.67.93-2.43 1.5-2.05 5.56.44 6.59-.44 1.44-1.12 2.87-1.88 3.64zm-3.35-13.7c.56-1.5 2.53-2.62 4.41-2.5 0 1.78-1.78 3.59-4.41 2.5z" /></svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground/50"><path d="M3.5 19.5l4.5-8L3.5 19.5zm5.5-9.5l2.5-1.5L9 8.5zM12 2l-9 16 9 4 9-4L12 2zm1 18.5l-2.5-1.5L13 17l-2.5 2z" /></svg>
                  </div>
                  <span className="text-xs">App Available</span>
                </div>
              </div>
            </div>
            {/* Right Column: Hero Image */}
            <div className="relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-lg lg:sticky lg:top-24">

                <Image
                  src="/images/home.jpg"
                  alt="MSPK Trading Dashboard"
                  width={900}
                  height={700}
                  className="w-full h-auto rounded-3xl shadow-2xl border border-border/60"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Preivew (Moved Below Split Hero) */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 mt-16 lg:mt-12 flex flex-col items-center gap-10 text-center">

          {/* High-Fidelity Dashboard Mockup (Flat & Premium) */}
          <div className="relative w-full max-w-7xl mx-auto px-3 group mt-8">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>

            <div className="relative rounded-xl border border-border bg-card shadow-xl overflow-hidden ring-1 ring-white/5">
              {/* Terminal Header */}
              <div className="h-14 border-b border-border bg-muted/20 flex items-center justify-between px-6">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="h-4 w-[1px] bg-border mx-2"></div>
                  <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-background border border-border/50 text-foreground shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      MSPK Terminal v2.0
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex flex-col items-end leading-none">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Portfolio Value</span>
                    <span className="font-mono font-bold text-foreground">₹2,45,000.00</span>
                  </div>
                  <div className="flex flex-col items-end leading-none">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-bold">Today's P&L</span>
                    <span className="font-mono font-bold text-green-500">+₹12,450.00</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30"></div>
                </div>
              </div>

              {/* Main Trading Interface */}
              <div className="p-0 grid grid-cols-1 lg:grid-cols-4 h-[500px] divide-x divide-border">
                {/* Left: Market Watch */}
                <div className="hidden lg:flex col-span-1 flex-col bg-muted/5">
                  <div className="p-4 border-b border-border font-semibold text-sm flex justify-between items-center">
                    <span>Market Watch</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">Live</span>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    {[
                      { s: 'NIFTY 50', p: '21,750.45', c: '+1.2%', up: true },
                      { s: 'BANKNIFTY', p: '48,150.20', c: '-0.4%', up: false },
                      { s: 'RELIANCE', p: '2,850.00', c: '+0.8%', up: true },
                      { s: 'HDFCBANK', p: '1,640.10', c: '+0.2%', up: true },
                      { s: 'INFY', p: '1,520.00', c: '-1.1%', up: false },
                      { s: 'TATASTEEL', p: '135.40', c: '+2.4%', up: true },
                    ].map((ticker, i) => (
                      <div key={i} className="p-3 border-b border-border/50 hover:bg-muted/50 cursor-pointer transition-colors group/item relative">
                        {i === 0 && <div className="absolute inset-y-0 left-0 w-1 bg-primary"></div>}
                        <div className="flex justify-between items-start">
                          <span className="font-bold text-sm">{ticker.s}</span>
                          <span className={`font-mono text-sm ${ticker.up ? 'text-green-500' : 'text-red-500'}`}>{ticker.p}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                          <span className="text-[10px] text-muted-foreground border border-border/50 px-1 rounded">NSE</span>
                          <span className={`text-[10px] ${ticker.up ? 'text-green-500' : 'text-red-500'}`}>{ticker.c}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Center: Chart Area */}
                <div className="col-span-1 lg:col-span-2 flex flex-col bg-background relative">
                  {/* Chart Header */}
                  <div className="p-4 border-b border-border flex justify-between items-center bg-background/50 backdrop-blur">
                    <div className="flex items-baseline gap-2">
                      <h3 className="text-lg font-bold">NIFTY 50</h3>
                      <span className="text-xs text-muted-foreground">INDEX</span>
                    </div>
                    <div className="flex gap-1">
                      {['1m', '5m', '15m', '1H', '1D'].map(t => (
                        <div key={t} className={`px-3 py-1 rounded-md text-xs font-medium cursor-pointer ${t === '15m' ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground'}`}>{t}</div>
                      ))}
                    </div>
                  </div>

                  {/* Chart Viz */}
                  <div className="flex-1 relative w-full p-4 group-hover:scale-[1.01] transition-transform duration-700">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:50px_50px] opacity-[0.1]"></div>

                    {/* Simulated Candles (CSS or simplified SVG) - Using Area for elegance */}
                    <div className="w-full h-full relative">
                      <svg viewBox="0 0 800 300" className="w-full h-full" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path d="M0,250 C100,240 150,200 250,220 C350,240 400,100 500,120 C600,140 700,50 800,80 V300 H0 Z" fill="url(#chartGradient)" />
                        <path d="M0,250 C100,240 150,200 250,220 C350,240 400,100 500,120 C600,140 700,50 800,80" fill="none" stroke="hsl(var(--primary))" strokeWidth="2" />

                        {/* Simulated Moving Averages */}
                        <path d="M0,280 C150,260 300,200 500,180 C650,160 750,100 800,120" fill="none" stroke="hsl(var(--foreground))" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="4 4" />
                      </svg>

                      {/* Current Price Beacon */}
                      <div className="absolute right-0 top-[26%] flex items-center">
                        <div className="w-20 bg-primary text-primary-foreground text-xs font-bold py-1 px-2 rounded-l shadow-lg">21,750.45</div>
                        <div className="h-[1px] w-full bg-primary absolute right-0 top-1/2 -z-10 bg-opacity-50 border-t border-dashed border-primary/50 w-[800px]"></div>
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="h-16 border-t border-border flex items-center px-6 gap-4 bg-muted/10">
                    <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold text-lg h-10">BUY CALL</Button>
                    <div className="flex flex-col items-center px-4">
                      <span className="text-[10px] text-muted-foreground uppercase font-bold">Qty</span>
                      <span className="font-mono font-bold">50</span>
                    </div>
                    <Button className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold text-lg h-10">BUY PUT</Button>
                  </div>
                </div>

                {/* Right: Live Performance Stats */}
                <div className="col-span-1 bg-muted/5 border-l border-border flex flex-col">
                  <div className="p-4 border-b border-border font-semibold text-sm flex justify-between items-center bg-muted/10">
                    <span>Live Performance</span>
                    <BarChart3 className="h-4 w-4 text-amber-500 fill-current" />
                  </div>
                  <div className="p-5 space-y-6">
                    {/* Daily P&L */}
                    <div className="space-y-1">
                      <div className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Today's Earnings</div>
                      <div className="text-3xl font-mono font-bold text-green-500 flex items-center gap-2">
                        +₹24,500
                        <div className="text-[10px] bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded-full font-bold">+12.5%</div>
                      </div>
                    </div>

                    {/* Win Rate */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Win Rate</span>
                        <span className="font-bold text-foreground">82%</span>
                      </div>
                      <div className="h-2 w-full bg-border rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[82%] relative">
                          <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-card border border-border rounded-lg shadow-sm">
                        <div className="text-[10px] text-muted-foreground mb-1">Active Strats</div>
                        <div className="font-bold text-lg">4<span className="text-muted-foreground font-normal text-sm">/5</span></div>
                      </div>
                      <div className="p-3 bg-card border border-border rounded-lg shadow-sm">
                        <div className="text-[10px] text-muted-foreground mb-1">Total Vol</div>
                        <div className="font-bold text-lg">₹1.2Cr</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto p-4 border-t border-border bg-gradient-to-t from-primary/5 to-transparent">
                    <Link href="/trial">
                      <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                        Start Automating
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div >

        </div >
      </section >

      {/* Platform Ecosystem - SOW Features V3: Spotlight Zig-Zag (Alerts Prioritized) */}
      <section className="w-full max-w-7xl mx-auto px-4 py-32 relative z-10 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
          <div className="text-left max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-foreground leading-[1.1]">
              The Infrastructure of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient-x">Modern Trading</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold uppercase tracking-wider backdrop-blur-md shadow-xl">
              <Zap className="w-4 h-4 fill-current" />
              Powering Alpha
            </div>
            <p className="text-muted-foreground max-w-xl text-xl md:text-2xl leading-relaxed font-light text-left md:text-right">
              Discard the grid. We built a direct pipeline to the markets.
            </p>
          </div>
        </div>

        <div className="space-y-32">

          {/* Feature 1: Multi-Channel Alerts (HERO FEATURE) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 group">
            <div className="lg:w-1/2 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-500/50 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
                <Shield className="w-8 h-8 text-white fill-white/20" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                Multi-Channel Alerts
              </h3>
              <p className="text-lg text-muted-foreground leading-loose">
                Never miss a setup. Get instant notifications delivered to your preferred device the moment your strategy triggers.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10"><CheckCircle2 className="w-5 h-5 text-blue-500" /></div>
                  <span className="text-lg">WhatsApp, Telegram, & SMS</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-blue-500/10"><CheckCircle2 className="w-5 h-5 text-blue-500" /></div>
                  <span className="text-lg">&lt; 100ms Push Latency</span>
                </div>
              </div>
            </div>
            {/* Visual Mockup - Golden Notification Center (MATCHING ANALYTICS DIMENSIONS) */}
            <div className="lg:w-1/2 w-full lg:h-[400px] relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/20 to-yellow-500/5 rounded-[30px] blur-2xl opacity-60"></div>

              {/* Notification Card (Sized to match Analytics) */}
              <div className="relative h-full w-full bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-[20px] shadow-2xl overflow-hidden backdrop-blur-xl ring-1 ring-black/5 dark:ring-white/5 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-white/5">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center ring-2 ring-white dark:ring-black"><span className="text-white text-[10px] font-bold">WA</span></div>
                      <div className="w-8 h-8 rounded-full bg-[#229ED9] flex items-center justify-center ring-2 ring-white dark:ring-black"><span className="text-white text-[10px] font-bold">TG</span></div>
                    </div>
                    <span className="text-sm font-bold text-slate-900 dark:text-white/90">Alerts Webhook</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                </div>

                {/* Notifications List */}
                <div className="flex-1 p-6 space-y-4 overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-white dark:from-[#0a0a0a] to-transparent z-10"></div>

                  {/* Notification 1: WhatsApp */}
                  <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-lg flex gap-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer group/alert">
                    <div className="w-10 h-10 rounded-full bg-[#25D366]/10 dark:bg-[#25D366]/20 flex items-center justify-center shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center"><span className="text-white text-[10px] font-bold">WA</span></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-sm text-[#25D366]">WhatsApp</span>
                        <span className="text-[10px] text-slate-500 dark:text-white/40">Now</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-white/90 leading-snug">🚀 <b className="text-amber-600 dark:text-amber-400">NIFTY 50</b> crossed 24,500. <br />Signal: <span className="text-green-600 dark:text-green-400 font-bold">BUY CE</span></p>
                    </div>
                  </div>

                  {/* Notification 2: Telegram */}
                  <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-lg flex gap-4 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer group/alert">
                    <div className="w-10 h-10 rounded-full bg-[#229ED9]/10 dark:bg-[#229ED9]/20 flex items-center justify-center shrink-0">
                      <div className="w-6 h-6 rounded-full bg-[#229ED9] flex items-center justify-center"><span className="text-white text-[10px] font-bold">TG</span></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-bold text-sm text-[#229ED9]">Telegram Premium</span>
                        <span className="text-[10px] text-slate-500 dark:text-white/40">2m ago</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-white/90 leading-snug">Double Top detected on <b className="text-amber-600 dark:text-amber-400">BANKNIFTY</b> 15m chart. 📉</p>
                    </div>
                  </div>

                  {/* Notification 3: System */}
                  <div className="bg-amber-50 dark:bg-amber-500/10 p-4 rounded-xl border border-amber-200 dark:border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)] flex gap-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 w-1 h-full bg-amber-500"></div>
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm text-amber-600 dark:text-amber-500">System Alert</span>
                        <span className="text-[10px] text-slate-500 dark:text-white/40">5m ago</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-slate-600 dark:text-white/70">
                          <span>Daily P&L</span>
                          <span className="text-green-600 dark:text-green-400 font-mono font-bold">+₹14,250.00</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[75%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white dark:from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Analytics (Golden Colors) */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 group">
            {/* Visual Mockup */}
            <div className="lg:w-1/2 w-full lg:h-[400px] relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-yellow-600/20 rounded-[30px] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative h-full bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/10 rounded-[20px] shadow-2xl overflow-hidden p-8 flex items-end justify-center">
                {/* Bar Chart Visualization - Golden */}
                <div className="w-full flex items-end justify-between gap-2 h-48">
                  {[35, 55, 40, 70, 50, 85, 60, 95, 75, 50, 65, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-amber-500 dark:from-amber-600 to-yellow-400 rounded-t-sm opacity-80 hover:opacity-100 transition-all duration-300 hover:scale-y-105 origin-bottom shadow-[0_0_10px_rgba(245,158,11,0.3)]" style={{ height: `${h}%` }}></div>
                  ))}
                </div>
                <div className="absolute top-8 left-8">
                  <div className="text-sm text-slate-500 dark:text-white/50 uppercase tracking-wider mb-1">Total P&L</div>
                  <div className="text-4xl font-mono font-bold text-slate-900 dark:text-white">+₹4.2L</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-500/50 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                <TrendingUp className="w-8 h-8 text-white fill-white/20" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground">
                Deep Analytics
              </h3>
              <p className="text-lg text-muted-foreground leading-loose">
                Comprehensive trading journals and performance reports to optimize your edge.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/10"><CheckCircle2 className="w-5 h-5 text-purple-500" /></div>
                  <span className="text-lg">Strategy-wise Performance</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-purple-500/10"><CheckCircle2 className="w-5 h-5 text-purple-500" /></div>
                  <span className="text-lg">One-Click CSV/PDF Export</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Strip (Grid of 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
            {/* Strategy Engine - Demoted to Grid */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-primary/30 transition-all hover:-translate-y-2 group/card">
              <Zap className="w-8 h-8 text-primary mb-4 group-hover/card:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">Smart Strategy Engine</h4>
              <p className="text-sm text-muted-foreground mb-4">Run automated strategies in the cloud. Backtest against historical data.</p>
              <ul className="space-y-1">
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> Cloud Execution</li>
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-primary rounded-full"></div> 5-Year Backtesting</li>
              </ul>
            </div>

            {/* Latency */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-amber-500/30 transition-all hover:-translate-y-2 group/card">
              <BarChart3 className="w-8 h-8 text-amber-500 mb-4 group-hover/card:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">Ultra-Low Latency</h4>
              <p className="text-sm text-muted-foreground mb-4">Powered by institutional feeds (Polygon.io, DxFeed) for microsecond-level precision.</p>
              <ul className="space-y-1">
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> &lt; 1ms Tick Delivery</li>
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full"></div> Real-time Data</li>
              </ul>
            </div>

            {/* Security */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-red-500/30 transition-all hover:-translate-y-2 group/card">
              <Lock className="w-8 h-8 text-red-500 mb-4 group-hover/card:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">Enterprise Security</h4>
              <p className="text-sm text-muted-foreground mb-4">Your data and API keys are protected with bank-grade encryption and protocols.</p>
              <ul className="space-y-1">
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> JWT & Refresh Tokens</li>
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-red-500 rounded-full"></div> Encrypted Storage</li>
              </ul>
            </div>

            {/* Mobile */}
            <div className="p-6 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-indigo-500/30 transition-all hover:-translate-y-2 group/card">
              <Clock className="w-8 h-8 text-indigo-500 mb-4 group-hover/card:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">Frontend & Mobile</h4>
              <p className="text-sm text-muted-foreground mb-4">Seamless experience across Web and Mobile App (Flutter) with real-time sync.</p>
              <ul className="space-y-1">
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div> Next.js + Tailwind Web</li>
                <li className="text-xs text-foreground/70 flex items-center gap-2"><div className="w-1 h-1 bg-indigo-500 rounded-full"></div> Native iOS & Android</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full max-w-7xl mx-auto px-4 py-32 relative z-10 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1000px] bg-gradient-to-b from-primary/5 via-transparent to-transparent -z-10 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
          <div className="text-left max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-foreground leading-[1.1]">
              Choose your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary animate-gradient-x">Trading Edge</span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold uppercase tracking-wider backdrop-blur-md shadow-xl">
              <Wallet className="w-4 h-4 fill-current" />
              Simple Pricing
            </div>
            <p className="text-muted-foreground max-w-xl text-xl md:text-2xl leading-relaxed font-light text-left md:text-right">
              Transparent pricing. No hidden fees. Just results.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          {/* Demo Plan */}
          <div className="relative p-8 rounded-3xl border border-white/10 bg-white dark:bg-white/5 shadow-xl flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Demo Access</h3>
              <p className="text-sm text-slate-500 dark:text-white/60">Perfect for testing the waters</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">Free</span>
              <span className="text-sm text-slate-500 dark:text-white/40"> / 1 Day</span>
            </div>
            <ul className="space-y-4 mb-8 text-left w-full max-w-[240px] mx-auto">
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-green-500" /> Unlimited Strategies</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-green-500" /> &lt; 100ms Latency</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-green-500" /> Deep Analytics & Export</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-green-500" /> Priority 24/7 Support</li>
            </ul>
            <div className="mt-auto w-full">
              <Link href="/trial">
                <Button size="lg" variant="outline" className="w-full border-slate-200 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white">Start 1-Day Trial</Button>
              </Link>
            </div>
          </div>

          {/* Pro Plan (Highlighted - Hero) */}
          <div className="relative p-8 rounded-3xl border border-amber-500/50 bg-slate-50 dark:bg-[#0a0a0a] shadow-2xl shadow-amber-500/20 flex flex-col items-center text-center ring-1 ring-amber-500/50 z-10 scale-105 transform">
            <div className="absolute top-0 -translate-y-1/2 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-lg">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Pro Access</h3>
              <p className="text-sm text-slate-500 dark:text-white/60">For serious algorithmic traders</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">₹25,000</span>
              <span className="text-sm text-slate-500 dark:text-white/40"> / Month</span>
            </div>
            <ul className="space-y-4 mb-8 text-left w-full max-w-[240px] mx-auto">
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Unlimited Strategies</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-500" /> &lt; 100ms Latency</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Deep Analytics & Export</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Priority 24/7 Support</li>
            </ul>
            <div className="mt-auto w-full">
              <Link href="/pricing">
                <Button size="lg" className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-black font-bold shadow-lg shadow-amber-500/25">Get Started</Button>
              </Link>
            </div>
          </div>

          {/* Enterprise Plan (New) */}
          <div className="relative p-8 rounded-3xl border border-white/10 bg-white dark:bg-white/5 shadow-xl flex flex-col items-center text-center hover:translate-y-[-4px] transition-transform duration-300">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Enterprise</h3>
              <p className="text-sm text-slate-500 dark:text-white/60">For Prop Desks & Funds</p>
            </div>
            <div className="mb-8">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
              <span className="text-sm text-slate-500 dark:text-white/40"> / Pricing</span>
            </div>
            <ul className="space-y-4 mb-8 text-left w-full max-w-[240px] mx-auto">
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><Shield className="w-4 h-4 text-indigo-500" /> Dedicated Infrastructure</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> White Label Solution</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> FIX API Access</li>
              <li className="flex items-center gap-3 text-sm text-slate-600 dark:text-white/80"><CheckCircle2 className="w-4 h-4 text-indigo-500" /> Dedicated Account Manager</li>
            </ul>
            <div className="mt-auto w-full">
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full border-slate-200 dark:border-white/20 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Social Proof */}
      <section className="w-full max-w-7xl mx-auto px-4 py-32 relative z-10 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-32">
          <div className="text-left max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tighter text-foreground leading-[1.1]">
              Trusted by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/60 to-primary animate-gradient-x">
                10,000+ Traders
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-6 w-full md:w-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-semibold uppercase tracking-wider backdrop-blur-md shadow-xl">
              <Users className="w-4 h-4 fill-current" />
              Social Proof
            </div>
            <p className="text-muted-foreground max-w-xl text-xl md:text-2xl leading-relaxed font-light text-left md:text-right">
              Don't just take our word for it. See what the community says.
            </p>
          </div>
        </div>

        {/* Premium Infinite Testimonials */}
        <div className="relative w-full overflow-hidden py-12">

          {/* Soft fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent z-10" />

          <div className="marquee">

            {/* First Group */}
            <div className="marquee-group flex gap-8">

              {[
                {
                  name: "Rahul S.",
                  role: "Pro Trader • Mumbai",
                  text: "Recovered my past losses in 2 months. Transparent P&L reporting changed everything.",
                  initials: "RS",
                  color: "from-amber-400 to-orange-500"
                },
                {
                  name: "Priya M.",
                  role: "Algo Developer • Bangalore",
                  text: "Execution feels like direct exchange connectivity.",
                  initials: "PM",
                  color: "from-blue-400 to-indigo-500"
                },
                {
                  name: "Arjun K.",
                  role: "Swing Trader • Delhi",
                  text: "No repainting. What you see live is real.",
                  initials: "AK",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  name: "Sneha T.",
                  role: "Options Trader • Pune",
                  text: "Multi-channel alerts keep me ahead daily.",
                  initials: "ST",
                  color: "from-purple-400 to-violet-500"
                },
                {
                  name: "Vikram P.",
                  role: "Full-Time Trader • Hyderabad",
                  text: "Analytics refined my strategy massively.",
                  initials: "VP",
                  color: "from-cyan-400 to-blue-500"
                },
                {
                  name: "Neha D.",
                  role: "Intraday Trader • Jaipur",
                  text: "Clean UI. Real performance. Zero noise.",
                  initials: "ND",
                  color: "from-sky-400 to-indigo-400"
                }
              ].map((review, i) => (
                <div
                  key={`first-${i}`}
                  className="flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] p-8 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg"
                >
                  <p className="text-base text-slate-700 dark:text-white/80 italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold`}>
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {review.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {review.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

            {/* Second Group (Duplicate for seamless loop) */}
            <div className="marquee-group flex gap-8">

              {[
                {
                  name: "Rahul S.",
                  role: "Pro Trader • Mumbai",
                  text: "Recovered my past losses in 2 months. Transparent P&L reporting changed everything.",
                  initials: "RS",
                  color: "from-amber-400 to-orange-500"
                },
                {
                  name: "Priya M.",
                  role: "Algo Developer • Bangalore",
                  text: "Execution feels like direct exchange connectivity.",
                  initials: "PM",
                  color: "from-blue-400 to-indigo-500"
                },
                {
                  name: "Arjun K.",
                  role: "Swing Trader • Delhi",
                  text: "No repainting. What you see live is real.",
                  initials: "AK",
                  color: "from-green-400 to-emerald-500"
                },
                {
                  name: "Sneha T.",
                  role: "Options Trader • Pune",
                  text: "Multi-channel alerts keep me ahead daily.",
                  initials: "ST",
                  color: "from-purple-400 to-violet-500"
                },
                {
                  name: "Vikram P.",
                  role: "Full-Time Trader • Hyderabad",
                  text: "Analytics refined my strategy massively.",
                  initials: "VP",
                  color: "from-cyan-400 to-blue-500"
                },
                {
                  name: "Neha D.",
                  role: "Intraday Trader • Jaipur",
                  text: "Clean UI. Real performance. Zero noise.",
                  initials: "ND",
                  color: "from-sky-400 to-indigo-400"
                }
              ].map((review, i) => (
                <div
                  key={`second-${i}`}
                  className="flex-shrink-0 w-[300px] sm:w-[380px] md:w-[420px] p-8 rounded-3xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-black/5 dark:border-white/10 shadow-lg"
                >
                  <p className="text-base text-slate-700 dark:text-white/80 italic mb-8 leading-relaxed">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.color} flex items-center justify-center text-white font-bold`}>
                      {review.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">
                        {review.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {review.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>

          </div>
        </div>






      </section>
    </div >
  );
}



