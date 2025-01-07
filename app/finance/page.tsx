import FinanceDashboard from '@/components/Finance/FinanceDashboard';

const FinancePage = () => {
  return (
    <div className="min-h-screen bg-background-light dark:bg-darkModeGray text-neutral-dark dark:text-neutral-light">
      <FinanceDashboard />
    </div>
  );
};

export default FinancePage;
