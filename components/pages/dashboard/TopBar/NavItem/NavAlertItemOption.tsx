interface IProps {
  date: string;
  text: string;
  icon: React.ReactNode;
  variant?: string;
  isBold: boolean;
}

export const NavAlertItemOption: React.FC<IProps> = ({
  variant = "primary",
  date,
  text,
  icon,
  isBold,
}) => {
  return (
    <a className="dropdown-item d-flex align-items-center" href="#">
      <div className="mr-3">
        <div className={`icon-circle bg-${variant}`}>{icon}</div>
      </div>
      <div>
        <div className="small text-gray-500">{date}</div>
        <span className={isBold === true ? "font-weight-bold" : null}>
          {text}
        </span>
      </div>
    </a>
  );
};
