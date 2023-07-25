import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faBucket } from "@fortawesome/free-solid-svg-icons";

export default function SideNavBar() {
  return (
    <div className="">
      <div className="border rounded mb-2 text-center">
        <h1 className="fs-2 m-4">Web3 Browser</h1>
      </div>

      <div className="border rounded mb-2 p-3">
        <FontAwesomeIcon icon={faBolt} />
        Quick Access
        <ul className="nav flex-column ms-3">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Photo.jpg
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Video.mp4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Document.docx
            </a>
          </li>
        </ul>
        <hr />
        <FontAwesomeIcon icon={faBucket} />
        Browse Bucket
        <ul className="nav flex-column ms-3">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Bucket A
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Bucket B
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Bucket C
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Show all
            </a>
          </li>
        </ul>
      </div>

      <div className="border rounded">
        <nav>
          <ul>
            <li>
              <a href="#">Guide</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
          V1.0.0
        </nav>
      </div>
    </div>
  );
}
