import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3000/api/students`).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Data user</h4>
              <Link to="/" className="btn btn-primary float-end">
                tambah data
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nama</th>
                    <th>No tlpn</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Edit</th>
                    <th>Hapus</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student;
