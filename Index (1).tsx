import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardOperations from "@/components/dashboard/DashboardOperations";
import DashboardOverview from "@/components/dashboard/DashboardOverview";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

const Index = () => {
  return (
    <main className="grid-shell min-h-screen px-4 py-6 text-foreground sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-5">
        <DashboardHeader />
        <DashboardOverview />

        <section className="grid gap-5 xl:grid-cols-[1.45fr_1fr]">
          <DashboardOperations />
          <DashboardSidebar />
        </section>
      </div>
    </main>
  );
};

export default Index;
