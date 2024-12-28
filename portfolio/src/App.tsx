import { useState } from "react";
import "./App.css";

export default function App() {
  const [showList, setShowList] = useState(false);

  // Represent projects (no sorting)
  const projects = Array.from({ length: 10 }).map((_, index) => ({
    id: index,
    name: `Project ${index + 1}`,
    dateAdded: new Date(2022, index, 1), 
    imageUrl: `https://picsum.photos/300?random=${index + 1}`,
  }));

  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen">
      <div className="flex flex-col items-center text-center text-white py-10 space-y-10">
      <header>
        <div className="header-container flex items-center">
          <div className="text-container mr-6">
            <div>Text about me Text about me Text about me</div>
          </div>
          <div className="profile-photo">
            <img
              src="https://avatars.githubusercontent.com/u/110108878?s=200&u=cf2a2da1b38319be0e86f3afe47225d7870250a4&v=4"
              alt="My photo"
            />
          </div>
          <div className="social-media">
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/marieslo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/stickers/50/github.png"
                  alt="github"
                />
              </a>
              <a
                href="https://linkedin.com/marie-slovokhotov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/stickers/50/linkedin.png"
                  alt="linkedin"
                />
              </a>
              <a
                href="https://t.me/marieslo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/stickers/50/telegram-app.png"
                  alt="telegram-app"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
        <main className="text-xl w-full overflow-hidden">
        <h1 className="my-projects">My projects</h1>
           <div className="toggle-button">
            <div
              onClick={() => setShowList(!showList)}
              className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600"
            >
              {showList ? "slider view" : "list view"}
            </div>
          </div>
          {showList && (
            <div className="mt-8">
              <ol className="slider-item">
                {projects.map((project) => (
                  <li key={project.id} className="flex items-center space-x-4 mb-4">
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <p className="text-sm text-gray-500">
                        Added on {project.dateAdded.toLocaleDateString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
          {/* Slider View */}
          {!showList && (
            <div className="slider">
              <div className="slider-track">
                {projects.map((project) => (
                  <div key={project.id} className="slider-item">
                    <img src={project.imageUrl} alt={project.name} />
                    <p>{project.name}</p>
                  </div>
                ))}
                {/* Duplicate items to create infinite scroll effect */}
                {projects.map((project) => (
                  <div key={`dup-${project.id}`} className="slider-item">
                    <img
                      src={project.imageUrl}
                      alt={`Project Duplicate ${project.name}`}
                    />
                    <p>{project.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
        <footer className="footer-container">
          <div className="icons-by-icons8">
              Icons by &nbsp;
              <a
                href="https://icons8.com"
                target="_blank"
                rel="noopener noreferrer"
                className="icons-by-icons8"
              >
                Icons8
              </a>
            </div>  
            <div className="text-center text-white mt-20 text-sm">
            &copy; 2022 - {new Date().getFullYear()} | Marie Slovokhotov
          </div>
        </footer>
      </div>
    </div>
  );
}