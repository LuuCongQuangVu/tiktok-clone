import React from 'react';
import Button from '~/components/Button';

function MenuItem({ data, onClick }) {
  return (
    <Button
      icon={<i className={data?.icon}></i>}
      className="d-flex align-items-center justify-content-start m-0 p-16"
      style={{ border: 'none', borderTop: data?.separate ? '1px solid rgba(22,24,35,0.12)' : 'none' }}
      to={data?.to}
      href={data?.href}
      onClick={onClick || data?.onClick}
    >
      {data?.text}
    </Button>
  );
}

export default MenuItem;
