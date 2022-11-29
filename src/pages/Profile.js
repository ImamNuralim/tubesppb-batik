import ProfileCard from "../component/ProfileCard";
import "./Profile.css";

export default function Profile() {

  const data = [
    {
      name: "Batikpedia",
      pict: "https://blog.mizanstore.com/wp-content/uploads/2017/10/membatik_by_nakysa06-724x1024.jpg",
      locations: "Batikpedia adalah website yang memperkenalkan batik dari berbagai daerah Indonesia. Tidak hanya memberitahu asal-usulnya melainkan memberi tahu makna dari motif batik tersebut.",
      instagram: "knockknock_6",
      github: "ImamNuralim"
    },
    
  ];

  return (
    <div className="container">
      <h1></h1>
      {data.map(profile => <ProfileCard profile={profile} />)}
    </div>
  );
}