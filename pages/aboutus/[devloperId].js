import { useRouter } from "next/router";
const devloper = () => {
  const router = useRouter();

  const userId = router.query.devloperId;
  const details = [
    { id: 1, name: "Yash", role: "Senior Devloper" },
    { id: 2, name: "Vaibhav", role: "Backend Devloper" },
    { id: 3, name: "Suresh", role: "Frontend Devloper" },
  ];

  const userDetails = details[userId];

  if (!userDetails) return <p>Developer doesn't exist</p>;
  return (
    <div>
      <h1>Name : {userDetails.name}</h1>
      <p>Role : {userDetails.role}</p>
    </div>
  );
};

export default devloper;
