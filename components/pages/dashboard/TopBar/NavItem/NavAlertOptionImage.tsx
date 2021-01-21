interface IProps {
  title: string;
  subtitle: string;
  image: React.ReactNode;
}

export const NavAlertOptionImage: React.FC<IProps> = ({
  title,
  subtitle,
  image,
}) => {
  return (
    <a className="dropdown-item d-flex align-items-center" href="#">
      <div className="dropdown-list-image mr-3">{image}</div>
      <div className="font-weight-bold">
        <div className="text-truncate">{title}</div>
        <div className="small text-gray-500">{subtitle}</div>
      </div>
    </a>
  );
};
