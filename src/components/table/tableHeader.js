import React from "react";
//
export default function TableHeader() {
  return (
    <thead className="thead-dark">
      <tr>
        <th>
          <div className="table-column-header mx-0 px-0">
            <span>ID</span>
          </div>
        </th>
        <th>
          <div className="table-column-header mx-0 px-0">
            <span>First Name</span>
          </div>
        </th>
        <th>
          <div className="table-column-header mx-0 px-0">
            <span>Last Name</span>
          </div>
        </th>
        <th>
          <div className="table-column-header mx-0 px-0">
            <span>Email</span>
          </div>
        </th>
        <th>
          <div className="table-column-header mx-0 px-0">
            <span>Phone</span>
          </div>
        </th>
      </tr>
    </thead>
  );
}
