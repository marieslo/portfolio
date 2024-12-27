import "./App.css";

export default function App() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      <div className="flex flex-col items-center text-center text-white py-10 space-y-10">
      <header>
        <div className="profle-photo">
      <img
        src="https://avatars.githubusercontent.com/u/110108878?s=400&u=cf2a2da1b38319be0e86f3afe47225d7870250a4&v=4" 
        alt="Profile photo"
      />
      </div>
        <div className="text-5xl font-bold">Hello. I'm Marie. I'm a Full-stack Developer</div> 
        </header>
        <main className="text-xl">Here are some of my projects</main>
        <footer>
          Feel free to contact me
        </footer>
      </div>
    </div>
  );
}
