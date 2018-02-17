import React from 'react';

export default function LecturerListItem({ lecturer }) {
  return (
    <tr>
      <td>{lecturer.name}</td>
      <td>{lecturer.email}</td>
      <td>{lecturer.staffNumber}</td>
      <td style={{ textAlign: 'right' }}>
        <button className="ui teal tiny button">
          <i className="edit icon" />
          Details
        </button>
      </td>
    </tr>
  );
}
