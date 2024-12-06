import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe, mostHearedSong } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="bg-gray-900 sm:px-16 px-6">
    <div
      className={`${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4`}
    >
      <div className={`${layout.sectionInfo}`}>
        <h2 className="text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300">
          {aboutMe.name}
        </h2>
        <p
          className={`font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`}
        >
          {aboutMe.tagLine}
        </p>
        <div className="flex flex-row mt-4">
          {socialMedia.map((social, index) => (
            <a
              href={social.link}
              target="_blank"
              key={social.id}
              index={index}
              className="text-white mr-5 text-[25px] hover:text-teal-200"
            >
              {React.createElement(social.icon)}
            </a>
          ))}
        </div>

        <div className="flex gap-6 mt-10">
          <a href={resumeLink} target="_blank">
            <Button styles="inline-flex items-center justify-center" text="Resume" icon={AiFillGithub} />
          </a>
          <a href={repoLink} target="_blank">
            <Button
              styles="inline-flex items-center justify-center"
              text="Star"
              icon={AiFillGithub}
            />
          </a>
        </div>
      </div>

      <div className={`${layout.sectionInfo}`}>
        {/* Spotify Song Section */}
        <div className="flex flex-col items-center flex-grow">
          <h3 className="text-lg font-semibold text-white">My Top Song</h3>
          <div className="flex flex-col items-center mt-3">
            <a href={mostHearedSong.spotifyUrl} target="_blank" rel="noopener noreferrer">
              <img
                src={mostHearedSong.cover}
                alt={mostHearedSong.name}
                className="w-[150px] h-[150px] object-cover rounded-lg mb-2 transition-transform transform hover:scale-105"
              />
            </a>
            <p className="text-white text-lg">{mostHearedSong.name}</p>
            <p className="text-teal-200 text-sm">{mostHearedSong.artists.map(artist => artist.name).join(', ')}</p>
          </div>
        </div>
      </div>
      
      {/* Profile Picture */}
      <div>
        <img
          src={profilePic}
          alt="Daniel Jessner"
          className="w-[200px] h-[200px] border-2 border-teal-200 relative z-[5] rounded-full"
        />
      </div>
    </div>

    <div className="text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4 mt-8">
      <p>
        Daniel Jessner - 2024
      </p>
    </div>
  </footer>
);

export default Footer;
