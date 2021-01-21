import { useEffect, useState } from "react";

interface IProps {
  label: string;
  variant?: string;
  valueNow?: number;
  valueMin?: number;
  valueMax?: number;
}

export const DashboardProgressBar: React.FC<IProps> = ({
  label,
  variant = "primary",
  valueNow = 20,
  valueMin = 0,
  valueMax = 100,
}) => {
  return (
    <>
      <h4 className="small font-weight-bold">
        {label} <span className="float-right">{valueNow}%</span>
      </h4>
      <div className="progress mb-4">
        <div
          className={`progress-bar bg-${variant}`}
          role="progressbar"
          style={{ width: `${valueNow}%` }}
          aria-valuenow={valueNow}
          aria-valuemin={valueMin}
          aria-valuemax={valueMax}
        />
      </div>
    </>
  );
};
