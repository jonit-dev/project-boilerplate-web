import Head from "next/head";

import { withAuth } from "../../components/HOC/withAuth";
import { Area } from "../../components/pages/dashboard/Area";
import { DashboardCard } from "../../components/pages/dashboard/DashboardCard";
import { DashboardProgressBar } from "../../components/pages/dashboard/DashboardProgressBar";
import { PageHeading } from "../../components/pages/dashboard/PageHeading";
import { SideBar } from "../../components/pages/dashboard/SideBar";
import { TopBar } from "../../components/pages/dashboard/TopBar";
import { appEnv } from "../../constants/appEnv";

function DashboardScreen() {
  return (
    <>
      <Head>
        <div>
          <title>{appEnv.general.name} | Dashboard</title>
          {/* Custom fonts for this template*/}
          <link
            href="/dashboard/vendor/fontawesome-free/css/all.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />
          {/* Custom styles for this template*/}
          <link href="/dashboard/css/sb-admin-2.min.css" rel="stylesheet" />
        </div>
      </Head>

      <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          <SideBar />

          {/* Content Wrapper */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              <TopBar />

              {/* Begin Page Content */}
              <div className="container-fluid">
                {/* Page Heading */}
                <PageHeading>Dashboard</PageHeading>

                {/* Content Row */}
                <div className="row">
                  {/* Earnings (Monthly) Card Example */}

                  <DashboardCard
                    variant="primary"
                    label="Earnings (Monthly)"
                    value="$40,000"
                    icon={<i className="fas fa-calendar fa-2x text-gray-300" />}
                  />

                  <DashboardCard
                    variant="success"
                    label="Earnings (Annual)"
                    value="$215,000"
                    icon={
                      <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                    }
                  />

                  <DashboardCard
                    variant="info"
                    label="Tasks"
                    value="50%"
                    icon={
                      <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                    }
                  />

                  <DashboardCard
                    variant="warning"
                    label="Pending Requests"
                    value="18"
                    icon={<i className="fas fa-comments fa-2x text-gray-300" />}
                  />
                </div>
                {/* Content Row */}
                <div className="row">
                  <Area title="Earnings Overview" col="col-xl-8 col-lg-7">
                    <p>Some content here</p>
                  </Area>

                  <Area title="Revenue Sources" col="col-xl-4 col-lg-5">
                    <p>And more content here!</p>
                  </Area>
                </div>
                {/* Content Row */}
                <div className="row">
                  <Area title="Projects" col="col-lg-6 mb-4">
                    <DashboardProgressBar
                      label="Target"
                      variant="primary"
                      valueNow={20}
                      valueMin={0}
                      valueMax={100}
                    />
                    <DashboardProgressBar
                      label="Projects"
                      variant="danger"
                      valueNow={30}
                      valueMin={0}
                      valueMax={100}
                    />
                    <DashboardProgressBar
                      label="Sales Tracking"
                      variant="warning"
                      valueNow={40}
                      valueMin={0}
                      valueMax={100}
                    />
                    <DashboardProgressBar
                      label="Customer Database"
                      variant="primary"
                      valueNow={60}
                      valueMin={0}
                      valueMax={100}
                    />
                  </Area>

                  <Area title="Illustrations" col="col-lg-6 mb-4">
                    <div className="text-center">
                      <img
                        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                        style={{ width: "25rem" }}
                        src="/dashboard/img/undraw_posting_photo.svg"
                        alt=""
                      />
                    </div>
                    <p>
                      Add some quality, svg illustrations to your project
                      courtesy of{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://undraw.co/"
                      >
                        unDraw
                      </a>
                      , a constantly updated collection of beautiful svg images
                      that you can use completely free and without attribution!
                    </p>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://undraw.co/"
                    >
                      Browse Illustrations on unDraw →
                    </a>
                  </Area>
                </div>
              </div>
            </div>
            {/* Footer */}
            <footer className="sticky-footer bg-white">
              <div className="container my-auto">
                <div className="copyright text-center my-auto">
                  <span>Copyright © Your Website 2020</span>
                </div>
              </div>
            </footer>
            {/* End of Footer */}
          </div>
          {/* End of Content Wrapper */}
        </div>
        {/* End of Page Wrapper */}
        {/* Scroll to Top Button*/}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up" />
        </a>
        {/* Logout Modal*/}
        <div
          className="modal fade"
          id="logoutModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Bootstrap core JavaScript--> */}
      <script src="/dashboard/vendor/jquery/jquery.min.js"></script>
      <script src="/dashboard/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

      {/* <!-- Core plugin JavaScript--> */}
      <script src="/dashboard/vendor/jquery-easing/jquery.easing.min.js"></script>

      {/* <!-- Custom scripts for all pages--> */}
      <script src="/dashboard/js/sb-admin-2.min.js"></script>

      {/* <!-- Page level plugins --> */}
      <script src="/dashboard/vendor/chart.js/Chart.min.js"></script>

      {/* <!-- Page level custom scripts --> */}
      <script src="/dashboard/js/demo/chart-area-demo.js"></script>
      <script src="/dashboard/js/demo/chart-pie-demo.js"></script>
    </>
  );
}

export default withAuth(DashboardScreen);
