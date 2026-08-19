import {
  AlertCircleIcon,
  AlertTriangleIcon,
  BarChart3Icon,
  CheckCircle2Icon,
  ChevronDownIcon,
  ClockIcon,
  FolderKanbanIcon,
  LayoutDashboardIcon,
  PlusIcon,
  SearchIcon,
  SparklesIcon,
  TrendingUpIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const INITIAL_WORKLOADS = [
  {
    id: "design",
    name: "Product Design",
    load: 88,
    members: "Alex, Sarah, Leo",
    status: "Overload",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    barColor: "bg-gradient-to-r from-amber-500 to-orange-500",
  },
  {
    id: "eng",
    name: "Core Engineering",
    load: 64,
    members: "Dave, Priya, Ken +4",
    status: "Optimal",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    barColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    load: 76,
    members: "Marcus, Chen",
    status: "Heavy",
    statusColor: "text-indigo-400 bg-indigo-400/10 border-indigo-400/20",
    barColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    id: "growth",
    name: "Growth & Marketing",
    load: 42,
    members: "Elena, Zoe",
    status: "Balanced",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    barColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
];

const REBALANCED_WORKLOADS = [
  {
    id: "design",
    name: "Product Design",
    load: 68,
    members: "Alex, Sarah, Leo",
    status: "Balanced",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    barColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
  {
    id: "eng",
    name: "Core Engineering",
    load: 65,
    members: "Dave, Priya, Ken +4",
    status: "Optimal",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    barColor: "bg-gradient-to-r from-blue-500 to-indigo-500",
  },
  {
    id: "mobile",
    name: "Mobile Apps",
    load: 62,
    members: "Marcus, Chen",
    status: "Optimal",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    barColor: "bg-gradient-to-r from-indigo-500 to-purple-500",
  },
  {
    id: "growth",
    name: "Growth & Marketing",
    load: 54,
    members: "Elena, Zoe",
    status: "Balanced",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    barColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
  },
];

export default function DashboardPreview({ className }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [workloads, setWorkloads] = useState(INITIAL_WORKLOADS);
  const [isRebalanced, setIsRebalanced] = useState(false);
  const [isRebalancing, setIsRebalancing] = useState(false);
  const [animateBars, setAnimateBars] = useState(false);
  const [easterEgg, setEasterEgg] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateBars(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleRebalance = () => {
    setIsRebalancing(true);
    setTimeout(() => {
      setWorkloads(isRebalanced ? INITIAL_WORKLOADS : REBALANCED_WORKLOADS);
      setIsRebalanced(!isRebalanced);
      setIsRebalancing(false);
    }, 500);
  };

  const handleLogoClick = () => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      setEasterEgg(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex w-full flex-col overflow-hidden rounded-xl bg-card text-foreground select-none",
        className
      )}
      role="region"
      aria-label="FlowPilot Product Interface Demo"
    >
      {/* ── Top Window Bar (Chrome) ── */}
      <div className="flex h-11 w-full items-center justify-between border-b border-border/40 bg-card/60 px-4">
        {/* Mac traffic lights */}
        <div className="flex items-center gap-2">
          <div className="size-3 rounded-full bg-[#FF5F56]/80" />
          <div className="size-3 rounded-full bg-[#FFBD2E]/80" />
          <div className="size-3 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 hidden text-xs text-muted-foreground sm:inline-block">
            flowpilot.workspace / Alex Kim
          </span>
        </div>

        {/* Center Search Pill */}
        <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-1 text-xs text-muted-foreground">
          <SearchIcon className="size-3" />
          <span className="hidden sm:inline">Search projects, signals, team capacity...</span>
          <span className="sm:hidden">Search...</span>
          <kbd className="ml-2 rounded bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground">
            ⌘K
          </kbd>
        </div>

        {/* Live sync indicator */}
        <div className="flex items-center gap-2">
          <span className="flex size-2">
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            </span>
          </span>
          <span className="hidden text-xs font-medium text-emerald-400 md:inline-block">
            Live Sync
          </span>
        </div>
      </div>

      {/* ── Main Workspace Body ── */}
      <div className="flex min-h-[500px] w-full">
        {/* Left Sidebar */}
        <aside className="hidden w-52 shrink-0 flex-col justify-between border-r border-border/40 bg-muted/10 p-4 md:flex">
          <div className="flex flex-col gap-6">
            {/* Workspace Brand Dropdown */}
            <button
              onClick={handleLogoClick}
              className="flex items-center justify-between rounded-lg border border-border/40 bg-card p-2 text-left transition-colors hover:bg-muted/50"
              title="Click 5 times for Easter Egg"
            >
              <div className="flex items-center gap-2">
                <div className="flex size-7 items-center justify-center rounded-md bg-foreground text-background font-bold">
                  <ZapIcon className="size-3.5" />
                </div>
                <div>
                  <div className="text-xs font-semibold">Acme Product</div>
                  <div className="text-[10px] text-muted-foreground">18 members</div>
                </div>
              </div>
              <ChevronDownIcon className="size-3.5 text-muted-foreground" />
            </button>

            {/* Main Navigation */}
            <nav className="flex flex-col gap-1">
              <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Workspace
              </div>
              <button
                onClick={() => setActiveTab("overview")}
                className={cn(
                  "flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                  activeTab === "overview"
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <LayoutDashboardIcon className="size-3.5" />
                  <span>Overview</span>
                </div>
                <span className="rounded bg-primary/10 px-1.5 py-0.2 text-[10px] font-medium text-foreground">
                  Live
                </span>
              </button>

              <button
                onClick={() => setActiveTab("projects")}
                className={cn(
                  "flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                  activeTab === "projects"
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <FolderKanbanIcon className="size-3.5" />
                  <span>Projects</span>
                </div>
                <span className="text-[10px] text-muted-foreground">12</span>
              </button>

              <button
                onClick={() => setActiveTab("signals")}
                className={cn(
                  "flex items-center justify-between rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                  activeTab === "signals"
                    ? "bg-accent text-accent-foreground font-semibold"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-2">
                  <SparklesIcon className="size-3.5" />
                  <span>AI Signals</span>
                </div>
                <span className="rounded-full bg-brand/20 px-1.5 py-0.2 text-[10px] font-semibold text-brand">
                  3 new
                </span>
              </button>
            </nav>

            {/* Department Status */}
            <div className="flex flex-col gap-1.5">
              <div className="px-2 pb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Department Capacity
              </div>
              <div className="flex items-center justify-between rounded-md px-2 py-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-amber-400" /> Design
                </span>
                <span className="text-[11px] font-mono text-amber-400">{workloads[0].load}%</span>
              </div>
              <div className="flex items-center justify-between rounded-md px-2 py-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-blue-400" /> Engineering
                </span>
                <span className="text-[11px] font-mono text-blue-400">{workloads[1].load}%</span>
              </div>
              <div className="flex items-center justify-between rounded-md px-2 py-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-indigo-400" /> Mobile
                </span>
                <span className="text-[11px] font-mono text-indigo-400">{workloads[2].load}%</span>
              </div>
            </div>
          </div>

          {/* User Profile */}
          <div className="flex items-center gap-2 rounded-lg border border-border/40 bg-card p-2">
            <div className="flex size-7 items-center justify-center rounded-full bg-secondary text-xs font-semibold">
              AK
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="truncate text-xs font-semibold">Alex Kim</span>
              <span className="truncate text-[10px] text-muted-foreground">Lead Coordinator</span>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex flex-1 flex-col overflow-hidden p-5 sm:p-6">
          {/* Header Banner */}
          <div className="mb-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold tracking-tight sm:text-xl">
                  Good morning, Alex
                </h2>
                <span className="rounded-full border border-border/60 bg-muted/40 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                  Sprint Week 3
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Here&apos;s what needs your attention today across your 4 teams.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleRebalance}
                disabled={isRebalancing}
                className="flex items-center gap-1.5 rounded-md border border-border/60 bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-secondary/80"
              >
                <SparklesIcon className="size-3 text-brand" />
                <span>{isRebalancing ? "Optimizing..." : isRebalanced ? "Reset" : "AI Auto-Balance"}</span>
              </button>
              <button className="flex items-center gap-1 rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground shadow-xs transition-opacity hover:opacity-90">
                <PlusIcon className="size-3" />
                <span>New Project</span>
              </button>
            </div>
          </div>

          {/* Row 1: Key Metric Cards */}
          <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg border border-border/40 bg-card p-3.5 shadow-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">Active Projects</span>
                <FolderKanbanIcon className="size-3.5" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight">12</span>
                <span className="text-xs font-semibold text-emerald-400">↑ 2 done</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-400" /> 10 on schedule
                <span className="ml-2 size-1.5 rounded-full bg-amber-400" /> 2 review
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg border border-border/40 bg-card p-3.5 shadow-xs">
              <div className="flex items-center justify-between text-muted-foreground">
                <span className="text-xs font-medium">On Track</span>
                <TrendingUpIcon className="size-3.5 text-emerald-400" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight">
                  {isRebalanced ? "96%" : "84%"}
                </span>
                <span className="text-xs font-semibold text-emerald-400">
                  {isRebalanced ? "+12% leveled" : "↑ 3% this week"}
                </span>
              </div>
              <div className="mt-2 text-[11px] text-muted-foreground">
                18 of 22 milestones green
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg border border-amber-500/20 bg-amber-500/[0.04] p-3.5 shadow-xs">
              <div className="flex items-center justify-between text-amber-400">
                <span className="text-xs font-medium">Needs Attention</span>
                <AlertCircleIcon className="size-3.5" />
              </div>
              <div className="mt-1.5 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-amber-400">
                  {isRebalanced ? "0" : "2"}
                </span>
                <span className="text-xs text-amber-400/80">
                  {isRebalanced ? "All clear" : "Suggested review"}
                </span>
              </div>
              <div className="mt-2 text-[11px] text-amber-400/80">
                {isRebalanced ? "Workload distributed evenly" : "Design workload trending high"}
              </div>
            </div>
          </div>

          {/* Row 2: Grid with Team Workload & Signature FlowPilot AI Insight */}
          <div className="grid grid-cols-1 gap-3.5 lg:grid-cols-12">
            {/* Team Workload Card (7 cols) */}
            <div className="flex flex-col justify-between rounded-lg border border-border/40 bg-card p-4 shadow-xs lg:col-span-7">
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <UsersIcon className="size-3.5 text-muted-foreground" />
                    <h3 className="text-xs font-bold uppercase tracking-wider">Team workload</h3>
                  </div>
                  <span className="text-[10px] text-muted-foreground">This week</span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  A clearer view of where work is moving.
                </p>

                {/* Workload progress bars */}
                <div className="mt-3.5 flex flex-col gap-3">
                  {workloads.map((team) => (
                    <div key={team.id} className="flex flex-col gap-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium">{team.name}</span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-muted-foreground hidden sm:inline">{team.members}</span>
                          <span
                            className={cn(
                              "rounded px-1.5 py-0.2 text-[10px] font-semibold border",
                              team.statusColor
                            )}
                          >
                            {team.load}%
                          </span>
                        </div>
                      </div>
                      {/* Bar */}
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                        <div
                          className={cn(
                            "h-full rounded-full transition-all duration-700 ease-out",
                            team.barColor
                          )}
                          style={{
                            width: animateBars ? `${team.load}%` : "0%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action hint */}
              <div className="mt-3.5 flex items-center justify-between border-t border-border/30 pt-2.5 text-[10px] text-muted-foreground">
                <span>Safe capacity: 60% – 75%</span>
                <button
                  onClick={handleRebalance}
                  className="font-medium text-foreground transition-colors hover:underline"
                >
                  {isRebalanced ? "Reset allocation" : "Review workload →"}
                </button>
              </div>
            </div>

            {/* Signature FlowPilot AI Insight Card (5 cols) */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-lg border border-brand/40 bg-brand/5 p-4 shadow-xs lg:col-span-5">
              <div>
                {/* Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-brand">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-brand" />
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider">✦ FlowPilot Insight</span>
                  </div>
                  <SparklesIcon className="size-3 text-brand opacity-70" />
                </div>

                {/* Diagnosis Text */}
                <div className="mt-2.5">
                  <h4 className="text-xs font-semibold leading-snug">
                    {easterEgg
                      ? "You found the FlowPilot Secret Mode!"
                      : isRebalanced
                      ? "Workload leveled across active designers."
                      : "Design workload is trending higher this week."}
                  </h4>
                  <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                    {easterEgg
                      ? "FlowPilot AI detected your curiosity. Teams that explore deeper ship 40% faster."
                      : isRebalanced
                      ? "Design System v2 milestone is now on track for Thursday completion."
                      : "3 active projects are approaching their next milestone."}
                  </p>
                </div>
              </div>

              {/* Action Box */}
              <div className="mt-3 rounded-md border border-border/40 bg-card/80 p-2.5">
                <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Suggested Action
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs font-medium">
                    {isRebalanced ? "Workload balanced" : "Review workload distribution"}
                  </span>
                  <button
                    onClick={handleRebalance}
                    className="text-xs font-semibold text-brand hover:underline"
                  >
                    {isRebalanced ? "Reset" : "Review →"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
