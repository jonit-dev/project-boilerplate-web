interface IProps {
  title: string;
  body: string;
  icon: React.ReactNode;
  variant?: string;
  isBold: boolean;
}

export const NavAlertOptionIcon: React.FC<IProps> = ({
  variant = "primary",
  title,
  body,
  icon,
  isBold,
}) => {
  return (
    <a className="dropdown-item d-flex align-items-center" href="#">
      <div className="mr-3">
        <div className={`icon-circle bg-${variant}`}>{icon}</div>
      </div>
      <div>
        <div className="small text-gray-500">{title}</div>
        <span className={isBold === true ? "font-weight-bold" : null}>
          {body}
        </span>
      </div>
    </a>
  );
};
