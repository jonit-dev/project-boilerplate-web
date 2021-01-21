interface IProps {
  label: string;
  iconClass: string;
  counter: string;
  children?: React.ReactNode;
}

export const NavAlertItem: React.FC<IProps> = ({
  label,
  iconClass,
  counter,
  children,
}) => {
  return (
    <li className="nav-item dropdown no-arrow mx-1">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="alertsDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <i className={iconClass} />
        {/* Counter - Alerts */}
        <span className="badge badge-danger badge-counter">{counter}</span>
      </a>
      {/* Dropdown - Alerts */}
      <div
        className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
        aria-labelledby="alertsDropdown"
      >
        <h6 className="dropdown-header">{label}</h6>

        {children}
        <a className="dropdown-item text-center small text-gray-500" href="#">
          Read More Messages
        </a>
      </div>
    </li>
  );
};
