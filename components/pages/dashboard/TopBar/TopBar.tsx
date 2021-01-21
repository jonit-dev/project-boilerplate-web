import { NavAlertItem } from "./NavItem/NavAlertItem";
import { NavAlertOptionIcon } from "./NavItem/NavAlertOptionIcon";
import { NavAlertOptionImage } from "./NavItem/NavAlertOptionImage";
import { TopBarSearch } from "./TopBarSearch";
import { TopBarSearchMobile } from "./TopBarSearchMobile";

export const TopBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* Sidebar Toggle (Topbar) */}
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars" />
      </button>

      <TopBarSearch />

      {/* Topbar Navbar */}
      <ul className="navbar-nav ml-auto">
        <TopBarSearchMobile />

        {/* Nav Item - Alerts */}
        <NavAlertItem label="Alerts" counter="3+" iconClass="fas fa-bell fa-fw">
          <NavAlertOptionIcon
            title="December 12, 2019"
            body="A new monthly report is ready to download"
            icon={<i className="fas fa-file-alt text-white" />}
            isBold={true}
          />
          <NavAlertOptionIcon
            variant="warning"
            title="December 10, 2019"
            body="Another boring report!"
            icon={<i className="fas fa-file-alt text-white" />}
            isBold={false}
          />
        </NavAlertItem>
        {/* Nav Item - Messages */}
        <NavAlertItem
          label="Message Center"
          counter="7"
          iconClass="fas fa-envelope fa-fw"
        >
          <NavAlertOptionImage
            title=" Hi there! I am wondering if you can help me with a problem
            I've been having."
            subtitle="Emily Fowler · 58m"
            image={
              <>
                <img
                  className="rounded-circle"
                  src="/dashboard/img/undraw_profile_1.svg"
                  alt=""
                />
                <div className="status-indicator bg-success" />
              </>
            }
          />
        </NavAlertItem>

        <div className="topbar-divider d-none d-sm-block" />
        {/* Nav Item - User Information */}
        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Douglas McGee
            </span>
            <img
              className="img-profile rounded-circle"
              src="/dashboard/img/undraw_profile.svg"
            />
          </a>
          {/* Dropdown - User Information */}
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <a className="dropdown-item" href="#">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
              Profile
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
              Settings
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
              Activity Log
            </a>
            <div className="dropdown-divider" />
            <a
              className="dropdown-item"
              href="#"
              data-toggle="modal"
              data-target="#logoutModal"
            >
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};
