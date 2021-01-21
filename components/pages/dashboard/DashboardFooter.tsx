import { appEnv } from "../../../constants/appEnv";

export const DashboardFooter: React.FC = () => {
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>
            Copyright © {appEnv.general.name} {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
};
