import './App.css';
import alanBtn from "@alan-ai/alan-sdk-web";
import React, { useEffect } from 'react';
import { saveAs } from 'file-saver'
import Resume from "./assets/My Resume.pdf"

function App() {
  useEffect(() => {
    alanBtn({
      key: '50da3625332740ac0c31eab7e16dd8522e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: (commandData) => {
        if (commandData.command === "downloadResume") {
          const saveFile = () => {
            saveAs(Resume)
          }

          saveFile()
        }

        if (commandData.command === "connections1") {
          const whatsapp = 'https://wa.me/2349076042815'
          window.open(whatsapp)
        }

        if (commandData.command === "connections2") {
          const facebook = 'https://m.me/tim.joels'
          window.open(facebook)
        }

        if (commandData.command === "connections3") {
          const github= 'https://github.com/t858'
          window.open(github)
        }

        if (commandData.command === "connections4") {
          const linkedin = 'https://www.linkedin.com/in/timmy-jemide-09a6b6244'
          window.open(linkedin)
        }

        if(commandData.command === 'connections5') {
          window.open('https://coruscating-belekoy-281f98.netlify.app')
          window.open('https://luxury-faloodeh-4caae2.netlify.app')
          window.open('https://glowing-halva-395e6b.netlify.app')
          window.open('https://elegant-chaja-cf8c47.netlify.app')
        }
      }
    })

    window.onload(alert("Tap on the mic button and say Hello. You can use instructions like Open Github, Open LinkedIn, Start Download on his resume"))
  }, []);
  return (
    <div className="App">
    </div>
  );
}

export default App;
