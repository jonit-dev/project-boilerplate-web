interface IProps {
  label: string;
  value: string;
  variant: string;
  icon: React.ReactNode;
}

export const DashboardCard: React.FC<IProps> = ({
  label,
  value,
  variant,
  icon,
}) => {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${variant} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${variant} text-uppercase mb-1`}
              >
                {label}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {value}
              </div>
            </div>
            <div className="col-auto">{icon}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
