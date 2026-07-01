import { format } from "date-fns";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const USER_CONTRIBUTION_QUERY = `
  query($userName:String!) {
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              date
              contributionCount
              color
              weekday
            }
          }
        }
      }
    }
  }
`;

async function getContributions(userName: string) {
  const token = process.env.GITHUB_TOKEN;
  if (!token) return null;

  try {
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`,
      },
      body: JSON.stringify({
        query: USER_CONTRIBUTION_QUERY,
        variables: { userName },
      }),
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    return json?.data?.user;
  } catch (e) {
    console.error("Error fetching GitHub contributions:", e);
    return null;
  }
}

export async function GithubActivity() {
  const data = await getContributions("ma-hmuud");
  const monthsSet = new Set<string>();

  function getHeatColor(contributionCount: number) {
    if (contributionCount === 0) return "var(--heat-0)";
    if (contributionCount > 25) return "var(--heat-4)";
    if (contributionCount > 15) return "var(--heat-3)";
    if (contributionCount > 7) return "var(--heat-2)";
    if (contributionCount > 0) return "var(--heat-1)";
    return `var(--heat-${contributionCount})`;
  }

  return (
    <section id="github" className="py-24 relative bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Recent{" "}
            <span className="bg-linear-to-r from-accent to-blue-500 bg-clip-text text-transparent">
              Activity
            </span>
          </h2>
          <p className="text-muted-foreground">
            My open source contributions over the last year
          </p>
        </div>

        <div className="glass-panel p-6 sm:p-10 rounded-none overflow-x-auto shadow-xl flex justify-center">
          {!data ? (
            <div className="text-center p-12 text-muted-foreground">
              <p className="font-bold text-lg mb-2">
                GitHub Integration Pending
              </p>
              <p>
                Please add{" "}
                <code className="text-accent bg-accent/10 px-2 py-1 rounded-none font-mono">
                  GITHUB_TOKEN
                </code>{" "}
                to your{" "}
                <code className="text-accent bg-accent/10 px-2 py-1 rounded-none font-mono">
                  .env.local
                </code>{" "}
                file to view the interactive contribution graph.
              </p>
            </div>
          ) : (
            <div className="flex w-full max-w-5xl flex-col gap-3 justify-center overflow-x-auto">
              <TooltipProvider delayDuration={0}>
                <div className="flex gap-1">
                  {data.contributionsCollection.contributionCalendar.weeks.map(
                    (week: {
                      firstDay: string;
                      contributionDays: {
                        date: string;
                        contributionCount: number;
                      }[];
                    }) => {
                      const month = format(new Date(week.firstDay), "MMM");

                      function renderMonth() {
                        if (monthsSet.has(month)) {
                          return <p className="mb-1 h-4 text-xs opacity-0" />;
                        }
                        monthsSet.add(month);
                        return (
                          <p className="mb-1 h-4 text-xs text-muted-foreground">
                            {month}
                          </p>
                        );
                      }

                      return (
                        <div
                          key={new Date(week.firstDay).getTime()}
                          className="flex w-3 flex-col gap-1"
                        >
                          {renderMonth()}

                          {week.contributionDays.map(
                            (day: {
                              date: string;
                              contributionCount: number;
                            }) => (
                              <Tooltip
                                key={`${day.contributionCount}-${new Date(day.date).getTime()}`}
                              >
                                <TooltipTrigger asChild>
                                  <div
                                    className="hover:scale-150 hover:z-10 transition-transform cursor-pointer"
                                    style={{
                                      backgroundColor: getHeatColor(
                                        day.contributionCount,
                                      ),
                                      width: "12px",
                                      height: "12px",
                                      borderRadius: "0px",
                                    }}
                                  />
                                </TooltipTrigger>
                                <TooltipContent className="rounded-none border-border">
                                  <p>
                                    <span className="font-bold text-accent-foreground">
                                      {day.contributionCount}
                                    </span>{" "}
                                    contributions on{" "}
                                    <span className="text-muted-primary">
                                      {format(
                                        new Date(day.date),
                                        "MMM d, yyyy",
                                      )}
                                    </span>
                                  </p>
                                </TooltipContent>
                              </Tooltip>
                            ),
                          )}
                        </div>
                      );
                    },
                  )}
                </div>
              </TooltipProvider>

              <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row mt-4">
                <p className="text-muted-foreground text-sm font-medium">
                  {
                    data.contributionsCollection.contributionCalendar
                      .totalContributions
                  }{" "}
                  contributions in the last year
                </p>

                <div className="flex items-center gap-2">
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">
                    Less
                  </p>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-none"
                      style={{ backgroundColor: `var(--heat-${index})` }}
                    />
                  ))}
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">
                    More
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
