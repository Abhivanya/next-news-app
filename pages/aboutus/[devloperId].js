import { useRouter } from "next/router";
import { useState } from "react";
const devloper = () => {
  const router = useRouter();

  const userId = router.query.devloperId;
  const details = [
    { id: 1, name: "Yash", role: "Senior Devloper" },
    { id: 2, name: "Vaibhav", role: "Backend Devloper" },
    { id: 3, name: "Suresh", role: "Frontend Devloper" },
  ];

  const devloper = details.find((dev) => dev.id == userId);

  if (!devloper) return <p>Developer doesn't exist</p>;
  return (
    <div>
      <h1>Name : {devloper.name}</h1>
      <p>Role : {devloper.role}</p>
    </div>
  );
};

export default devloper;
