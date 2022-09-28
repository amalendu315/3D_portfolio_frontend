import React, { useEffect } from "react";
import * as THREE from "three";
import Typograpghy from "@mui/material/Typography/Typography";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiThreedotjs,
} from "react-icons/si";
import { Link } from "react-router-dom";

import moonImage from "../../Images/moon.jpg";
import venusImage from "../../Images/venus.jpg";
import spaceImage from "../../Images/space.jpg";
import "./Home.css";
import Timelines from "../Timeline/Timeline";
import YoutubeCard from "../YoutubeCard/YoutubeCard";
import Typography from "@mui/material/Typography/Typography";
import { MouseOutlined } from "@mui/icons-material";

const Home = ({ timelines, youtubes, skills }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".homeCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
    });

    const moonGeometry = new THREE.SphereGeometry(2, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
    const pointLight = new THREE.PointLight(0xffffff, 1);
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);

    const venusGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);

    scene.add(moon);
    scene.add(pointLight);
    scene.add(pointLight2);
    scene.add(venus);
    scene.background = spaceTexture;
    venus.position.set(8, 5, 5);
    camera.position.set(4, 4, 8);
    pointLight.position.set(8, 5, 5);
    pointLight2.position.set(-8, -5, -5);

    const constSpeed = 0.01;

    window.addEventListener("mousemove", (e) => {
      if (e.clientX < window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
      if (e.clientY > window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y += constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y += constSpeed;
      }
      if (e.clientY < window.innerHeight / 2) {
        moon.rotation.x -= constSpeed;
        moon.rotation.y -= constSpeed;
        venus.rotation.x -= constSpeed;
        venus.rotation.y -= constSpeed;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.001;
      venus.rotation.y += 0.001;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };

    animate();
    return window.addEventListener('scroll',(e) => {
      camera.rotation.z = window.scrollY * 0.003;
      camera.rotation.y = window.scrollY * 0.003;
      const skillsBox = document.getElementById("homeSkillsBox");
      if(window?.scrollY > 1500) {
        skillsBox?.style?.animationName = "homeSkillBoxAnimationOn";
      } else {
        skillsBox?.style?.animationName = "homeSkillBoxAnimationOff";
      }
    })
  }, []);

  return (
    <div className="home">
      <canvas className="homeCanvas"></canvas>
      <div className="homeCanvasContainer">
        <Typograpghy variant="h1">
          <p>A</p>
          <p>M</p>
          <p>A</p>
          <p>L</p>
          <p>E</p>
          <p>N</p>
          <p>D</p>
          <p>U</p>
        </Typograpghy>
        <div className="homeCanvasBox">
          <Typography variant="h2">DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">TEACHER</Typography>
          <Typography variant="h2">CONTENT CREATOR</Typography>
        </div>

        <Link to="/projects">VIEW WORK</Link>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        <Typograpghy variant="h3">Timeline</Typograpghy>
        <Timelines timelines={timelines} />
      </div>
      <div className="homeSkills">
        <Typograpghy variant="h3">Skills</Typograpghy>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillFaces homeSkillFace1">
            <img src={skills?.image1?.url} alt="Face1" />
          </div>
          <div className="homeCubeSkillFaces homeSkillFace2">
            <img src={skills?.image2?.url} alt="Face2" />
          </div>
          <div className="homeCubeSkillFaces homeSkillFace3">
            <img src={skills?.image3?.url} alt="Face3" />
          </div>
          <div className="homeCubeSkillFaces homeSkillFace4">
            <img src={skills?.image5?.url} alt="Face4" />
          </div>
          <div className="homeCubeSkillFaces homeSkillFace5">
            <img src={skills?.image5?.url} alt="Face5" />
          </div>
          <div className="homeCubeSkillFaces homeSkillFace6">
            <img src={skills?.image6?.url} alt="Face5" />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox" id="homeSkillsBox">
          <SiCplusplus />
          <SiReact />
          <SiJavascript />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiThreedotjs />
        </div>
      </div>
      <div className="homeYoutube">
        <Typograpghy variant="h3">Youtube</Typograpghy>
        <div className="homeYoutubeWrapper">
          {youtubes?.map((youtube) => (
            <YoutubeCard
              image={youtube.image.url}
              title={youtube.title}
              url={youtube.url}
              id={youtube._id}
              key={youtube._id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
